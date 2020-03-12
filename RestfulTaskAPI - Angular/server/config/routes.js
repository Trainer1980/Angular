const tasks = require('../controllers/tasks.js')

module.exports = function(app) {
    app.get('/tasks', tasks.index);
    app.get('/tasks/:id', tasks.show);
    app.post('/tasks', tasks.create);
    app.put('/tasks/:id', tasks.update);
    app.delete('/tasks/:id', tasks.destroy);
}