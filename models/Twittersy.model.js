const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const twittersSchema = new Schema({
    username: {type:String,required: false},
    link: {type: String, required: false},
    title: {type:String,required: false},
    description: {type:String,required: false},
    },
 {
    timestamps: true,
});
const TwittersModel = mongoose.model("twittersy", twittersSchema); //nazwa tabeli Exercise
module.exports = TwittersModel;