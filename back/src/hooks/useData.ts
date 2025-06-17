import { useState, useEffect } from 'react';
import { fetchWithAuth } from '../utils/api';

export const useFinancialData = (endpoint: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
    const fetchData = async () => {
        try {
        const response = await fetchWithAuth(endpoint);
        const result = await response.json();
        setData(result);
        } catch (err) {
        setLoading(false);
        }
    };

    fetchData();
    }, [endpoint]);

    return { data, loading, error };
};