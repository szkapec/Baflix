const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const twitterSchema = new Schema({
    username: {type:String,required: true},
    title: {type: String, required: true},
    description: {type:String,required: true},
    link: {type: String, required: true}
    },
 {
    timestamps: true,
});
module.exports = Twitter = mongoose.model("Twitter", twitterSchema); //nazwa tabeli Exercise