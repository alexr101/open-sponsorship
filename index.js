/**
 * Module dependencies.
 */
const express = require('express');
const app = express();
const chalk = require('chalk')

const ExpressConfig = require('./appConfigs/express')
ExpressConfig.init(app)

const MongoConfig = require('./appConfigs/mongoose')
MongoConfig.init(app)

const Routing = require('./routes/core/router')
Routing.init(app)

// app.use(errorHandler());
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;