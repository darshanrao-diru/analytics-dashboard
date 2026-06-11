import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({
      totalRevenue: 328000,
      activeUsers: 17300,
      conversionRate: 3.24,
      churnRate: 1.2,
      avgOrderValue: 145.5,
      ltv: 2450,
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
