var settings = require('./config/settings')
  , Meal = require('hapi-meal');

// new Meal.Application
var application = Meal.createApplication(
  settings,
  // Meal.Application ready callback
  function () {
    application.start(
      // Hapi.Server started callback
      function () {
        console.log(
          'Hapi-Meal has been cooked and served at ' +
            settings.app.host + ':' + settings.app.port
        );
      }
    );
  }
);
