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
exports.BaseRepository = void 0;
const utilities_1 = require("../utils/utilities");
class BaseRepository {
    constructor(model, primaryKey = 'id') {
        this._table = model;
        this.primaryKey = primaryKey;
    }
    create(t) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this._table.create({
                    data: t,
                });
                return { code: utilities_1.ErrorCode.Success, message: 'Success' };
            }
            catch (error) {
                return {
                    code: utilities_1.ErrorCode.InternalError,
                    message: error instanceof Error ? error.message : 'Unknown error',
                };
            }
        });
    }
    update(id, t) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingObj = yield this._table.findFirst({ where: { [this.primaryKey]: id } });
                if (!existingObj) {
                    return { code: utilities_1.ErrorCode.Error, message: 'Object not found' };
                }
                yield this._table.update({
                    where: { [this.primaryKey]: id },
                    data: t,
                });
                return { code: utilities_1.ErrorCode.Success, message: 'Updated' };
            }
            catch (error) {
                return {
                    code: utilities_1.ErrorCode.InternalError,
                    message: error instanceof Error ? error.message : 'Unknown error',
                };
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingObj = yield this._table.findFirst({ where: { [this.primaryKey]: id } });
                if (!existingObj) {
                    return { code: utilities_1.ErrorCode.NotFound, message: 'Object not found' };
                }
                yield this._table.delete({
                    where: { [this.primaryKey]: id },
                });
                return { code: utilities_1.ErrorCode.Success, message: 'Deleted' };
            }
            catch (error) {
                return {
                    code: utilities_1.ErrorCode.InternalError,
                    message: error instanceof Error ? error.message : 'Unknown error',
                };
            }
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._table.findFirst({
                where: { [this.primaryKey]: id },
            });
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._table.findMany();
        });
    }
}
exports.BaseRepository = BaseRepository;
