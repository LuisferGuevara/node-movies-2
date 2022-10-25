require("dotenv").config();
const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL;

const connectDB = async () => {
  try {
    const db = await mongoose.connect(DB_URL);
    const { name, host } = db.connection;
    console.log(`Conectado a la base de datos --> ${name} en el host --> ${host}`);
  } catch (error) {
    console.log(`Error conectando a la base de datos. Error --> ${error}`);
  }
};

module.exports = connectDB;
