"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const authenticateJWT_1 = __importDefault(require("../middleware/authenticateJWT"));
const router = express_1.default.Router();
const userController = new userController_1.UserController();
router.post('/Account/Register', userController.register);
router.post('/Account/Login', userController.login);
router.put('/Account/Update', authenticateJWT_1.default, userController.updateUserAcc);
router.delete('/Account/Delete', authenticateJWT_1.default, userController.deleteUserAcc);
router.get('/Account/GetUser', authenticateJWT_1.default, userController.getUserList);
exports.default = router;
