const express = require('express');
const Movie = require('./movie.model');

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);
    } catch (error) {
        return res.status(500).json(error);
    }
})

router.get('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const movieToFind = await Movie.findById(id);
        return res.status(200).json(movieToFind);
    } catch (error) {
        return res.status(500).json(error);
    }
})

module.exports = router