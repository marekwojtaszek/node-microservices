var heroin = require('heroin-js');
var _      = require('lodash');
var base   = require('./base.js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

var prod = {
  name    : 'bookinventoryservice-stage',
  domains : [ 'bookinventoryservice-stage.herokuapp.com' ]
};

var settings = _.merge({}, base, prod);

configurator(settings);
