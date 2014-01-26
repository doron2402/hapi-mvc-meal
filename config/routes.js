var path = require('path');

module.exports = function (app) {
  // Cache life is 1 day
  var cacheLife = (24 * 3600000).toString();
  return [
    // Simple static resources route ("/static/favicon.ico")
    {
      method: 'GET', path: '/static/{path*}',
      handler: {
        directory: { path: __dirname + '/../assets/public', listing: false, index: true }
      }
      /*, config: {
        cache: {
          mode: 'client+server',
          expiresIn: cacheLife
        }
      }*/
    },
    // Index / Front route:
    // GET calls indexController.indexAction()
    {
      method: 'GET', path: '/',
      handler: app.execute.bind(app, 'index', 'index')
      /*, config: {
        cache: {
          mode: 'client+server',
          expiresIn: cacheLife
        }
      }*/
    }
  ];
};