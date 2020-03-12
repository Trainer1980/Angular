const Task = require('../models/task.js');

module.exports = {
    index: function(req, res){
        Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err));
    },
    create: function(req, res){
        console.log(req.body)
        const task = new Task()
        task.title = req.body.title;
        task.description = req.body.description;
        task.completed = req.body.completed;
        task.save()
        .then(newTask =>{
            console.log("task created", newTask)
            res.json(newTask)
        })
        .catch(err => res.json(err));
    },
    show: function(req, res){
        Task.findOne({_id: req.params.id})
        .then(task =>{
            res.json("got your task", task)
        })
        .catch(err => res.json(err));
    },	
    update: function(req, res){
        Task.findOne({_id: req.params.id})
            .then(task =>{
                task.title = req.body.title;
                task.description = req.body.description;
                task.completed = req.body.completed;
                return task.save()
            })
            .then(task =>{
                res.json("updated your task", task)
            })
            .catch(err => res.json(err));
    },
    destroy: function(req, res){
        Task.remove({_id: req.params.id})
            .then(task =>{
                res.json("task removed", task)
            })
            .catch(err => res.json(err));
    },
}