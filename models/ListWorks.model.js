const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listWorksSchema = new Schema({
    username: {type:String,required: true},
    description: {type:String,required: true},
    priorytet: {type: Boolean, required: false},
    date: {type: String, required: false},

    
    },
 {
    timestamps: true,
});
module.exports = ListWorks = mongoose.model("ListWorks", listWorksSchema); //nazwa tabeli Exercise
