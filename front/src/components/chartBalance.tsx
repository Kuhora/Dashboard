import React, { useState, useEffect } from 'react';
import '../styles/chartBalance.css';

interface ChartDataItem {
    month: string;
    revenue: number;
}

interface ChartData {
    balanceHistory: ChartDataItem[];
    totalRevenue: number;
}

const ChartBalance = () => {
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState<ChartDataItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4444/api/analytics/monthly');
                if (!response.ok) throw new Error('Network error');
                
                const result: ChartData = await response.json();
                setChartData(result.balanceHistory);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching chart data', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="loading">Loading chart data...</div>;

    const months = chartData.map(item => item.month);
    const revenues = chartData.map(item => item.revenue);
    const maxValue = Math.max(...revenues) || 1; 

    return (
        <div className="chartContainer">
            <h2 className="chartTitle">Revenue Over Time:</h2>
            
            <div className="chartWrapper">
                <div className="y-axis">
                    {[Math.ceil(maxValue * 1.2), Math.ceil(maxValue * 0.9), Math.ceil(maxValue * 0.6), Math.ceil(maxValue * 0.3), 0]
                        .map((value) => (
                            <div key={value} className="y-tick">
                                <span className="y-label">${value.toLocaleString()}</span>
                                <div className="gridLine"></div>
                            </div>
                        ))}
                </div>
                
                <div className="barContainer">
                    {revenues.map((value, index) => (
                        <div key={index} className="barWrapper">
                            <div className="barBG">
                                <div 
                                    className="bar" 
                                    style={{ 
                                        height: `${(value / maxValue) * 100}%`,
                                        backgroundColor: value === maxValue ? '#7c3aed' : '#a78bfa'
                                    }}
                                >
                                    <div className="barValue">${value.toLocaleString()}</div>
                                </div>
                            </div>
                            <span className="x-label">{months[index]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChartBalance;