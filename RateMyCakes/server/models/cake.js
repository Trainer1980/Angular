const mongoose = require('../config/mongoose.js');

const RatingSchema = new mongoose.Schema({
    rating: { type: Number, required: false, minlength: 0},
    comment: { type: String, required: false, minlength: 3}}, {timestamps: true});
    
const CakeSchema = new mongoose.Schema({
    baker: { type: String, required: true, minlength: 3},
    image: {type: String, required: true, minlength: 2}, 
    reviews: [RatingSchema]}, {timestamps: true});

const Rating = mongoose.model('Rating', RatingSchema)
module.exports = Rating
const Cake = mongoose.model('Cake', CakeSchema);
module.exports = Cake