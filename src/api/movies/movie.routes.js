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

router.get('/title/:title', async(req, res) => {
    try {
        const title = req.params.title;
        const movieToFind = await Movie.find({title: title});
        return res.status(200).json(movieToFind);
    } catch (error) {
        return res.status(500).json(error);
    }
})

router.get('/genre/:genre', async(req, res) => {
    try {
        const genre = req.params.genre;
        const movieToFind = await Movie.find({genre: genre});
        return res.status(200).json(movieToFind);
    } catch (error) {
        return res.status(500).json(error);
    }
})

router.get('/year/:year', async(req, res) => {
    try {
        const year = req.params.year;
        const movieToFind = await Movie.find({year: {$gte: year}});
        return res.status(200).json(movieToFind);
    } catch (error) {
        return res.status(500).json(error);
    }
})

router.post('/create', async (req, res) => {
    try {
        const movie = req.body;
        const newMovie = new Movie(movie)
        const created = await newMovie.save()
        return res.status(201).json(`Pelicula creada satisfactoriamente`);
    }
    catch (error) {
        return res.status(500).json('Error')
    }
})

router.put('/edit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const movie = req.body;
        const movieToEdit = new Movie(movie);
        movieToEdit._id = id;
        const edited = await Movie.findByIdAndUpdate(id, movieToEdit)
        return res.status(200).json(`Pelicula modificada satisfactoriamente`);
    }
    catch (error) {
        return res.status(500).json('Error')
    }
})


module.exports = router