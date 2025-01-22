import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({ message: 'Authorization header missing' });
        return;
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
        if (err) {
            res.status(403).json({ message: 'Invalid or expired token' });
            return;
        }

        (req as any).user = user;

        next();
    });
};

const conditionalAuthMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    if (req.path === '/LexerAmorcillo/GetUserHome') {   
        // Skip authentication for this route
        return next();
    }
    // Apply authentication middleware
    authenticateJWT(req, res, next);
};

export { authenticateJWT, conditionalAuthMiddleware };
