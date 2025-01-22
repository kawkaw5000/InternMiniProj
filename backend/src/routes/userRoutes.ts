import express from 'express';
import { UserController } from '../controllers/userController';
import { HomeController } from '../controllers/homeController';
import { AboutController } from '../controllers/aboutController';
import { ServiceController } from '../controllers/serviceController';
import {authenticateJWT, conditionalAuthMiddleware } from '../middleware/authenticateJWT';
import { isAuthorize } from '../middleware/isAuthorize';

const router = express.Router();
const userController = new UserController();
const homeController = new HomeController();
const aboutController = new AboutController();
const serviceController = new ServiceController();

router.post('/Account/Register', userController.register);
router.post('/Account/Login', userController.login);
router.post('/Account/Logout', userController.logout);

router.put('/Account/Update', authenticateJWT, userController.updateUserAcc);
router.delete('/Account/Delete', authenticateJWT, userController.deleteUserAcc);
router.get('/Account/GetUser', authenticateJWT, userController.getUserList);


// Home Routes
router.post('/LexerAmorcillo/CreateHome', authenticateJWT, isAuthorize, homeController.addHome);
router.put('/LexerAmorcillo/UpdateHome', authenticateJWT, isAuthorize, homeController.updateHome); 
router.get('/LexerAmorcillo/GetUserHome', authenticateJWT, isAuthorize, homeController.getUserHomeListByUserId);
router.get('/LexerAmorcillo/GetHome', homeController.getList);

// About Routes
router.post('/LexerAmorcillo/CreateAbout', authenticateJWT, isAuthorize, aboutController.addNewAbout);
router.get('/LexerAmorcillo/GetAbout', aboutController.getAboutList);
router.put('/LexerAmorcillo/UpdateAbout', authenticateJWT, isAuthorize, aboutController.updateAbout); 

// Service Routes
router.post('/LexerAmorcillo/CreateServices', authenticateJWT, isAuthorize, serviceController.addService);
router.get('/LexerAmorcillo/GetServices', serviceController.getServiceList);
router.put('/LexerAmorcillo/UpdateServices', authenticateJWT, isAuthorize, serviceController.updateService);
router.delete('/LexerAmorcillo/DeleteServices', authenticateJWT, isAuthorize, serviceController.deleteService);

export default router;
