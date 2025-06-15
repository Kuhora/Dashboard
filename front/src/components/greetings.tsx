import React, { useState, useEffect, useRef } from 'react';
import '../styles/greetins.css';

interface GreetingsData {
    userName: string;
    accounts: {
        checking: number;
        envelopes: number;
    };
}

const Greetings = () => {
    const [data, setData] = useState<GreetingsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4444/api/balance');
                if (!response.ok) throw new Error('Network error');
                const result = await response.json();
                setData({
                    userName: result.userName,
                    accounts: result.accounts
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Fade in animation
    useEffect(() => {
        if (!loading && !error && data && containerRef.current) {
            const container = containerRef.current;
            container.style.opacity = '0';
            container.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                container.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                container.style.opacity = '1';
                container.style.transform = 'translateY(0)';
            }, 100);
        }
    }, [loading, error, data]);

    const getGreeting = () => {
        const hours = new Date().getHours();
        if (hours < 12) return 'Good Morning';
        if (hours < 18) return 'Good Afternoon';
        return 'Good Evening';
    };

    if (loading) return <div className="loading">Loading user data...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (!data) return <div className="error">No data available</div>;

    return (
        <div ref={containerRef} className="greetingsCont">
            <h1>{getGreeting()}, {data.userName}</h1>
            <h2>Total business checking</h2>
            <div className="accountSum">
                <div className="accountAmount">
                    <h3>Checking</h3>
                    <p>${data.accounts.checking.toFixed(2)}</p>
                </div>
                <div className="accountAmount">
                    <h3>Envelopes</h3>
                    <p>${data.accounts.envelopes.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default Greetings;