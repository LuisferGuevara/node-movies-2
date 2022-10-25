const express = require('express');
require('dotenv').config();

const moviesRouter = require('./src/api/movies/movies.routes')

const connectDb = require('./src/utils/db/db')

connectDb();

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;

const server = express();
const router = express.Router();

server.use(express.json());
server.use('/', moviesRouter)
server.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);
})