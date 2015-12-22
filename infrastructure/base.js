/**

heroku plugins:install heroku-pipelines

------------------------------------------------------------------------

var heroin = require('heroin-js');
var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});

configurator.export('bookinventoryservice').then(function(result) {
    console.log(result);
});

**/

module.exports = {
  region: 'eu',
  maintenance: false,
  stack: 'cedar-14',
  config_vars:
   { MONGOLAB_URI: 'mongodb://heroku_4x78mgjj:5c76vmaot6lpjfdubl2k6f1qc4@ds033285.mongolab.com:33285/heroku_4x78mgjj' },
  addons: {},
  collaborators:
   [ 'mateusz.zajac@schibsted.pl',
     'bartlomiej.pacura@outlook.com',
     'marek.wojtaszek@schibsted.pl',
     'aleksander.sadecki@schibsted.pl',
     'michdrob@gmail.com' ],
  features:
   { 'runtime-dyno-metadata': { enabled: false },
     'log-runtime-metrics': { enabled: false },
     'http-session-affinity': { enabled: false },
     preboot: { enabled: false },
     'http-shard-header': { enabled: false },
     'http-end-to-end-continue': { enabled: false } },
  formation: [ { process: 'web', quantity: 1, size: 'Free' } ],
  log_drains: [],
};
