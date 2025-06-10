import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {

    const mockData = {
    total: 1500.75,
    currency: 'USD',
    lastUpdated: new Date().toISOString()
    };
    
    res.json(mockData);
});

export default router;