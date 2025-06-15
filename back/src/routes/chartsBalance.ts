import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/monthly', (req: Request, res: Response) => {
    const testData = {
        balanceHistory: [
            { month: 'Jan', revenue: 10000 },
            { month: 'Feb', revenue: 15000 },
            { month: 'Mar', revenue: 10000 },
            { month: 'Apr', revenue: 1000 },
            { month: 'May', revenue: 0 },
            { month: 'Jun', revenue: 5000 },
            { month: 'Jul', revenue: 3200 },
            { month: 'Aug', revenue: 1000 },
            { month: 'Sep', revenue: 15000 },
            { month: 'Oct', revenue: 18000 },
            { month: 'Nov', revenue: 20000 },
        ],
        totalRevenue: 100000
    };
    res.json(testData);
});

export default router;