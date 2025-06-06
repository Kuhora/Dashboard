import React, { useState, useEffect } from 'react';
import '../styles/balance.css';

export function Balance() {
    const [balanceData, setBalanceData] = useState({
    total: 0,
    currency: 'USD',
    lastUpdated: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState < string | null > (null);

    useEffect(() => {
    const userBalance = async () => {
        try {
        const localHost = 'http://localhost:4444';
        const response = await fetch(`${localHost}/api/balance`);
        
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        setBalanceData(data);
        setError(null);
        } catch (err) {
        setError(err.message || 'Failed to load balance');
        } finally {
        setLoading(false);
        }
    };

    userBalance();
  }, []); // Empty dependencies array

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
    <div className="balanceWallet">
        <h2>Total Revenue</h2>
        <p>
        {balanceData.currency} {balanceData.total.toFixed(2)}
        </p>
        <small>Updated on: {new Date(balanceData.lastUpdated).toLocaleString()}</small>
    </div>
    );
}