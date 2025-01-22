import { Request, Response, NextFunction } from 'express';

export const isAuthorize = (req: Request, res: Response, next: NextFunction): void => {
    const currentUser = (req as any).user;

    if (!currentUser || !currentUser.sub) {
        res.status(403).json({ message: 'User is not authenticated' });
        return;
    }

    req.body.loggedInUserId = currentUser.sub;

    next();
};
