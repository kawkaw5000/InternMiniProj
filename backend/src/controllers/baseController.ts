import { Request, Response, NextFunction } from 'express';
import { UserManager } from '../repository/userManager';
import { HomeManager } from '../repository/homeManager';
import { AboutManager } from '../repository/aboutManager';
import { ServiceManager } from '../repository/serviceManager';

export class BaseController {
    public _userManager: UserManager;
    public _homeManager: HomeManager;
    public _aboutManager: AboutManager;
    public _serviceManager: ServiceManager;

    constructor() { 
        this._userManager = new UserManager();
        this._homeManager = new HomeManager();
        this._aboutManager = new AboutManager();
        this._serviceManager = new ServiceManager();
    }
}
