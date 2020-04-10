const express = require('express')
const list = express.Router() //users

const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const ListWorks = require('../models/ListWorks.model')
list.use(cors());

list.get('/', (req,res) => {
    ListWorks.find({

    })
    .then(message=> {
        if(message){
            res.json(message)
        } else {
            res.send("list does not exist")
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})
list.post('/add', (req,res) => {
    ListWorks.find({

    })
    .then(message => {
        if(message){
            const username = req.body.username;
            const description = req.body.description;
            const priorytet = req.body.priorytet;
            const date = req.body.date;

    const newList = new ListWorks({
        username,
        description,
        priorytet,
        date,
 
    });
    newList.save()
         .then(()=> res.json('list added!!!'))
         .catch(err=> res.status(400).json('Error: ' + err))
        }
    })
})

list.delete('/:id' , (req,res) => {
    ListWorks.findByIdAndDelete(req.params.id)
    .then(mess => {
        if(mess) {
            res.json(mess)
        } else {
            res.send("Delete id does mess")
        }
    })
    .catch(err => res.send('error: ' + err));
})


module.exports = list;