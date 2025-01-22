import { BaseController } from './baseController';
import { ErrorCode } from '../utils/utilities';
import { Request, Response, NextFunction } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.resolve(__dirname, '../../../frontend/public/HomeUploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
});

const upload = multer({ storage });

export class ServiceController extends BaseController {
    constructor() {
        super();
    }

    public getServiceList = async (req: Request, res: Response, next: NextFunction) => {
        const serviceList = await this._serviceManager.userServiceList();
        res.status(200).json({ code: ErrorCode.Success, message: 'Service list found', serviceList });
    };

    public addService = async (req: Request, res: Response, next: NextFunction) => {
        const uploadMultiple = upload.fields([
            { name: 'SkillsImgIcon1', maxCount: 1 },
            { name: 'SkillsImgIcon2', maxCount: 1 },
            { name: 'SkillsImgIcon3', maxCount: 1 },
            { name: 'SkillsImgIcon4', maxCount: 1 },
            { name: 'SkillsImgIcon5', maxCount: 1 },
        ]);

        uploadMultiple(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ code: ErrorCode.InternalError, message: 'File upload error' });
            }

            try {
                const filePaths: { [key: string]: string | null } = {};
                ['SkillsImgIcon1', 'SkillsImgIcon2', 'SkillsImgIcon3', 'SkillsImgIcon4', 'SkillsImgIcon5']
                    .forEach((field) => {
                        if (req.files && (req.files as any)[field]) {
                            const files = (req.files as any)[field];
                            if (Array.isArray(files) && files.length > 0) {
                                console.log(`File saved to: /HomeUploads/${files[0].filename}`);
                                filePaths[field] = `/HomeUploads/${files[0].filename}`;
                            } else {
                                filePaths[field] = null;
                            }
                        } else {
                            filePaths[field] = null;
                        }
                    });

                console.log('File Paths:', filePaths);
                
                const currentUser = (req as any).user;
                const loggedInUserId = currentUser.sub;
               
                const services = {
                    ...req.body,
                    ...filePaths
                };
                
                services.UserId = loggedInUserId;

                const result = await this._serviceManager.createUserServices(services);

                if (result.code === ErrorCode.Success) {
                    console.log(loggedInUserId);
                    console.log(services.UserId);
                    res.status(200).json({ code: ErrorCode.Success, message: 'Service created successfully created', services });
                } else {
                    res.status(400).json(result);
                    return;
                }
            } catch (error) {
                return res.status(500).json({ code: ErrorCode.InternalError, message: 'Unknown error' });            
            }
        });
    }

    public updateService = async (req: Request, res: Response, next: NextFunction) => {
        const uploadMultiple = upload.fields([
            { name: 'SkillsImgIcon1', maxCount: 1 },
            { name: 'SkillsImgIcon2', maxCount: 1 },
            { name: 'SkillsImgIcon3', maxCount: 1 },
            { name: 'SkillsImgIcon4', maxCount: 1 },
            { name: 'SkillsImgIcon5', maxCount: 1 },
        ]);

        uploadMultiple(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ code: ErrorCode.InternalError, message: 'File upload error' });
            }
            const userServiceId = Number(req.body.UserServiceId);

            const existingService = await this._serviceManager.getUserServiceById(userServiceId);
            if (!existingService) {            
                return res.status(400).json({ code: ErrorCode.InternalError, message: 'User does not have a About page' });   
            }
    
            try {
                const filePaths: { [key: string]: string | null } = {};
                const imageFields = [
                    'SkillsImgIcon1',
                    'SkillsImgIcon2',
                    'SkillsImgIcon3',
                    'SkillsImgIcon4',                    
                    'SkillsImgIcon5',          
                ];
    
                imageFields.forEach((field) => {
                    if (req.files && (req.files as any)[field]) {
                        const files = (req.files as any)[field];
                        if (Array.isArray(files) && files.length > 0) {
                            console.log(`File saved to: /HomeUploads/${files[0].filename}`);
                            filePaths[field] = `/HomeUploads/${files[0].filename}`;
                        }
                    } else {
                        const existingPath = (existingService as any)[field];
                        filePaths[field] = existingPath || null;
                    }
                });
    
                console.log('Final File Paths:', filePaths);
    
                const currentUser = (req as any).user;
                const loggedInUserId = currentUser.sub;
    
                if (!loggedInUserId) {
                    return res.status(403).json({ message: 'User is not authenticated' });
                }
    
                const updateServices = {
                    ...req.body,
                    ...filePaths,
                    UserId: loggedInUserId,
                    UserServiceId: Number(req.body.UserServiceId),
                };
    
                const result = await this._serviceManager.updateUserServices(updateServices);
    
                if (result.code === ErrorCode.Success) {
                    res.status(200).json({ code: ErrorCode.Success, message: 'Services page successfully updated', userServices: updateServices });
                } else {
                    res.status(400).json(result);
                }
            } catch (error) {
                console.error('Update Error:', error);
                res.status(500).json({ code: ErrorCode.InternalError, message: 'Unknown error' });
            }
        });
    }

    public deleteService = async (req: Request, res: Response, next: NextFunction) => {
        const userService = req.body;
        const userServiceId = Number(userService.UserServiceId);   
        const result = await this._serviceManager.deleteUserService(userServiceId);

        if(result.code !== ErrorCode.Success) {
            res.status(400).json({ code: ErrorCode.InternalError, message: 'Error deleting Services' });
            return;
        }
        res.status(200).json({ code: ErrorCode.Success, message: 'Selected Services is deleted successfully', result });
    }
}