import express from 'express';
import cors from 'cors';
import balanceRouter from './routes/balance';
import analyticsRouter from './routes/chartsBalance';

const app = express();
const PORT = 4444;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use('/api/balance', balanceRouter);

app.use('/api/analytics', analyticsRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

