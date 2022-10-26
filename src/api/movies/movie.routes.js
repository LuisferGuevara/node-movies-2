const express = require('express');
const Movie = require('./movie.model');

const router = express.Router();

router.get('/', async(req, res, next) => {
    try {
        const allMovies = await Movie.find();
        return res.status(200).json(allMovies);
    } catch (error) {
        return next(error);
    }
})

router.get('/id/:id', async(req, res, next) => {
    try {
        const id = req.params.id;
        const movieToFind = await Movie.findById(id);
        return res.status(200).json(movieToFind);
    } catch (error) {
        return next(error);
    }
})

router.get('/title/:title', async(req, res, next) => {
    try {
        const title = req.params.title;
        const movieToFind = await Movie.find({title: title});
        return res.status(200).json(movieToFind);
    } catch (error) {
        return next(error);
    }
})

router.get('/genre/:genre', async(req, res, next) => {
    try {
        const genre = req.params.genre;
        const movieToFind = await Movie.find({genre: genre});
        return res.status(200).json(movieToFind);
    } catch (error) {
        return next(error);
    }
})

router.get('/year/:year', async(req, res, next) => {
    try {
        const year = req.params.year;
        const movieToFind = await Movie.find({year: {$gte: year}});
        return res.status(200).json(movieToFind);
    } catch (error) {
        return next(error);
    }
})

router.post('/create', async (req, res, next) => {
    try {
        const movie = req.body;
        const newMovie = new Movie(movie)
        const created = await newMovie.save()
        return res.status(201).json(`Pelicula creada satisfactoriamente`);
    }
    catch (error) {
        return next(error);
    }
})

router.put('/edit/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const movie = req.body;
        const movieToEdit = new Movie(movie);
        movieToEdit._id = id;
        const edited = await Movie.findByIdAndUpdate(id, movieToEdit)
        return res.status(200).json(`Pelicula modificada satisfactoriamente`);
    }
    catch (error) {
        return next(error);
    }
})


router.delete('/delete/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const deleted = await Movie.findByIdAndDelete(id)
        return res.status(200).json(`Pelicula eliminada satisfactoriamente`);
    }
    catch (error) {
        return next(error);
    }
})

module.exports = router