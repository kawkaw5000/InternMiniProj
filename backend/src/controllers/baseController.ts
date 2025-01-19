import { Request, Response, NextFunction } from 'express';
import { UserManager } from '../repository/userManager';
import { HomeManager } from '../repository/homeManager';

export class BaseController {
    public _userManager: UserManager;
    public _homeManager: HomeManager;

    constructor() { 
        this._userManager = new UserManager();
        this._homeManager = new HomeManager();
    }
}
