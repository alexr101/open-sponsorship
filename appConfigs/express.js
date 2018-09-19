const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
const path = require('path');


exports.init = (app) => {
    dotenv.config();
    
    process.on('unhandledRejection', (reason, p) => {
        console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    });
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
    app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(expressValidator());
    app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
}