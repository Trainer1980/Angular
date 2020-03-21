const Review = require('../models/models.js');
const Movie = require('../models/models.js')

module.exports = {
    index: function(req, res){
        Movie.find()
        .then(movies => res.json(movies))
        .catch(err => res.json(err));
    },
    create: function(req, res){
        console.log(req.body)
        const movie = new Movie()
        movie.title = req.body.movie.title
        movie.reviews.push(req.body.reviews)
        movie.save()
            .then(movie =>{
                console.log(movie)
                res.json(movie)
            })
            .catch(err => res.json(err));
        
    },
    show: function(req, res){
        Movie.findById({_id: req.params.id})
        .then(movie =>{
            res.json(movie)
        })
        .catch(err => res.json(err));
    },	
    update: function(req, res){
        Movie.findById({_id: req.params.id})
            .then(movie =>{
                movie.reviews.push({name: req.body.name, rating: req.body.rating, age: req.body.content})
                movie.save()
                    .then(editedMovie =>{
                    console.log(editedMovie)
                    res.json(editedMovie)
                })
                .catch(err => res.json(err));
            })
            .catch(err => res.json(err));
    },
    destroy: function(req, res){
        Movie.remove({_id: req.params.id})
        .then(movie =>{
            res.json(movie)
        })
        .catch(err => res.json(err));
    },
}