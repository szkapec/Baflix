const express = require('express')
const twitters = express.Router() //users

const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Twitters = require('../models/Messages.model')
twitters.use(cors());

twitters.get('/', (req,res) => {
    Twitters.find({

    })
    .then(message=> {
        if(message){
            res.json(message)
        } else {
            res.send("Twitters does not exist")
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})
twitters.post('/add', (req,res) => {
    Twitters.find({

    })
    .then(message => {
        if(message){
            const title = req.body.title;
            const description = req.body.description;

    const newExercise = new Twitters({
        title,
        description,
 
    });
    newExercise.save()
         .then(()=> res.json('twitters added!!!'))
         .catch(err=> res.status(400).json('Error: ' + err))
        }
    })
})