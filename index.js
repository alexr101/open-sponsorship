Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @alexr101 Sign out
1
0 0 alexr101/starter-app Private
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights  Settings
starter-app/app.js
011fd9d  on Mar 7
@alexr101 alexr101 bandwidth updates: getAllApplications, getNumberInfo, updatePhone(app…
@sahat @alexr101 @GeneralZero @tmcpro @notJackson @karljakober @InstanceOfMichael @sixFingers @dstroot @bencxr @ammit @YasharF @westonplatter @starcharles @RobTS @xasos @niallobrien @looterz @linmic @jromer94 @theGrue @kusold @gianpaj @vanshady @cassidoo
     
268 lines (240 sloc)  10.2 KB
/**
 * Module dependencies.
 */
const express = require('express');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const lusca = require('lusca');
const dotenv = require('dotenv');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');
const sass = require('node-sass-middleware');
const ngrok = require('ngrok');


/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env' });

/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');
const userController = require('./controllers/user');
const authController = require('./controllers/auth');
const apiController = require('./controllers/api');
const contactController = require('./controllers/contact');
const uploadController = require('./controllers/upload');
const appController = require('./controllers/app/main');


const paypalController = require('./controllers/api/paypal');
const stripeController = require('./controllers/api/stripe');
const bandwidthController = require('./controllers/api/bandwidth');


/**
 * API keys and Passport configuration.
 */
const passportConfig = require('./config/passport');

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

// Unhandlded Rejections - 
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});

/**
 * Express configuration.
 */
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public')
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());



app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * Primary app routes.
 */
app.get('/', homeController.index);

app.get(['/app', '/app/dashboard'], appController.dashboard);
app.get('/app/messaging', appController.messaging);
app.get('/app/contacts', appController.contacts);
app.get('/app/analytics', appController.analytics);
app.get('/app/history', appController.history);

app.get('/auth/login', authController.getLogin);
app.post('/auth/login', authController.postLogin);
app.get('/auth/logout', authController.logout);
app.get('/auth/forgot', authController.getForgot);
app.post('/auth/forgot', authController.postForgot);
app.get('/auth/reset/:token', authController.getReset);
app.post('/auth/reset/:token', authController.postReset);
app.get('/auth/signup', authController.getSignup);
app.post('/auth/signup', authController.postSignup);



/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});



module.exports = app;
