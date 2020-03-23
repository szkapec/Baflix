const express = require('express')
const exercises = express.Router() //users

const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

let Exercise = require('../models/Exercise.model');
exercises.use(cors());

exercises.get('/', (req,res) => {
    Exercise.find({
    })
    .then(exercis => {
        if(exercis){
            res.json(exercis)
        } else {
            res.send("execises does not exist")
        }
    })
    .catch(err => {
        res.send("Exercises error" +  err)
    })
})

exercises.post('/add', (req,res) => {
    Exercise.find({
    })
    .then(exercis => {
        if(exercis){
            const username = req.body.username;
            const description = req.body.description;
            const duration = Number(req.body.duration);
            const date = Date.parse(req.body.date);
        
           const newExercise = new Exercise({
               username,
               description,
               duration,
               date,
           });
           newExercise.save()
        .then(()=> res.json('Exercises added!!!'))
        .catch(err=> res.status(400).json('Error: ' + err))
        }
    })
})

exercises.get('/:id' , (req,res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        if(exercise) {
            res.json(exercise)
        } else {
            res.send("Exercise id does exist")
        }
    })
    .catch(err => res.send('error: ' + err));
})
exercises.delete('/:id' , (req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(exercise => {
        if(exercise) {
            res.json(exercise)
        } else {
            res.send("Delete id does exist")
        }
    })
    .catch(err => res.send('error: ' + err));
})

exercises.post('/update/:id' , (req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date)

            exercise.save()
                .then(()=> res.json('Exercise updated!'))
                .catch(err => {
                    res.send("Error exercises: " + err)
                })
        })
        .catch(err => {
            res.send("error exercises: " + err)
        });
})




// const router = require('express').Router();




// router.route('/').get((req,res) => {
//     Exercise.find() //znajdz
//         .then(exercises => res.json(exercises))
//         .catch(err=> res.status(400).json('Error ' + err))
// });


// router.route('/add').post((req,res) => {
    
//    const username = req.body.username;
//     const description = req.body.description;
//     const duration = Number(req.body.duration);
//     const date = Date.parse(req.body.date);

//    const newExercise = new Exercise({
//        username,
//        description,
//        duration,
//        date,
//    });
//    newExercise.save()
//         .then(()=> res.json('Exercises added!!!'))
//         .catch(err=> res.status(400).json('Error: ' + err))
// });

// router.route('/:id').get((req,res) => { //dodajemy trase id-tworzona automatycznie
//     Exercise.findById(req.params.id)
//         .then(exercise => res.json(exercise))
//         .catch(err => res.status(400).json('Error: ' + err));
// })

// router.route('/:id').delete((req,res) => {
//     Exercise.findByIdAndDelete(req.params.id)
//         .then(()=> res.json('Exercise deleted.'))
//         .catch(err => res.status(400).json('Error: ' + err));
// })
// router.route('/update/:id').post((req,res) => {
//     Exercise.findById(req.params.id) //znajdz po id
//         .then(exercise => {
//             exercise.username = req.body.username;
//             exercise.description = req.body.description;
//             exercise.duration = Number(req.body.duration);
//             exercise.date = Date.parse(req.body.date)

//             exercise.save()
//                 .then(()=> res.json('Exercise updated!'))
//                 .catch(err => res.status(400).json('Error: ' + err))
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// })

module.exports = exercises