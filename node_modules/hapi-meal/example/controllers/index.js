var _ = require('lodash');

/**
 * Demo controller
 * @type {Function}
 */
var IndexController = module.exports = function IndexController (options) {
  this.options = options;
};

  _.extend(
  IndexController.prototype,
  {
    indexAction: function (request, data) {
      data.title = 'myApp | beta';
      data.heading = 'Hapi Meal!';
      data.other = '(°>_<°)';
      return request.reply.view(data.viewName, data);
    }
  }
);
