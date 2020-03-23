const Quote = require('../models/models.js')

module.exports = {
    index: function(req, res){
        Quote.find()
            .then(quotes =>{
                res.json(quotes)
            })
            .catch(err => {
                res.json(err)
            })
    },
    create: function(req, res){
        const quote = new Quote()
        quote.name = req.body.name;
        quote.save()
            .then(newQuote =>{
                res.json(newQuote)
            })
            .catch(err =>{
                res.json(err)
            })
    },
    show: function(req, res){
        Quote.findById({_id: req.params.id})
        .then(quote =>{
            res.json(quote)
        })
        .catch(err =>{
            res.json(err)
        })
    },
    update: function(req, res){
        Quote.findById({_id: req.params.id})
        .then(quoteToUpdate =>{
            quoteToUpdate.quotes.push(req.body.quote)
            quoteToUpdate.save()
                .then(quote =>{
                    res.json(quote)
                })
                .catch(err =>{
                    res.json(err)
                })
        })
        .catch(err =>{
            res.json(err)
        })
    },
    destroy: function(req, res){
        Quote.findById({_id: req.params.id})
            .then(quote =>{
                quote.update({ $pull: { quotes: { _id: quoteid }}})
                quote.save()
                    .then(quote =>{
                        res.json(quote)
                    })
                    .catch(err =>{
                        res.json(err)
                    })
            })
            .catch(err =>{
                res.json(err)
            })
    }
}