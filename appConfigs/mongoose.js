const mongoose = require('mongoose');

exports.init = (app) => {
    // Connect to MongoDB.
    console.log('hiiii');
    
    console.log(process.env.MONGODB_URI);
    
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
    mongoose.connection.on('error', _errHandler);
}

const _errHandler = (err) => {
    console.error(err);
    process.exit();
}

