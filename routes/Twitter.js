const express = require('express')
const twitters = express.Router() //users

const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Twitter = require('../models/Twiter.model');
twitters.use(cors());

twitters.get('/', (req, res) => {
    Twitter.find({

    })
    .then(twitter=> {
        if(twitter){
            res.json(twitter);
        } else {
            res.send("Twitters does not exist")
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})

twitters.post('/add', (req,res) => {
    Twitter.find({

    })
    .then(twitter => {
        if(twitter) {
            const username = req.body.username;
            const title = req.body.title;
             const description = req.body.description;
             const link = req.body.link;

             const newTwitt = new Twitter({
                username,
                description,
                title,
                link,
            });
            newTwitt.save()
            .then(()=> res.json('twitter added!!!'))
            .catch(err=> res.status(400).json('Error: ' + err))
        }
    })
})

twitters.get('/:id', (req,res) => {
    Twitter.findById(req.params.id)
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
    Twitter.findByIdAndDelete(req.params.id)
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
    Twitter.findById(req.params.id) 
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

module.exports = twitters;