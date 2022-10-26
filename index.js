const express = require("express");
const connectDB = require("./src/utils/db/db");
const movieRoutes = require("./src/api/movies/movie.routes");
const cinemaRoutes = require("./src/api/cinema/cinema.routes");
require("dotenv").config();

connectDB();

const PORT = process.env.PORT || 8080;

const server = express();

server.use(express.json());

server.use("/", movieRoutes);
server.use("/cinema", cinemaRoutes);

server.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || "Unexpected error");
});

server.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
});
