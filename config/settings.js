var path = require('path')
  , _ = require('lodash');

module.exports = {
  app: {
    name: 'myApp',
    protocol: 'http://',
    host: '0.0.0.0',
    port: process.env.PORT || 3001,
    path: __dirname + '/../',
    assets: {
      less: {
        files: [ 'style.less' ],
        path: __dirname + '/../assets/less'
      }/*,
      stylus: {
        files: [ 'style.styl' ],
        path: __dirname + '/../assets/stylus'
      }*/
    },
    routes: require('./routes')
  },/*
  views: {
    engines: {
      html: {
        module: //'lodash',
        {
          compile: function (tmpl, options) {
            return _.template(tmpl, null, options || null);
          }
        }
      }
    },
    path: __dirname + '/../views',
    layout: true,
    layoutKeyword: 'body',
    defaultExtension: 'html'
  },
  cache: {
    engine: 'memory',//'redis',
    partition: 'myApp',
    host: '127.0.0.1',
    port: '6379'
  },*/
  debug: { request: ['error', 'uncaught'] }
};