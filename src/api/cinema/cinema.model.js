const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        movies: [{ type: mongoose.Types.ObjectId, ref: 'Movie' }]
    },  
    {
        timestamps: true
    }
);

const Movie = mongoose.model('movies', movieSchema);
module.exports = Movie;