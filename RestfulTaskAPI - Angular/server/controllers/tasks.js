var Task = require('../models/task');

module.exports = {
    index: function(req, res){
        Task.find({}, function(err, Tasks){
            if(err){
                res.json(err);
            }else {
                res.json({message: "Data given.", Tasks: Tasks});
            }
        })
    },
    create: function(req, res){
        const task = new Task({title: req.body.title, description: req.body.description, completed: req.body.completed});
        task.save(function(err, task){
            if(err){
                res.json({message:"Error creating task"})
            }else {
                res.json({ message: 'Task created', task: task});
            }
        })	
    },
    show: function(req, res){
        Task.findById({_id: req.params.id}, function(err, task) {
            if(err) {
                res.json({message: "Error getting Task."});
            } else {
                res.json({message: "Here is the Task: ", task: task});
            }
        })
    },	
    update: function(req, res){
        Task.update({_id: req.params.id},{title: req.body.title, description: req.body.description, completed: req.body.completed},
            function(err, task){
            if(err){
                res.json({message:"Error updating task"});
            }
            else{
                res.json({message:"Update Successfully", task:task});
            }
        })
    },
    destroy: function(req, res){
        Task.remove({_id: req.params.id}, function(err) {
            if(err) {
                res.josn({message: 'Error destroying task'});
            } else {
                res.json({message: 'Task removed'});
            }
        })
    },
}