const authors = require('../controllers/authors.js');

module.exports = function(app) {
    app.get('/authors', authors.index);
    app.get('/authors/:id', authors.show);
    app.post('/authors', authors.create);
    app.put('/authors/:id', authors.update);
    app.delete('/authors/:id', authors.destroy);
}