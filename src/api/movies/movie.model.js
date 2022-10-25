const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        title: {type: String},
        director: {type: String},
        year: {type: Number},
        genre: {
            type: String,
            enum: ["Comedia", "Ciencia ficcion", "Animacion", Accion]
        }    
    },  
    {
        timestamps: true
    }
);

const Movie = mongoose.model('movies', movieSchema);
module.exports = Movie;