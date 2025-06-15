import React, { useState, useEffect } from 'react';
import '../styles/balance.css';

interface Transaction {
    date: string;
    description: string;
    reference: string;
    amount: number;
}

interface BalanceData {
    transactions: Transaction[];
    cashFlow: {
        balance: number;
    };
    lastUpdated: string;
}

export function Balance() {
    const [data, setData] = useState<BalanceData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4444/api/balance');
                if (!response.ok) throw new Error('Error, try again please');
                const result = await response.json();
                setData({
                    transactions: result.transactions,
                    cashFlow: result.cashFlow,
                    lastUpdated: result.lastUpdated
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="loading">Loading transactions...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!data) return <div className="error">No data available</div>;

return (  
  <div className="balanceContainer">
    <div className="transactionsHeader">
      <h2>Recent Transactions</h2>
      <button className="buttonViewAll">View All</button>
    </div>
    
    <div className="transactionsList">
      {data.transactions.map((transaction, index) => (
        <div key={index} className="transactionItem">
          <div className="transactionDate">{transaction.date}</div>
          <div className="transactionDetails">
            <div className="transactionInfos">
              <div className="transactionDesc">{transaction.description}</div>
              {transaction.reference && (
                <div className="transactionRef">{transaction.reference}</div>
              )}
            </div>
            <div className={`transactionBalance ${
              transaction.amount >= 0 ? 'positive' : 'negative'
            }`}>
              {transaction.amount >= 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
            </div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="TotalCash">
      <div className="TotalCashHeader">
        <h3>Total Business checking:</h3>
      </div>
      <div className="TotalBusCheck">${data.cashFlow.balance.toFixed(2)}</div>
    </div>
    
    <div className="lastUpdated">
      Last updated: {new Date(data.lastUpdated).toLocaleString()}
    </div>
  </div>
);
}