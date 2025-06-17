import React, { useState, useEffect } from 'react';
import '../styles/chartBalance.css';

interface ChartDataItem {
    month: string;
    revenue: number;
}

interface ChartData {
    balanceHistory: ChartDataItem[];
}

const ChartBalance = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [chartData, setChartData] = useState<ChartDataItem[]>([]);
    const [timeRange, setTimeRange] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                console.log(`Fetching ${timeRange} data...`);
                
                const response = await fetch(`http://localhost:4444/api/analytics/${timeRange}`);
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${timeRange} data: ${response.status}`);
                }
                
                const result: ChartData = await response.json();
                console.log('Received data:', result);
                
                if (!result.balanceHistory || result.balanceHistory.length === 0) {
                    throw new Error('No data available');
                }
                
                setChartData(result.balanceHistory);
            } catch (error) {
                console.error('Error:', error);
                setError(error instanceof Error ? error.message : 'Error ???');
                setChartData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [timeRange]);

    const maxValue = Math.max(...chartData.map(item => item.revenue), 1);

    if (loading) {
        return (
            <div className="chartContainer">
                <div className="loading">Loading chart data...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="chartContainer">
                <div className="errorMessage">
                    Error: {error}
                </div>
            </div>
        );
    }

    if (chartData.length === 0) {
        return (
            <div className="chartContainer">
                <div className="errorData">
                    No data available
                </div>
            </div>
        );
    }

    return (
        <div className="chartContainer">
            <div className="chartHeader">
                <h2 className="chartTitle">Revenue Over Time:</h2>
                <div className="timeFilter">
                    <button 
                        className={`timeFilterBtn ${timeRange === 'monthly' ? 'active' : ''}`}
                        onClick={() => setTimeRange('monthly')}
                    >
                        Monthly
                    </button>
                    <button 
                        className={`timeFilterBtn ${timeRange === 'quarterly' ? 'active' : ''}`}
                        onClick={() => setTimeRange('quarterly')}
                    >
                        Quarterly
                    </button>
                    <button 
                        className={`timeFilterBtn ${timeRange === 'yearly' ? 'active' : ''}`}
                        onClick={() => setTimeRange('yearly')}
                    >
                        Yearly
                    </button>
                </div>
            </div>
            
            <div className="chartWrapper">
                <div className="y-axis">
                    {[100, 75, 50, 25, 0].map((percent) => {
                        const value = Math.ceil((maxValue * percent) / 100);
                        return (
                            <div key={`y-tick-${percent}`} className="y-tick">
                                <span className="y-label">${value.toLocaleString()}</span>
                                <div className="gridLine"></div>
                            </div>
                        );
                    })}
                </div>
                
                <div className="barContainer">
                    {chartData.map((item, index) => {
                        const heightPercent = (item.revenue / maxValue) * 100;
                        return (
                            <div key={`${timeRange}-${index}`} className="barWrapper">
                                <div className="barBG">
                                    <div 
                                        className="bar" 
                                        style={{ 
                                            height: `${heightPercent}%`,
                                            backgroundColor: item.revenue === maxValue ? '#7c3aed' : '#a78bfa'
                                        }}
                                    >
                                        <div className="barValue">${item.revenue.toLocaleString()}</div>
                                    </div>
                                </div>
                                <span className="x-label">{item.month}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="chartFooter">
                </div>
                <div className="lastUpdated">
                    {new Date().toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                    })}
                </div>
            </div>
    );
};

export default ChartBalance;