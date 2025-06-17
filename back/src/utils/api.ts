export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
    const token = localStorage.getItem('token');

    const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers,
    };

    const response = await fetch(`http://localhost:4444${url}`, {
    ...options,
    headers,
    });

    if (response.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '/login';
    throw new Error('Unauthorized');
    }

    if (!response.ok) {
    throw new Error('Network response was not ok');
    }

    return response;
};