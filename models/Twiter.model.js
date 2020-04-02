const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const twitterSchema = new Schema({
    username: {type:String,required: false},
    title: {type: String, required: false},
    description: {type: String,required: false},
    link: {type: String, required: false}
    },
 {

});
const Twitter = mongoose.model("Twitter", twitterSchema)
module.exports = Twitter; 