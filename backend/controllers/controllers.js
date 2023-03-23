// import Todo Model
const Movies = require('../models/models')
// DEFINE CONTROLLER FUNCTIONS

// listAllTodos function - To list all movies
exports.listAllMovies = (req, res) => {
    Movies.find({})
    .then(movies => res.send(movies))
    .catch(err => res.send(err))
    };

// createNewTodo function - To create new movie
exports.createNewMovie = (req, res) => {
    Movies.create(req.body)
    res.send('saved')
};

// deleteTodo function - To delete todo by id
exports.deleteMovie = async (req, res) => {
    await Movies.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            return res.status(404).send(err);
        }
        res.status(200).json({ message: "Todo successfully deleted" });
    });
};