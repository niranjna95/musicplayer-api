import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

module.exports = {
  development: {
    user: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DATABASEPORT,
    database: process.env.DATABASE,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync(path.join(__dirname, "ca", "ca.pem")).toString(),
        require: true,
        rejectUnauthorized: true,
      },
      connectTimeout: 10000,
    },
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    migrationStorageTableName: "migrations",
  },
};
