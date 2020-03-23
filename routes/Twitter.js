// const router = require('express').Router();
// let TwitterModel = require('../models/Twiter.model');


// router.route('/').get((req,res) => {
//     TwitterModel.find() //znajdz
//         .then(twitter => res.json(twitter))
//         .catch(err=> res.status(400).json('Error ' + err))
// });



// router.route('/add').post((req,res) => {
//     const username = req.body.username;
//     const title = req.body.title;
//      const description = req.body.description;
//      const link = req.body.link;

//     const newTwitt = new TwitterModel({
//         username,
//         description,
//         title,
//         link,
 
//     });
//     newTwitt.save()
//          .then(()=> res.json('twitter added!!!'))
//          .catch(err=> res.status(400).json('Error: ' + err))
//  });


//  router.route('/:id').get((req,res) => { //dodajemy trase id-tworzona automatycznie
//     TwitterModel.findById(req.params.id)
//         .then(twitter => res.json(twitter))
//         .catch(err => res.status(400).json('Error: ' + err));
// })

// router.route('/:id').delete((req,res) => {
//     TwitterModel.findByIdAndDelete(req.params.id)
//         .then(()=> res.json('TwitterModel deleted.'))
//         .catch(err => res.status(400).json('Error: ' + err));
// })

// router.route('/updateTwitter/:id').post((req,res) => {
//     TwitterModel.findById(req.params.id) //znajdz po id
//         .then(twitt => {
//             twitt.username = req.body.username;
//             twitt.description = req.body.description;
//             twitt.title = req.body.title;
//             twitt.link = req.body.link;

//             twitt.save()
//                 .then(()=> res.json('TwitterModel updated!'))
//                 .catch(err => res.status(400).json('Error: ' + err))
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// })

// module.exports = router