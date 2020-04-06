const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const twittersSchema = new Schema({
    title: {type:String,required: false},
    description: {type:String,required: false},
    },
 {
    timestamps: false,
});
const TwittersModel = mongoose.model("twittersy", twittersSchema); //nazwa tabeli Exercise
module.exports = TwittersModel;