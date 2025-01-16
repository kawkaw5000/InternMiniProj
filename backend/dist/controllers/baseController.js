"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const userManager_1 = require("../repository/userManager");
class BaseController {
    constructor() {
        this._userManager = new userManager_1.UserManager();
    }
}
exports.BaseController = BaseController;
