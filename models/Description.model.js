const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const descriptionSchema = new Schema({
    one: {type:String,required: false},
    two: {type:String,required: false},
    three: {type:String,required: false},
    four: {type: String, required:false},
    },
 {
    timestamps: true,
});
const Description = mongoose.model("descriptions", descriptionSchema); //nazwa tabeli --dodaje na koncu w mongoose "s" ...
module.exports = Description  //nazwa tabeli Exercise

