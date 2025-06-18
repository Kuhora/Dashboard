import express, { Request, Response } from 'express';

const router = express.Router();

// mock dados
const monthlyData = {
    balanceHistory: [
        { month: 'Jan', revenue: 12540 },
        { month: 'Feb', revenue: 16975 },
        { month: 'Mar', revenue: 15621 },
        { month: 'Apr', revenue: 9059 },
        { month: 'May', revenue: 11052 },
        { month: 'Jun', revenue: 13030 },
        { month: 'Jul', revenue: 16090 },
        { month: 'Aug', revenue: 14100 },
        { month: 'Sep', revenue: 17056 },
        { month: 'Oct', revenue: 19032 },
        { month: 'Nov', revenue: 21340 },
        { month: 'Dec', revenue: 23050 }
    ],
};

const quarterlyData = {
    balanceHistory: [
        { month: 'Q1', revenue: 45136 },
        { month: 'Q2', revenue: 33141 },
        { month: 'Q3', revenue: 47246 },
        { month: 'Q4', revenue: 63422 }
    ],
};

const yearlyData = {
    balanceHistory: [
        { month: '2022', revenue: 159584 },
        { month: '2023', revenue: 189234 },
        { month: '2024', revenue: 202933 },
        { month: '2025', revenue: 260000 }
    ],
};

router.get('/monthly', (req: Request, res: Response) => {
    res.json(monthlyData);
});

router.get('/quarterly', (req: Request, res: Response) => {
    res.json(quarterlyData);
});

router.get('/yearly', (req: Request, res: Response) => {
    res.json(yearlyData);
});

export default router;