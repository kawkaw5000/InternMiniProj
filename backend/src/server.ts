import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import multer from 'multer';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();

const uploadDir = path.resolve(__dirname, '../../../frontend/public/HomeUploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, uploadDir);
        },
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}_${file.originalname}`);
        },
    }),
    limits: { fileSize: 10 * 1024 * 1024 }, 
}).array('images', 10);

app.post('/HomeUploads', (req, res) => {
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            console.error('Multer Error:', err);
            return res.status(400).json({ code: 'internalerror', message: 'Multer error during upload' });
        } else if (err) {
            console.error('General Error:', err);
            return res.status(500).json({ code: 'internalerror', message: 'Unknown error during file upload' });
        }

        console.log('Files uploaded:', req.files);
        res.status(200).json({
            code: 'success',
            message: 'Files uploaded successfully',
            files: req.files,
        });
    });
});

app.use('/api', userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
