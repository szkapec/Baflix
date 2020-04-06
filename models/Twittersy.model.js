const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const twittersSchema = new Schema({
    title: {type:String,required: true},
    description: {type:String,required: true},
    },
 {
    timestamps: true,
});
const TwittersModel = mongoose.model("twittersy", twittersSchema); //nazwa tabeli Exercise
module.exports = TwittersModel;