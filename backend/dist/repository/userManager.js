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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
const baseRepository_1 = require("./baseRepository");
const utilities_1 = require("../utils/utilities");
const dbConfig_1 = __importDefault(require("../config/dbConfig"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserManager {
    constructor() {
        this.userRepo = new baseRepository_1.BaseRepository(dbConfig_1.default.user, 'UserId');
    }
    generateJWT(user) {
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined in the environment variables.');
        }
        const payload = {
            sub: user.UserId,
            username: user.Username,
        };
        const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRATION || '1h'
        });
        return token;
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error('Invalid UserId');
            }
            return yield this.userRepo.get(id);
        });
    }
    getUserByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!username) {
                throw new Error('Invalid username');
            }
            return yield this.userRepo._table.findFirst({
                where: { Username: username },
            });
        });
    }
    signUp(u) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!u.Username || !u.Password) {
                return { code: utilities_1.ErrorCode.Error, message: 'Username and password are required' };
            }
            const existingUser = yield this.getUserByUsername(u.Username);
            if (existingUser) {
                return { code: utilities_1.ErrorCode.Error, message: 'Username already exists' };
            }
            const hashedPass = yield bcryptjs_1.default.hash(u.Password, 10);
            u.Password = hashedPass;
            const result = yield this.userRepo.create(u);
            if (result.code !== utilities_1.ErrorCode.Success) {
                return { code: utilities_1.ErrorCode.InternalError, message: 'Error creating account' };
            }
            return { code: utilities_1.ErrorCode.Success, message: 'Account successfully created' };
        });
    }
    authorize(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!username || !password) {
                return { code: utilities_1.ErrorCode.Error, message: 'Username and password are required' };
            }
            const userSignIn = yield this.getUserByUsername(username);
            if (!userSignIn) {
                return { code: utilities_1.ErrorCode.Error, message: 'Username or password incorrect' };
            }
            const isPasswordValid = yield bcryptjs_1.default.compare(password, userSignIn.Password);
            if (!isPasswordValid) {
                return { code: utilities_1.ErrorCode.Error, message: 'Username or password incorrect' };
            }
            const token = this.generateJWT(userSignIn);
            return { code: utilities_1.ErrorCode.Success, message: 'Login successful', token };
        });
    }
    updateUser(u) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.getUserById(u.UserId);
            if (!existingUser) {
                return { code: utilities_1.ErrorCode.NotFound, message: 'User not found' };
            }
            if (!u.Username || !u.Password) {
                return { code: utilities_1.ErrorCode.BadRequest, message: 'Username and password are required' };
            }
            existingUser.Username = u.Username;
            const hashedPass = yield bcryptjs_1.default.hash(u.Password, 10);
            existingUser.Password = hashedPass;
            const result = yield this.userRepo.update(u.UserId, existingUser);
            if (result.code !== utilities_1.ErrorCode.Success) {
                return { code: utilities_1.ErrorCode.InternalError, message: 'Error updating account' };
            }
            return { code: utilities_1.ErrorCode.Success, message: 'Updating successful' };
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userRepo.delete(id);
            if (result.code !== utilities_1.ErrorCode.Success) {
                return { code: utilities_1.ErrorCode.InternalError, message: 'Error deleting account' };
            }
            return { code: utilities_1.ErrorCode.Success, message: 'User deleted successful' };
        });
    }
    userList() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepo.getAll();
        });
    }
}
exports.UserManager = UserManager;
