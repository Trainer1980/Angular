const Cake = require('../models/cake.js')

module.exports = {
    index: function(req, res){
        Cake.find()
        .then(cakes => res.json(cakes))
        .catch(err => res.json(err));
    },
    create: function(req, res){
        const cake = new Cake()
        cake.baker = req.body.baker;
        cake.image = req.body.image;
        cake.save()
        .then(createdCake =>{
            res.json(createdCake)
        })
        .catch(err => res.json(err));
    },
    show: function(req, res){
        Cake.findById({_id: req.params.id})
        .then(cakeToShow =>{
            res.json(cakeToShow)
        })
        .catch(err => res.json(err));
    },
    update: function(req, res){
        Cake.findById({_id: req.params.id})
        .then (cake =>{
            cake.reviews.push({rating: req.body.rating, comment: req.body.comment})
            cake.save()
                .then(editedCake =>{
                    console.log(editedCake)
                    res.json(editedCake)
                })
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
    }
}