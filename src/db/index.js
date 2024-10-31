import fs from "fs";
import mysql from "mysql2/promise";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// This is MySql Database connection
const config = {
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
};

const connectDB = async () => {
  //const client = new pg.Client(config);
  let connection;
  try {
    connection = await mysql.createConnection(config);
    console.log("Database connected succesfully");
    const [rows] = await connection.query("SELECT VERSION() AS version");
    console.log("Database version:", rows[0].version);
  } catch (error) {
    console.error("Database connection error:", error);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

export default connectDB;
