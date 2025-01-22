import { user } from '@prisma/client';
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

export class AboutController extends BaseController {
    constructor() {
        super();
    }

    public getAboutList = async (req: Request, res: Response, next: NextFunction) => {
       const aboutList = await this._aboutManager.listAbout();
       res.status(200).json({ code: ErrorCode.Success, message: 'About list found', aboutList });
    };

    public addNewAbout = async (req: Request, res: Response, next: NextFunction) => {
        const uploadMultiple = upload.fields([
            { name: 'ImgAbout1', maxCount: 1 },
            { name: 'ImgAbout2', maxCount: 1 },
            { name: 'ImgAbout3', maxCount: 1 },
        ]);

        uploadMultiple(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ code: ErrorCode.InternalError, message: 'File upload error' });
            }

            try {
                const filePaths: { [key: string]: string | null } = {};
                ['ImgAbout1', 'ImgAbout2', 'ImgAbout3']
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
               
                const about = {
                    ...req.body,
                    ...filePaths
                };
                
                about.UserId = loggedInUserId;

                const result = await this._aboutManager.createAbout(about);

                if (result.code === ErrorCode.Success) {
                    console.log(loggedInUserId);
                    console.log(about.UserId);
                    res.status(200).json({ code: ErrorCode.Success, message: 'About created successfully created', about });
                } else {
                    res.status(400).json(result);
                    return;
                }
            } catch (error) {
                return res.status(500).json({ code: ErrorCode.InternalError, message: 'Unknown error' });            
            }
        });
    };

    public updateAbout = async (req: Request, res: Response, next: NextFunction) => {
        const uploadMultiple = upload.fields([
            { name: 'ImgAbout1', maxCount: 1 },
            { name: 'ImgAbout2', maxCount: 1 },
            { name: 'ImgAbout3', maxCount: 1 },
        ]);
        
        uploadMultiple(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ code: ErrorCode.InternalError, message: 'File upload error' });
            }
            const userAboutId = Number(req.body.UserAboutId);

            const existingAbout = await this._aboutManager.getAboutById(userAboutId);
            if (!existingAbout) {            
                return res.status(400).json({ code: ErrorCode.InternalError, message: 'User does not have a About page' });   
            }
    
            try {
                const filePaths: { [key: string]: string | null } = {};
                const imageFields = [
                    'ImgAbout1',
                    'ImgAbout2',
                    'ImgAbout3'
                ];
    
                imageFields.forEach((field) => {
                    if (req.files && (req.files as any)[field]) {
                        const files = (req.files as any)[field];
                        if (Array.isArray(files) && files.length > 0) {
                            console.log(`File saved to: /HomeUploads/${files[0].filename}`);
                            filePaths[field] = `/HomeUploads/${files[0].filename}`;
                        }
                    } else {
                        const existingPath = (existingAbout as any)[field];
                        filePaths[field] = existingPath || null;
                    }
                });
    
                console.log('Final File Paths:', filePaths);
    
                const currentUser = (req as any).user;
                const loggedInUserId = currentUser.sub;
    
                if (!loggedInUserId) {
                    return res.status(403).json({ message: 'User is not authenticated' });
                }
    
                const updateAbout = {
                    ...req.body,
                    ...filePaths,
                    UserId: loggedInUserId,
                    UserAboutId: Number(req.body.UserAboutId),
                };
    
                const result = await this._aboutManager.updateAbout(updateAbout);
    
                if (result.code === ErrorCode.Success) {
                    res.status(200).json({ code: ErrorCode.Success, message: 'About page successfully updated', userhome: updateAbout });
                } else {
                    res.status(400).json(result);
                }
            } catch (error) {
                console.error('Update Error:', error);
                res.status(500).json({ code: ErrorCode.InternalError, message: 'Unknown error' });
            }
        });
    };
}