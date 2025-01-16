    import { BaseController } from './baseController';
    import { ErrorCode } from '../utils/utilities';
    import { Request, Response, NextFunction } from 'express';

    export class UserController extends BaseController {
        constructor() {
            super();
        }

        public register = async (req: Request, res: Response, next: NextFunction) => {
            const user = req.body;
            const result = await this._userManager.signUp(user);

            try {
                if (result.code === ErrorCode.Success) {
                    res.status(200).json(result);
                } else {
                    res.status(400).json(result);
                }
            } catch (error) {
                res.status(500).json({ code: ErrorCode.InternalError, message: 'Unknown error' });
            }
        };

        public login = async (req: Request, res: Response, next: NextFunction) => {
            const user = req.body;
            const result = await this._userManager.authorize(user.Username, user.Password);

            try {
                if (result.code === ErrorCode.Success) {
                    res.status(200).json(result);
                } else {
                    res.status(400).json(result);
                }
            } catch (error) {
                res.status(500).json({ code: ErrorCode.InternalError, message: 'Unknown error' });
            }
        };

        public logout = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                res.status(200).json({ message: "Successfully logged out" });
            } catch (error) {
                res.status(500).json({ code: ErrorCode.InternalError, message: 'Unknown error during logout' });
            }
        };
    
        public updateUserAcc = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                const currentUser = (req as any).user;
                const loggedInUserId = currentUser.sub;
                const userToUpdate = req.body;
        
                if (loggedInUserId !== userToUpdate.UserId) {
                    res.status(403).json({ message: "User is not authenticated" });
                    return;
                }
        
                const result = await this._userManager.updateUser(userToUpdate);
        
                if (result.code === ErrorCode.Success) {
                    res.status(200).json(result);
                } else {
                    res.status(400).json(result);
                }
            } catch (error) {
                res.status(500).json({ code: ErrorCode.InternalError, message: 'Unknown error' });
            }
        };
        

        public deleteUserAcc = async (req: Request, res: Response, next: NextFunction) => {
            const { UserId } = req.body;
            const result = await this._userManager.deleteUser(UserId);

            try {
                if (result.code === ErrorCode.Success) {
                    res.status(200).json(result);
                } else {
                    res.status(400).json(result);
                }
            } catch (error) {
                res.status(500).json({ code: ErrorCode.InternalError, message: 'Unknown error' });
            }
        };

        public getUserList = async (req: Request, res: Response, next: NextFunction) => {
            try {
                const currentUser = (req as any).user;
                const loggedInUserId = currentUser.sub;
                
                if (!loggedInUserId) {
                    res.status(403).json({ message: "User is not authenticated" });
                    return;
                }
                
                const users = await this._userManager.userList();
                res.status(200).json(users);
            } catch (error) {
                res.status(500).json({ code: ErrorCode.InternalError, message: 'Unknown error' });
            }
        };
    }