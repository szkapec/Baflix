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



twitters.get('/:id', (req,res) => {
    Twitters.findById(req.params.id)
    .then(twit => {
        if(twit){
            res.json(twitt)
        } else {
            res.send("Twitters id does exist")
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})


twitters.delete('/:id', (req,res) => {
    Twitters.findByIdAndDelete(req.params.id)
    .then(twit => {
        if(twit){
            res.json(twitt)
        } else {
            res.send("Twitters delete does exist")
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

twitters.post('/updateTwitter/:id' , (req, res) => {
    Twitters.findById(req.params.id) 
        .then(twitt => {
            twitt.username = req.body.username;
            twitt.description = req.body.description;
            twitt.title = req.body.title;
            twitt.link = req.body.link;

            twitt.save()
            .then(()=> res.json('TwitterModel updated!'))
            .catch(err => {
                res.send("errory: " + err)
            })
        })
        .catch(err => {
            res.send("error: " + err)
        });
})
module.exports = twitters