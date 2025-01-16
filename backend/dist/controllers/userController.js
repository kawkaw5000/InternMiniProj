"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const baseController_1 = require("./baseController");
const utilities_1 = require("../utils/utilities");
class UserController extends baseController_1.BaseController {
    constructor() {
        super();
        this.register = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            const result = yield this._userManager.signUp(user);
            try {
                if (result.code === utilities_1.ErrorCode.Success) {
                    res.status(200).json(result);
                }
                else {
                    res.status(400).json(result);
                }
            }
            catch (error) {
                res.status(500).json({ code: utilities_1.ErrorCode.InternalError, message: 'Unknown error' });
            }
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            const result = yield this._userManager.authorize(user.Username, user.Password);
            try {
                if (result.code === utilities_1.ErrorCode.Success) {
                    res.status(200).json(result);
                }
                else {
                    res.status(400).json(result);
                }
            }
            catch (error) {
                res.status(500).json({ code: utilities_1.ErrorCode.InternalError, message: 'Unknown error' });
            }
        });
        this.updateUserAcc = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const currentUser = req.user;
                const loggedInUserId = currentUser.sub;
                const userToUpdate = req.body;
                if (loggedInUserId !== userToUpdate.UserId) {
                    res.status(403).json({ message: "User is not authenticated" });
                    return;
                }
                const result = yield this._userManager.updateUser(userToUpdate);
                if (result.code === utilities_1.ErrorCode.Success) {
                    res.status(200).json(result);
                }
                else {
                    res.status(400).json(result);
                }
            }
            catch (error) {
                res.status(500).json({ code: utilities_1.ErrorCode.InternalError, message: 'Unknown error' });
            }
        });
        this.deleteUserAcc = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { UserId } = req.body;
            const result = yield this._userManager.deleteUser(UserId);
            try {
                if (result.code === utilities_1.ErrorCode.Success) {
                    res.status(200).json(result);
                }
                else {
                    res.status(400).json(result);
                }
            }
            catch (error) {
                res.status(500).json({ code: utilities_1.ErrorCode.InternalError, message: 'Unknown error' });
            }
        });
        this.getUserList = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const currentUser = req.user;
                const loggedInUserId = currentUser.sub;
                const userToUpdate = req.body;
                if (loggedInUserId !== userToUpdate.UserId) {
                    res.status(403).json({ message: "User is not authenticated" });
                    return;
                }
                const users = yield this._userManager.userList();
                res.status(200).json(users);
            }
            catch (error) {
                res.status(500).json({ code: utilities_1.ErrorCode.InternalError, message: 'Unknown error' });
            }
        });
    }
}
exports.UserController = UserController;
