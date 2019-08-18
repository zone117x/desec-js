var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var API_ENDPOINT = 'https://desec.io/api/v1';
    var USER_AGENT = 'blockstack-gaia-desec';
    var DEFAULT_ROOT_DOMAIN = 'dedyn.io';
    var DesecAPI = /** @class */ (function () {
        function DesecAPI(opts) {
            if (opts && opts.fetch) {
                this.fetchFn = opts.fetch;
            }
            else if (typeof fetch !== 'undefined') {
                this.fetchFn = fetch;
            }
            else {
                throw new Error('The `fetch` API is not available. It must be specified.');
            }
            if (opts && opts.authToken) {
                this.authToken = opts.authToken;
            }
        }
        DesecAPI.prototype.getAuthToken = function () {
            if (!this.authToken) {
                throw new Error('The `authToken` variable has not been set. Either specify '
                    + 'it in the constructor or call the `login` function');
            }
            else {
                return this.authToken;
            }
        };
        DesecAPI.prototype.getAccountInfo = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url, fetchOpts, response, apiError, accountInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = API_ENDPOINT + "/auth/me/";
                            fetchOpts = this.getDefaultFetchOpts({
                                method: 'GET',
                                authToken: this.getAuthToken()
                            });
                            return [4 /*yield*/, this.fetchFn(url, fetchOpts)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, this.checkBadResponse(response)];
                        case 2:
                            apiError = _a.sent();
                            if (apiError) {
                                throw apiError;
                            }
                            return [4 /*yield*/, response.json()];
                        case 3:
                            accountInfo = _a.sent();
                            return [2 /*return*/, accountInfo];
                    }
                });
            });
        };
        DesecAPI.prototype.register = function (opts) {
            return __awaiter(this, void 0, void 0, function () {
                var url, data, fetchOpts, response, apiError, loginResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = API_ENDPOINT + "/auth/users/";
                            data = {
                                'email': opts.email,
                                'password': opts.password
                            };
                            fetchOpts = this.getDefaultFetchOpts({
                                method: 'POST',
                                contentType: 'application/json',
                                body: JSON.stringify(data)
                            });
                            return [4 /*yield*/, this.fetchFn(url, fetchOpts)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, this.checkBadResponse(response)];
                        case 2:
                            apiError = _a.sent();
                            if (apiError) {
                                if (apiError.responseJson
                                    && apiError.responseJson.email
                                    && typeof apiError.responseJson.email[0] === 'string'
                                    && apiError.responseJson.email[0].includes('already exists')) {
                                    throw new EmailAlreadyRegisteredError(apiError);
                                }
                                throw apiError;
                            }
                            return [4 /*yield*/, response.json()];
                        case 3:
                            loginResult = _a.sent();
                            return [2 /*return*/, loginResult];
                    }
                });
            });
        };
        DesecAPI.prototype.login = function (opts) {
            return __awaiter(this, void 0, void 0, function () {
                var url, data, fetchOpts, response, apiError, loginResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = API_ENDPOINT + "/auth/token/login/";
                            data = {
                                'email': opts.email,
                                'password': opts.password
                            };
                            fetchOpts = this.getDefaultFetchOpts({
                                method: 'POST',
                                contentType: 'application/json',
                                body: JSON.stringify(data)
                            });
                            return [4 /*yield*/, this.fetchFn(url, fetchOpts)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, this.checkBadResponse(response)];
                        case 2:
                            apiError = _a.sent();
                            if (apiError) {
                                throw apiError;
                            }
                            return [4 /*yield*/, response.json()];
                        case 3:
                            loginResult = _a.sent();
                            this.authToken = loginResult.auth_token;
                            return [2 /*return*/, loginResult];
                    }
                });
            });
        };
        /** Invalidate an auth token */
        DesecAPI.prototype.logout = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url, fetchOpts, response, apiError;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = API_ENDPOINT + "/auth/token/logout/";
                            fetchOpts = this.getDefaultFetchOpts({
                                method: 'POST',
                                authToken: this.getAuthToken()
                            });
                            return [4 /*yield*/, this.fetchFn(url, fetchOpts)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, this.checkBadResponse(response)];
                        case 2:
                            apiError = _a.sent();
                            if (apiError) {
                                throw apiError;
                            }
                            this.authToken = undefined;
                            return [2 /*return*/];
                    }
                });
            });
        };
        DesecAPI.prototype.createDomain = function (opts) {
            return __awaiter(this, void 0, void 0, function () {
                var fullDomainName, url, data, fetchOpts, response, apiError, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fullDomainName = this.getFullDomainName(opts.name, opts.useDefaultRoot);
                            url = API_ENDPOINT + "/domains/";
                            data = {
                                'name': fullDomainName
                            };
                            fetchOpts = this.getDefaultFetchOpts({
                                method: 'POST',
                                authToken: this.getAuthToken(),
                                contentType: 'application/json',
                                body: JSON.stringify(data)
                            });
                            return [4 /*yield*/, this.fetchFn(url, fetchOpts)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, this.checkBadResponse(response)];
                        case 2:
                            apiError = _a.sent();
                            if (apiError) {
                                if (apiError.responseJson
                                    && apiError.responseJson.code
                                    && apiError.responseJson.code === 'domain-unavailable') {
                                    throw new DomainUnavailableError(apiError);
                                }
                                if (apiError.responseJson
                                    && apiError.responseJson.name
                                    && typeof apiError.responseJson.name[0] === 'string'
                                    && typeof apiError.responseJson.name[0].includes('name already exists')) {
                                    throw new DomainNameAlreadyExistsError(apiError);
                                }
                                throw apiError;
                            }
                            return [4 /*yield*/, response.json()];
                        case 3:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        DesecAPI.prototype.listDomains = function () {
            return __awaiter(this, void 0, void 0, function () {
                var url, fetchOpts, response, apiError, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = API_ENDPOINT + "/domains/";
                            fetchOpts = this.getDefaultFetchOpts({
                                method: 'GET',
                                authToken: this.getAuthToken()
                            });
                            return [4 /*yield*/, this.fetchFn(url, fetchOpts)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, this.checkBadResponse(response)];
                        case 2:
                            apiError = _a.sent();
                            if (apiError) {
                                throw apiError;
                            }
                            return [4 /*yield*/, response.json()];
                        case 3:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        DesecAPI.prototype.getDomainInfo = function (opts) {
            return __awaiter(this, void 0, void 0, function () {
                var fullDomainName, url, fetchOpts, response, apiError, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fullDomainName = this.getFullDomainName(opts.name, opts.useDefaultRoot);
                            url = API_ENDPOINT + "/domains/" + fullDomainName + "/";
                            fetchOpts = this.getDefaultFetchOpts({
                                method: 'GET',
                                authToken: this.getAuthToken()
                            });
                            return [4 /*yield*/, this.fetchFn(url, fetchOpts)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, this.checkBadResponse(response)];
                        case 2:
                            apiError = _a.sent();
                            if (apiError) {
                                throw apiError;
                            }
                            return [4 /*yield*/, response.json()];
                        case 3:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        DesecAPI.prototype.getDomainRecordSets = function (opts) {
            return __awaiter(this, void 0, void 0, function () {
                var fullDomainName, url, fetchOpts, response, apiError, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fullDomainName = this.getFullDomainName(opts.name, opts.useDefaultRoot);
                            url = API_ENDPOINT + "/domains/" + fullDomainName + "/rrsets/";
                            if (opts.filterType !== undefined) {
                                url += "?type=" + opts.filterType;
                            }
                            fetchOpts = this.getDefaultFetchOpts({
                                method: 'GET',
                                authToken: this.getAuthToken()
                            });
                            return [4 /*yield*/, this.fetchFn(url, fetchOpts)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, this.checkBadResponse(response)];
                        case 2:
                            apiError = _a.sent();
                            if (apiError) {
                                throw apiError;
                            }
                            return [4 /*yield*/, response.json()];
                        case 3:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        DesecAPI.prototype.createDomainRecordSet = function (opts) {
            return __awaiter(this, void 0, void 0, function () {
                var fullDomainName, url, fetchOpts, response, apiError, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fullDomainName = this.getFullDomainName(opts.name, opts.useDefaultRoot);
                            url = API_ENDPOINT + "/domains/" + fullDomainName + "/rrsets/";
                            fetchOpts = this.getDefaultFetchOpts({
                                method: 'POST',
                                authToken: this.getAuthToken(),
                                contentType: 'application/json',
                                body: JSON.stringify(opts.recordSet)
                            });
                            return [4 /*yield*/, this.fetchFn(url, fetchOpts)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, this.checkBadResponse(response)];
                        case 2:
                            apiError = _a.sent();
                            if (apiError) {
                                throw apiError;
                            }
                            return [4 /*yield*/, response.json()];
                        case 3:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        DesecAPI.prototype.updateDomainRecordSet = function (opts) {
            return __awaiter(this, void 0, void 0, function () {
                var fullDomainName, url, recordSet, fetchOpts, response, apiError, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fullDomainName = this.getFullDomainName(opts.name, opts.useDefaultRoot);
                            url = API_ENDPOINT + "/domains/" + fullDomainName + "/rrsets/";
                            if (Array.isArray(opts.recordSet)) {
                                recordSet = opts.recordSet;
                            }
                            else {
                                recordSet = [opts.recordSet];
                            }
                            recordSet.forEach(function (record) {
                                if (record.subname === undefined) {
                                    record.subname = '';
                                }
                            });
                            fetchOpts = this.getDefaultFetchOpts({
                                method: 'PATCH',
                                authToken: this.getAuthToken(),
                                contentType: 'application/json',
                                body: JSON.stringify(recordSet)
                            });
                            return [4 /*yield*/, this.fetchFn(url, fetchOpts)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, this.checkBadResponse(response)];
                        case 2:
                            apiError = _a.sent();
                            if (apiError) {
                                throw apiError;
                            }
                            return [4 /*yield*/, response.json()];
                        case 3:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        DesecAPI.prototype.deleteDomainRecordSet = function (opts) {
            return __awaiter(this, void 0, void 0, function () {
                var recordSet, fullDomainName, url, fetchOpts, response, apiError, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (Array.isArray(opts.recordSet)) {
                                recordSet = opts.recordSet.map(function (item) {
                                    return Object.assign(item, { records: [] });
                                });
                            }
                            else {
                                recordSet = [Object.assign(opts.recordSet, { records: [] })];
                            }
                            recordSet.forEach(function (record) {
                                if (record.subname === undefined) {
                                    record.subname = '';
                                }
                            });
                            fullDomainName = this.getFullDomainName(opts.name, opts.useDefaultRoot);
                            url = API_ENDPOINT + "/domains/" + fullDomainName + "/rrsets/";
                            fetchOpts = this.getDefaultFetchOpts({
                                method: 'PATCH',
                                authToken: this.getAuthToken(),
                                contentType: 'application/json',
                                body: JSON.stringify(recordSet)
                            });
                            return [4 /*yield*/, this.fetchFn(url, fetchOpts)];
                        case 1:
                            response = _a.sent();
                            return [4 /*yield*/, this.checkBadResponse(response)];
                        case 2:
                            apiError = _a.sent();
                            if (apiError) {
                                throw apiError;
                            }
                            return [4 /*yield*/, response.json()];
                        case 3:
                            result = _a.sent();
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        DesecAPI.prototype.getDefaultFetchOpts = function (opts) {
            var paramHeaders = {};
            if (opts.authToken) {
                paramHeaders['Authorization'] = "Token " + opts.authToken;
            }
            if (opts.contentType) {
                paramHeaders['Content-Type'] = opts.contentType;
            }
            var optsResult = {
                method: opts.method,
                mode: 'cors',
                cache: 'no-cache',
                redirect: 'follow',
                referrer: 'no-referrer',
                headers: Object.assign({
                    'User-Agent': USER_AGENT
                }, paramHeaders, opts.headers)
            };
            if (opts.body !== undefined && opts.body !== null) {
                optsResult.body = opts.body;
            }
            return optsResult;
        };
        DesecAPI.prototype.checkBadResponse = function (response) {
            return __awaiter(this, void 0, void 0, function () {
                var responseString, _err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (response.ok) {
                                return [2 /*return*/, false];
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, response.text()];
                        case 2:
                            responseString = _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            _err_1 = _a.sent();
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/, new ApiError(response.status, response.statusText, responseString)];
                    }
                });
            });
        };
        DesecAPI.prototype.getFullDomainName = function (name, useDefaultRoot) {
            if (useDefaultRoot === void 0) { useDefaultRoot = true; }
            if (useDefaultRoot && !name.endsWith("." + DEFAULT_ROOT_DOMAIN)) {
                return name + "." + DEFAULT_ROOT_DOMAIN;
            }
            return name;
        };
        return DesecAPI;
    }());
    exports.DesecAPI = DesecAPI;
    exports.default = DesecAPI;
    var ApiError = /** @class */ (function (_super) {
        __extends(ApiError, _super);
        function ApiError(httpStatus, httpStatusText, responseText) {
            var _this = this;
            var message = httpStatus + ": " + httpStatusText;
            var responseJson;
            if (responseText) {
                message += " - " + responseText;
                try {
                    responseJson = JSON.parse(responseText);
                }
                catch (_err) { }
            }
            _this = _super.call(this, message) || this;
            _this.name = _this.constructor.name;
            _this.httpStatus = httpStatus;
            _this.httpStatusText = httpStatusText;
            _this.responseText = responseText;
            _this.responseJson = responseJson;
            return _this;
        }
        return ApiError;
    }(Error));
    exports.ApiError = ApiError;
    var EmailAlreadyRegisteredError = /** @class */ (function (_super) {
        __extends(EmailAlreadyRegisteredError, _super);
        function EmailAlreadyRegisteredError(error) {
            var _this = _super.call(this, error.httpStatus, error.httpStatusText, error.responseText) || this;
            _this.name = _this.constructor.name;
            _this.message = error.responseJson.email[0];
            return _this;
        }
        return EmailAlreadyRegisteredError;
    }(ApiError));
    exports.EmailAlreadyRegisteredError = EmailAlreadyRegisteredError;
    var DomainNameAlreadyExistsError = /** @class */ (function (_super) {
        __extends(DomainNameAlreadyExistsError, _super);
        function DomainNameAlreadyExistsError(error) {
            var _this = _super.call(this, error.httpStatus, error.httpStatusText, error.responseText) || this;
            _this.name = _this.constructor.name;
            _this.message = error.responseJson.name[0];
            return _this;
        }
        return DomainNameAlreadyExistsError;
    }(ApiError));
    exports.DomainNameAlreadyExistsError = DomainNameAlreadyExistsError;
    var DomainUnavailableError = /** @class */ (function (_super) {
        __extends(DomainUnavailableError, _super);
        function DomainUnavailableError(error) {
            var _this = _super.call(this, error.httpStatus, error.httpStatusText, error.responseText) || this;
            _this.name = _this.constructor.name;
            _this.message = error.responseJson.detail || error.responseJson.code;
            return _this;
        }
        return DomainUnavailableError;
    }(ApiError));
    exports.DomainUnavailableError = DomainUnavailableError;
});
