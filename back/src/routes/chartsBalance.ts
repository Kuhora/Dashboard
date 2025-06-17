import express, { Request, Response } from 'express';

const router = express.Router();

// Sample data - replace with your actual data source
const monthlyData = {
    balanceHistory: [
        { month: 'Jan', revenue: 12000 },
        { month: 'Feb', revenue: 18000 },
        { month: 'Mar', revenue: 15000 },
        { month: 'Apr', revenue: 9000 },
        { month: 'May', revenue: 11000 },
        { month: 'Jun', revenue: 13000 },
        { month: 'Jul', revenue: 16000 },
        { month: 'Aug', revenue: 14000 },
        { month: 'Sep', revenue: 17000 },
        { month: 'Oct', revenue: 19000 },
        { month: 'Nov', revenue: 21000 },
        { month: 'Dec', revenue: 23000 }
    ],
    totalRevenue: 189000
};

const quarterlyData = {
    balanceHistory: [
        { month: 'Q1', revenue: 45000 },
        { month: 'Q2', revenue: 33000 },
        { month: 'Q3', revenue: 47000 },
        { month: 'Q4', revenue: 64000 }
    ],
    totalRevenue: 189000
};

const yearlyData = {
    balanceHistory: [
        { month: '2020', revenue: 150000 },
        { month: '2021', revenue: 189000 },
        { month: '2022', revenue: 210000 },
        { month: '2023', revenue: 250000 }
    ],
    totalRevenue: 799000
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