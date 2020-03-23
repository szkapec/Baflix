const router = require('express').Router();
let MessagesModel = require('../models/Messages.model');


router.route('/').get((req,res) => {
    MessagesModel.find() //znajdz
        .then(message => res.json(message))
        .catch(err=> res.status(400).json('Error ' + err))
});



router.route('/add').post((req,res) => {
    const username = req.body.username;
     const description = req.body.description;

    const newExercise = new MessagesModel({
        username,
        description,
 
    });
    newExercise.save()
         .then(()=> res.json('Exercises added!!!'))
         .catch(err=> res.status(400).json('Error: ' + err))
 });



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
module.exports = router