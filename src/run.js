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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require('node:assert').strict;
var ttkv_1 = require("./ttkv");
var ttkv = new ttkv_1.default();
var waitMs = function (ms) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
    });
}); };
var getValues = function () { return __awaiter(void 0, void 0, void 0, function () {
    var priceValue1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ttkv.get('AAPL', new Date('2025-04-26T01:13:58.191+00:00'))];
            case 1:
                priceValue1 = _a.sent();
                console.log(priceValue1);
                return [2 /*return*/];
        }
    });
}); };
var putValues = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ttkv.put('AAPL', 201.56)];
            case 1:
                _a.sent();
                return [4 /*yield*/, waitMs(1500)];
            case 2:
                _a.sent();
                return [4 /*yield*/, ttkv.put('AMZN', 400.16)];
            case 3:
                _a.sent();
                return [4 /*yield*/, waitMs(1500)];
            case 4:
                _a.sent();
                return [4 /*yield*/, ttkv.put('AAPL', 203.56)];
            case 5:
                _a.sent();
                return [4 /*yield*/, waitMs(1500)];
            case 6:
                _a.sent();
                return [4 /*yield*/, ttkv.put('TSLA', 257.24)];
            case 7:
                _a.sent();
                return [4 /*yield*/, waitMs(1500)];
            case 8:
                _a.sent();
                return [4 /*yield*/, ttkv.put('KO', 59.56)];
            case 9:
                _a.sent();
                return [4 /*yield*/, waitMs(2500)];
            case 10:
                _a.sent();
                return [4 /*yield*/, ttkv.put('AAPL', 202.56)];
            case 11:
                _a.sent();
                return [4 /*yield*/, waitMs(1500)];
            case 12:
                _a.sent();
                return [4 /*yield*/, ttkv.put('TSLA', 300.56)];
            case 13:
                _a.sent();
                return [4 /*yield*/, waitMs(1200)];
            case 14:
                _a.sent();
                return [4 /*yield*/, ttkv.put('AAPL', 176.46)];
            case 15:
                _a.sent();
                return [4 /*yield*/, waitMs(1500)];
            case 16:
                _a.sent();
                return [4 /*yield*/, ttkv.put('KO', 95.31)];
            case 17:
                _a.sent();
                return [4 /*yield*/, waitMs(1000)];
            case 18:
                _a.sent();
                return [4 /*yield*/, ttkv.put('AMZN', 212.56)];
            case 19:
                _a.sent();
                return [4 /*yield*/, waitMs(1500)];
            case 20:
                _a.sent();
                return [4 /*yield*/, ttkv.put('TSLA', 56.86)];
            case 21:
                _a.sent();
                return [4 /*yield*/, waitMs(1500)];
            case 22:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var runTests = function () { return __awaiter(void 0, void 0, void 0, function () {
    var priceValue1, priceValue2, priceValue3, priceValue4, priceValue5, priceValue6, priceValue7, priceValue8, priceValue9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ttkv.get('AAPL')];
            case 1:
                priceValue1 = _a.sent();
                assert.equal(priceValue1, 176.46);
                return [4 /*yield*/, ttkv.get('TSLA')];
            case 2:
                priceValue2 = _a.sent();
                assert.equal(priceValue2, 56.86);
                return [4 /*yield*/, ttkv.get('KO')];
            case 3:
                priceValue3 = _a.sent();
                assert.equal(priceValue3, 95.31);
                return [4 /*yield*/, ttkv.get('AMZN')];
            case 4:
                priceValue4 = _a.sent();
                assert.equal(priceValue4, 212.56);
                return [4 /*yield*/, ttkv.get('ABC')];
            case 5:
                priceValue5 = _a.sent();
                assert.equal(priceValue5, null);
                return [4 /*yield*/, ttkv.get('TSLA', new Date('2025-04-26T01:29:21.957+00:00'))];
            case 6:
                priceValue6 = _a.sent();
                assert.equal(priceValue6, 257.24);
                return [4 /*yield*/, ttkv.get('TSLA', new Date('2025-04-26T01:29:19.957+00:00'))];
            case 7:
                priceValue7 = _a.sent();
                assert.equal(priceValue7, null);
                return [4 /*yield*/, ttkv.get('AAPL', new Date('2025-04-26T01:29:20.447+00:00'))];
            case 8:
                priceValue8 = _a.sent();
                assert.equal(priceValue8, 203.56);
                return [4 /*yield*/, ttkv.get('AAPL', new Date('2025-04-26T01:29:18.447+00:00'))];
            case 9:
                priceValue9 = _a.sent();
                assert.equal(priceValue9, 201.56);
                return [2 /*return*/];
        }
    });
}); };
runTests();
