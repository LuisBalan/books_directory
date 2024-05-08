"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const db_config_1 = require("../config/db.config");
const book_model_1 = __importDefault(require("../models/book.model"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const database = process.env.DB;
const username = process.env.USER;
const password = process.env.PASSWORD;
const host = process.env.HOST;
class Database {
    constructor() {
        this.connectToDatabase();
    }
    async connectToDatabase() {
        this.sequelize = new sequelize_typescript_1.Sequelize({
            database,
            username,
            password,
            host,
            dialect: db_config_1.dialect,
            pool: {
                max: db_config_1.config.pool.max,
                min: db_config_1.config.pool.min,
                acquire: db_config_1.config.pool.acquire,
                idle: db_config_1.config.pool.idle
            },
            models: [book_model_1.default]
        });
        await this.sequelize
            .authenticate()
            .then(() => {
            console.log('Connection has been established successfully.');
        })
            .catch((err) => {
            console.error('Unable to connect to the Database: ', err);
        });
    }
}
exports.Database = Database;
