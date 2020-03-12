const Task = require('../models/task.js');

module.exports = {
    index: function(req, res){
        Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err));
    },
    create: function(req, res){
        const task = new Task()
        task.title = req.body.title;
        task.description = req.body.description;
        task.completed = req.body.completed;
        task.save()
        .then(newTask =>{
            res.json(newTask)
        })
        .catch(err => res.json(err));
    },
    show: function(req, res){
        Task.findById({_id: req.params.id})
        .then(task =>{
            res.json(task)
        })
        .catch(err => res.json(err));
    },	
    update: function(req, res){
        Task.update({_id: req.params.id}, {title: req.body.title, description: req.body.description, completed: req.body.completed})
        .then(editedTask =>{
            console.log(editedTask)
            res.json(editedTask)
        })
        .catch(err => res.json(err));
    },
    destroy: function(req, res){
        Task.remove({_id: req.params.id})
        .then(task =>{
            res.json(task)
        })
        .catch(err => res.json(err));
    },
}