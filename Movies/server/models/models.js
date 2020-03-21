const mongoose = require('../config/mongoose.js');

const ReviewSchema = new mongoose.Schema({
    name:{type:String, required: true, minlength: 3},
    rating:{type: Number, required: true, min:1, max:5},
    content:{type: String, required: true, minlength: 3}
}, {timestamps:true})


const MovieSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 3},
    reviews: [ReviewSchema]
}, {timestamps:true})

const Review = mongoose.model('Review', ReviewSchema)
module.exports = Review
const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie