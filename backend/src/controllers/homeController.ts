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

export class HomeController extends BaseController {
    constructor() {
        super();
    }

    public addHome = async (req: Request, res: Response, next: NextFunction) => {
        
        const uploadMultiple = upload.fields([
            { name: 'UserImg', maxCount: 1 },
            { name: 'ImgBox1', maxCount: 1 },
            { name: 'ImgBox2', maxCount: 1 },
            { name: 'ImgBox3', maxCount: 1 },
            { name: 'ImgBox4', maxCount: 1 },
            { name: 'ImgBox5', maxCount: 1 },
            { name: 'ImgBox6', maxCount: 1 },
            { name: 'ImgBox7', maxCount: 1 },
            { name: 'ImgBox8', maxCount: 1 },
            { name: 'ImgBox9', maxCount: 1 },
            { name: 'ImgBox10', maxCount: 1 }
        ]);

        uploadMultiple(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ code: ErrorCode.InternalError, message: 'File upload error' });
            }

            try {
                const filePaths: { [key: string]: string | null } = {};
                ['UserImg', 'ImgBox1', 'ImgBox2', 'ImgBox3', 'ImgBox4', 'ImgBox5', 'ImgBox6', 'ImgBox7', 'ImgBox8', 'ImgBox9', 'ImgBox10']
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
               
                const userhome = {
                    ...req.body,
                    ...filePaths
                };
                
                if (!loggedInUserId) {
                    res.status(403).json({ message: "User is not authenticated" });
                    return;
                }

                userhome.UserId = loggedInUserId;

                const result = await this._homeManager.createUserhome(userhome);

                if (result.code === ErrorCode.Success) {
                    console.log(loggedInUserId);
                    console.log(userhome.UserId);
                    res.status(200).json({ code: ErrorCode.Success, message: 'Home successfully created', userhome });
                } else {
                    res.status(400).json(result);
                }
            } catch (error) {
                res.status(500).json({ code: ErrorCode.InternalError, message: 'Unknown error' });
            }
        });
    };
}
