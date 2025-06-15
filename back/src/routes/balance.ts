import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    try {
        const responseData = {
            userName: "Jingyuan",
            accounts: {
                checking: 12000,
                envelopes: 8450
            },
            transactions: [
                {
                    date: '06/04',
                    description: 'Fei xiao, Bank',
                    amount: -2000.00
                },
                {
                    date: '06/02',
                    description: 'Repayment',
                    reference: '',
                    amount: 5000.00
                }
            ],
            cashFlow: {
                balance: 14550,
            },
            lastUpdated: new Date().toISOString()
        };
        res.json(responseData);
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error'
        });
    }
});

export default router;