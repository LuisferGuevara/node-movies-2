const express = require('express');
const Cinema = require('./cinema.model');

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const allCinemas = await Cinema.find().populate('movies');
        return res.status(200).json(allCinemas);
    } catch (error) {
        return res.status(500).json(error);
    }
});

router.post('/create', async (req, res) => {
    try {
        const newCinema = new Cinema({
            name: req.body.name,
            location: req.body.location,
            movies: []
        });
        const createdCinema = await newCinema.save();
        return res.status(201).json(createdCinema);
    } catch (error) {
        res.status(500).json(error)
    }
});

router.put('/add-movie', async (req, res) => {
    try {
        const { cinemaId } = req.body;
        const { movieId } = req.body;
        const updatedCinema = await Cinema.findByIdAndUpdate(
            cinemaId,
            { $push: { movies: movieId } },
            { new: true }
        );
        return res.status(200).json(updatedCinema);
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;