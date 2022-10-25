const express = require('express');
const Cinema = require('./cinema.model');

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const allCinemas = await Cinema.find();
        return res.status(200).json(allCinemas);
    } catch (error) {
        return res.status(500).json(error);
    }
})

module.exports = router;