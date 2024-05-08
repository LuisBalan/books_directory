import { Sequelize } from "sequelize-typescript";
import { config, dialect } from "../config/db.config";
import Book from "../models/book.model";
import dotenv from 'dotenv';

dotenv.config();

const database = process.env.DB;
const username = process.env.USER;
const password = process.env.PASSWORD;
const host = process.env.HOST;

export class Database {
    public sequelize: Sequelize | undefined;

    constructor() {
        this.connectToDatabase();
    }

    private async connectToDatabase () {
        this.sequelize = new Sequelize({
            database: database,
            username: username,
            password: password,
            host: host,
            dialect,
            pool: {
                max: config.pool.max,
                min: config.pool.min,
                acquire: config.pool.acquire,
                idle: config.pool.idle
            },
            models: [Book]
        });

        await this.sequelize
        .authenticate ()
        .then(() => {
            console.log('Connection has been established successfully.')
        })
        .catch((err) => {
            console.error('Unable to connect to the Database: ', err)
        })
    }
}