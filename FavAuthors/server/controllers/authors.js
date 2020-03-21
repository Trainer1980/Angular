const Author = require('../models/author.js');

module.exports = {
    index: function(req, res){
        Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.json(err));
    },
    create: function(req, res){
        const author = new Author()
        author.name = req.body.name;
        author.save()
        .then(newAuthor =>{
            res.json(newAuthor)
        })
        .catch(err => res.json(err));
    },
    show: function(req, res){
        Author.findById({_id: req.params.id})
        .then(author =>{
            res.json(author)
        })
        .catch(err => res.json(err));
    },	
    update: function(req, res){
        Author.update({_id: req.params.id}, {name: req.body.name})
        .then(editedAuthor =>{
            console.log(editedAuthor)
            res.json(editedAuthor)
        })
        .catch(err => res.json(err));
    },
    destroy: function(req, res){
        Author.remove({_id: req.params.id})
        .then(author =>{
            res.json(author)
        })
        .catch(err => res.json(err));
    },
}