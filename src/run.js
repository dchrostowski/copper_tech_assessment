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
var fs = require("fs");
var ttkv_1 = require("./ttkv");
var ttkv = new ttkv_1.default();
var setupDatabase = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ttkv.deleteCollection()];
            case 1:
                _a.sent();
                return [4 /*yield*/, ttkv.initCollection()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var waitMs = function (ms) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
    });
}); };
var insertData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var sampleData, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sampleData = JSON.parse(fs.readFileSync('./test_data.json', 'utf-8'));
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < sampleData.length)) return [3 /*break*/, 5];
                return [4 /*yield*/, ttkv.put(sampleData[i].ticker, sampleData[i].price)];
            case 2:
                _a.sent();
                return [4 /*yield*/, waitMs(sampleData[i].sleep)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 1];
            case 5: return [2 /*return*/];
        }
    });
}); };
// tests the get method is working properly
var testGet = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, recordedDates, latestAAPL, latestTSLA, latestAMZN, latestKO, latestABC, AAPLt0, TSLAt0, AMZNt0, KOt0, ABCt0, AAPLt3, TSLAt3, AMZNt3, KOt3, ABCt3, AAPLt6, TSLAt6, AMZNt6, KOt6, ABCt6, t0_modified, AAPLt0a, TSLAt0a, AMZNt0a, KOt0a, ABCt0a, t3_modified, AAPLt3a, TSLAt3a, AMZNt3a, KOt3a, ABCt3a;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ttkv.getSortedData()];
            case 1:
                data = _a.sent();
                recordedDates = data.map(function (record) { return record.date; });
                return [4 /*yield*/, ttkv.get('AAPL')];
            case 2:
                latestAAPL = _a.sent();
                assert.equal(latestAAPL, 200.12);
                return [4 /*yield*/, ttkv.get('TSLA')];
            case 3:
                latestTSLA = _a.sent();
                assert.equal(latestTSLA, 56.86);
                return [4 /*yield*/, ttkv.get('AMZN')];
            case 4:
                latestAMZN = _a.sent();
                assert.equal(latestAMZN, 211.74);
                return [4 /*yield*/, ttkv.get('KO')];
            case 5:
                latestKO = _a.sent();
                assert.equal(latestKO, 95.31);
                return [4 /*yield*/, ttkv.get('ABC')];
            case 6:
                latestABC = _a.sent();
                assert.equal(latestABC, null);
                return [4 /*yield*/, ttkv.get('AAPL', recordedDates[0])];
            case 7:
                AAPLt0 = _a.sent();
                return [4 /*yield*/, ttkv.get('TSLA', recordedDates[0])];
            case 8:
                TSLAt0 = _a.sent();
                return [4 /*yield*/, ttkv.get('AMZN', recordedDates[0])];
            case 9:
                AMZNt0 = _a.sent();
                return [4 /*yield*/, ttkv.get('KO', recordedDates[0])];
            case 10:
                KOt0 = _a.sent();
                return [4 /*yield*/, ttkv.get('ABC', recordedDates[0])];
            case 11:
                ABCt0 = _a.sent();
                assert.equal(AAPLt0, 201.56);
                assert.equal(TSLAt0, null);
                assert.equal(AMZNt0, null);
                assert.equal(KOt0, null);
                assert.equal(ABCt0, null);
                return [4 /*yield*/, ttkv.get('AAPL', recordedDates[3])];
            case 12:
                AAPLt3 = _a.sent();
                return [4 /*yield*/, ttkv.get('TSLA', recordedDates[3])];
            case 13:
                TSLAt3 = _a.sent();
                return [4 /*yield*/, ttkv.get('AMZN', recordedDates[3])];
            case 14:
                AMZNt3 = _a.sent();
                return [4 /*yield*/, ttkv.get('KO', recordedDates[3])];
            case 15:
                KOt3 = _a.sent();
                return [4 /*yield*/, ttkv.get('ABC', recordedDates[3])];
            case 16:
                ABCt3 = _a.sent();
                assert.equal(AAPLt3, 203.56);
                assert.equal(TSLAt3, 257.24);
                assert.equal(AMZNt3, 400.16);
                assert.equal(KOt3, null);
                assert.equal(ABCt3, null);
                return [4 /*yield*/, ttkv.get('AAPL', recordedDates[6])];
            case 17:
                AAPLt6 = _a.sent();
                return [4 /*yield*/, ttkv.get('TSLA', recordedDates[6])];
            case 18:
                TSLAt6 = _a.sent();
                return [4 /*yield*/, ttkv.get('AMZN', recordedDates[6])];
            case 19:
                AMZNt6 = _a.sent();
                return [4 /*yield*/, ttkv.get('KO', recordedDates[6])];
            case 20:
                KOt6 = _a.sent();
                return [4 /*yield*/, ttkv.get('ABC', recordedDates[6])];
            case 21:
                ABCt6 = _a.sent();
                assert.equal(AAPLt6, 202.46);
                assert.equal(TSLAt6, 300.81);
                assert.equal(AMZNt6, 400.16);
                assert.equal(KOt6, 59.56);
                assert.equal(ABCt6, null);
                t0_modified = new Date(recordedDates[0] - 1000);
                return [4 /*yield*/, ttkv.get('AAPL', t0_modified)];
            case 22:
                AAPLt0a = _a.sent();
                return [4 /*yield*/, ttkv.get('TSLA', t0_modified)];
            case 23:
                TSLAt0a = _a.sent();
                return [4 /*yield*/, ttkv.get('AMZN', t0_modified)];
            case 24:
                AMZNt0a = _a.sent();
                return [4 /*yield*/, ttkv.get('KO', t0_modified)];
            case 25:
                KOt0a = _a.sent();
                return [4 /*yield*/, ttkv.get('ABC', t0_modified)];
            case 26:
                ABCt0a = _a.sent();
                assert.equal(AAPLt0a, null);
                assert.equal(TSLAt0a, null);
                assert.equal(AMZNt0a, null);
                assert.equal(KOt0a, null);
                assert.equal(ABCt0a, null);
                t3_modified = new Date(recordedDates[3] - 1000);
                return [4 /*yield*/, ttkv.get('AAPL', t3_modified)];
            case 27:
                AAPLt3a = _a.sent();
                return [4 /*yield*/, ttkv.get('TSLA', t3_modified)];
            case 28:
                TSLAt3a = _a.sent();
                return [4 /*yield*/, ttkv.get('AMZN', t3_modified)];
            case 29:
                AMZNt3a = _a.sent();
                return [4 /*yield*/, ttkv.get('KO', t3_modified)];
            case 30:
                KOt3a = _a.sent();
                return [4 /*yield*/, ttkv.get('ABC', t3_modified)];
            case 31:
                ABCt3a = _a.sent();
                assert.equal(AAPLt3a, 203.56);
                assert.equal(TSLAt3a, null);
                assert.equal(AMZNt3a, 400.16);
                assert.equal(KOt3a, null);
                assert.equal(ABCt3a, null);
                console.log("All tests pass");
                return [2 /*return*/];
        }
    });
}); };
var runTests = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, setupDatabase()];
            case 1:
                _a.sent();
                return [4 /*yield*/, insertData()];
            case 2:
                _a.sent();
                return [4 /*yield*/, testGet()];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
runTests();
