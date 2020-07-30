const express = require('express')
const descriptions = express.Router() //users

const cors = require('cors')

let Description = require('../models/Description.model');
descriptions.use(cors());

descriptions.get('/', (req,res) => {
    Description.find({
     
    })
    .then(exercis => {
        console.log(exercis)
        if(exercis){
            res.json(exercis)
        } else {
            res.send("descriptions does not exist")
        }
    })
    .catch(err => {
        res.send("descriptions error" +  err)
    })
})

descriptions.post('/add', (req,res) => {
    Description.find({
    })
    .then(description => {
        if(description){
            const one = req.body.one;
            const two = req.body.two;
            const three = req.body.three;
            const four = req.body.four;
         
        
           const newDescriptions = new Description({
            one,
            two,
            three,
            four,
           });
           newDescriptions.save()
        .then(()=> res.json('description added!!!'))
        .catch(err=> res.status(400).json('Error: ' + err))
        }
    })
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

module.exports = descriptions