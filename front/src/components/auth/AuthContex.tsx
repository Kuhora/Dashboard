import { createContext, useContext, useState } from 'react';

interface AuthContext {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    const login = (newToken: string) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    };

    const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    };

    return (
    <AuthContext.Provider value={{ token, login, logout }}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth use with AuthProvider');
    return context;
};