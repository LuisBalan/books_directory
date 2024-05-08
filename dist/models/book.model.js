"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
let Book = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: 'bookdirectory'
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _title_decorators;
    let _title_initializers = [];
    let _title_extraInitializers = [];
    let _author_decorators;
    let _author_initializers = [];
    let _author_extraInitializers = [];
    let _release_year_decorators;
    let _release_year_initializers = [];
    let _release_year_extraInitializers = [];
    let _edition_decorators;
    let _edition_initializers = [];
    let _edition_extraInitializers = [];
    let _ISBN_decorators;
    let _ISBN_initializers = [];
    let _ISBN_extraInitializers = [];
    var Book = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.title = __runInitializers(this, _title_initializers, void 0);
            this.author = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _author_initializers, void 0));
            this.release_year = (__runInitializers(this, _author_extraInitializers), __runInitializers(this, _release_year_initializers, void 0));
            this.edition = (__runInitializers(this, _release_year_extraInitializers), __runInitializers(this, _edition_initializers, void 0));
            this.ISBN = (__runInitializers(this, _edition_extraInitializers), __runInitializers(this, _ISBN_initializers, void 0));
            __runInitializers(this, _ISBN_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Book");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        _title_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                primaryKey: true,
                autoIncrement: true,
                field: 'title',
            })];
        _author_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                field: 'author'
            })];
        _release_year_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                field: 'release_year'
            })];
        _edition_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                field: 'edition'
            })];
        _ISBN_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                field: 'ISBN'
            })];
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _author_decorators, { kind: "field", name: "author", static: false, private: false, access: { has: obj => "author" in obj, get: obj => obj.author, set: (obj, value) => { obj.author = value; } }, metadata: _metadata }, _author_initializers, _author_extraInitializers);
        __esDecorate(null, null, _release_year_decorators, { kind: "field", name: "release_year", static: false, private: false, access: { has: obj => "release_year" in obj, get: obj => obj.release_year, set: (obj, value) => { obj.release_year = value; } }, metadata: _metadata }, _release_year_initializers, _release_year_extraInitializers);
        __esDecorate(null, null, _edition_decorators, { kind: "field", name: "edition", static: false, private: false, access: { has: obj => "edition" in obj, get: obj => obj.edition, set: (obj, value) => { obj.edition = value; } }, metadata: _metadata }, _edition_initializers, _edition_extraInitializers);
        __esDecorate(null, null, _ISBN_decorators, { kind: "field", name: "ISBN", static: false, private: false, access: { has: obj => "ISBN" in obj, get: obj => obj.ISBN, set: (obj, value) => { obj.ISBN = value; } }, metadata: _metadata }, _ISBN_initializers, _ISBN_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Book = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Book = _classThis;
})();
exports.default = Book;
