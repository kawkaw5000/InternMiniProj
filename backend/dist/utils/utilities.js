"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["Success"] = "success";
    ErrorCode["Error"] = "error";
    ErrorCode["NotFound"] = "notfound";
    ErrorCode["AlreadyExists"] = "alreadyexists";
    ErrorCode["InvalidInput"] = "invalidinput";
    ErrorCode["InternalError"] = "internalerror";
    ErrorCode["BadRequest"] = "badrequest";
    ErrorCode["Unauthorized"] = "unauthorized";
    ErrorCode["Forbidden"] = "forbidden";
    ErrorCode["Conflict"] = "conflict";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
