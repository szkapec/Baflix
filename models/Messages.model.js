const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: {type:String,required: true},
    description: {type:String,required: true},

    },
 {
    timestamps: true,
});
const MessagesModel = mongoose.model("Message", exerciseSchema); //nazwa tabeli Exercise
module.exports = MessagesModel;