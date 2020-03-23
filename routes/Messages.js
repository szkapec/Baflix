const express = require('express')
const messages = express.Router() //users

const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Messages = require('../models/Messages.model')
messages.use(cors());

messages.get('/', (req,res) => {
    Messages.find({

    })
    .then(message=> {
        if(message){
            res.json(message)
        } else {
            res.send("Messages does not exist")
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})
messages.post('/add', (req,res) => {
    Messages.find({

    })
    .then(message => {
        if(message){
            const username = req.body.username;
            const description = req.body.description;

    const newExercise = new Messages({
        username,
        description,
 
    });
    newExercise.save()
         .then(()=> res.json('Messages added!!!'))
         .catch(err=> res.status(400).json('Error: ' + err))
        }
    })
})

//.................................

// const router = require('express').Router();
// let MessagesModel = require('../models/Messages.model');


// router.route('/add').post((req,res) => {
//     const username = req.body.username;
//      const description = req.body.description;

//     const newExercise = new MessagesModel({
//         username,
//         description,
 
//     });
//     newExercise.save()
//          .then(()=> res.json('Exercises added!!!'))
//          .catch(err=> res.status(400).json('Error: ' + err))
//  });


// router.route('/').get((req,res) => {
//     MessagesModel.find() //znajdz
//         .then(message => res.json(message))
//         .catch(err=> res.status(400).json('Error ' + err))
// });






/*

let MessagesModel = require('../models/Messages.model');
router.route('/add').post((req,res) => {
    const username = req.body.username;
     const description = req.body.description;
     // const duration = Number(req.body.duration);
     // const date = Date.parse(req.body.date);
 
    const newExercise = new MessagesModel({
        username,
        description,
 
    });
    newExercise.save()
         .then(()=> res.json('Exercises added!!!'))
         .catch(err=> res.status(400).json('Error: ' + err))
 });

*/
module.exports = messages;