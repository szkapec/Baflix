const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    id: {type:String ,required: false},
    alt: {type:String,required: false},
    img: {type:String,required: false},
    description: {type: String, required:false},
    seasons: {type:String,required: false},
    type: {type:String,required: false},
    presage: {type: String, required:false},
    time: {type: String, required:false},
    },
 {
    timestamps: true,
});
const Film = mongoose.model("filmsOne", FilmSchema); //nazwa tabeli --dodaje na koncu w mongoose "s" ...
module.exports = Film  //nazwa tabeli Exercise

