const express = require('express')
const twitters = express.Router() //users

const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

let Twitters = require('../models/Twittersy.model');
twitters.use(cors());

twitters.get('/', (req,res) => {
    Twitters.find({
    })
    .then(exercis => {
        if(exercis){
            res.json(exercis)
        } else {
            res.send("execises does not exist")
        }
    })
    .catch(err => {
        res.send("Twitters error" +  err)
    })
})

twitters.post('/add', (req,res) => {
    Twitters.find({
    })
    .then(exercis => {
        if(exercis){
            const username = req.body.username;
            const title = req.body.title;
            const description = req.body.description;

        
           const newTwitt = new Twitters({
               username,
               title,
               description,

           });
           newTwitt.save()
        .then(()=> res.json('Exercises added!!!'))
        .catch(err=> res.status(400).json('Error: ' + err))
        }
    })
})
module.exports = twitters