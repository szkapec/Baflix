const express = require('express')
const films = express.Router() //users

const cors = require('cors')

let Film = require('../models/PicturesTwo.model');
films.use(cors());

films.get('/', (req,res) => {
    Film.find({
     
    })
    .then(film => {
        console.log(film)
        if(film){
            res.json(film)
        } else {
            res.send("Film does not exist")
        }
    })
    .catch(err => {
        res.send("Film error" +  err)
    })
})

films.post('/add', (req,res) => {
    Film.find({
    })
    .then(film => {
        if(film){
            const id = req.body.id;
            const alt = req.body.alt;
            const img = req.body.img;
         
         
        
           const film = new Film({
            id,
            alt,
            img,
           });
           film.save()
        .then(()=> res.json('Film added!!!'))
        .catch(err=> res.status(400).json('Error: ' + err))
        }
    })
})


module.exports = films