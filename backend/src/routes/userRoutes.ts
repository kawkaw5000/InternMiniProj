import express from 'express';
import { UserController } from '../controllers/userController';
import authenticateJWT from '../middleware/authenticateJWT';

const router = express.Router();
const userController = new UserController();

router.post('/Account/Register', userController.register);
router.post('/Account/Login', userController.login);
router.post('/Account/Logout', userController.logout);

router.put('/Account/Update', authenticateJWT, userController.updateUserAcc);
router.delete('/Account/Delete', authenticateJWT, userController.deleteUserAcc);
router.get('/Account/GetUser', authenticateJWT, userController.getUserList);

export default router;