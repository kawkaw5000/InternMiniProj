import { Request, Response, NextFunction } from 'express';
import { UserManager } from '../repository/userManager';

export class BaseController {
    public _userManager: UserManager;

    constructor() { 
        this._userManager = new UserManager();
    }
}
