import express from 'express';
import { UserController } from '../controllers/userController';
import { HomeController } from '../controllers/homeController';
import authenticateJWT from '../middleware/authenticateJWT';

const router = express.Router();
const userController = new UserController();
const homeController = new HomeController();

router.post('/Account/Register', userController.register);
router.post('/Account/Login', userController.login);
router.post('/Account/Logout', userController.logout);

router.put('/Account/Update', authenticateJWT, userController.updateUserAcc);
router.delete('/Account/Delete', authenticateJWT, userController.deleteUserAcc);
router.get('/Account/GetUser', authenticateJWT, userController.getUserList);


// Home Routes
router.post('/Home/UploadHome', authenticateJWT, homeController.addHome);

export default router;
