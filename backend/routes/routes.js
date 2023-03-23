'use strict';

// create App function
module.exports = function (app) {
        var moviesList = require('../controllers/controllers');

        app
        .route("/movies")
        .get(moviesList.listAllMovies)
        .post(moviesList.createNewMovie);
        // put and delete request for /todos endpoints
        app
        .route("/movies/:id")
        .delete(moviesList.deleteMovie);
};