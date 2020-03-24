
const userSchema = new Schema({
    task: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});
const User = mongoose.model("User", userSchema); //nazwa tabeli User

const router = require('express').Router();

//let User = require('../models/user.model');
router.route('/').get((req,res) => {        //aby wyswietlic wszystkie
    User.find() //znajdz i sparsuj na json
        .then(users => res.json(users))
        .catch(err=> res.status(400).json('Error ' + err))
});


router.route('/add').post((req,res) => {

    const task = req.body.task; 

   const newUser = new User({task});
   newUser.save()
        .then(() => res.json('task added!')) //parsuje na json()
        .catch(err=> res.status(400).json('Error: ' + err)) //ewentualne bledy
});

// newUser.save((err,doc)=> {
//     if(err) return console.log('blad')
//     return res.json('addd')
// })
module.exports = router