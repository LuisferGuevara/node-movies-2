const express = require("express");
const connectDB = require("./src/utils/db/db");
const movieRoutes = require("./src/api/movies/movie.routes")
const cinemaRoutes = require("./src/api/cinema/cinema.routes")
require('dotenv').config()

connectDB();

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;

const server = express();
const router = express.Router();

server.use(express.json())

server.use('/', movieRoutes)
server.use('/cinema', cinemaRoutes)

server.listen(PORT, () => {
    console.log(`Server running in ${PORT}`)
})
