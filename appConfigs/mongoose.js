const mongoose = require('mongoose');
const localMongo = process.env.MONGODB_URI;
const mongoLab = 'mongodb://' + process.env.MONGOLAB_USER + ':' + process.env.MONGOLAB_PASS + process.env.MONGOLAB_URI;

exports.init = (app) => {


    mongoose.Promise = global.Promise;
    mongoose.connect(mongoLab, _onConnect);
    mongoose.connection.on('error', _errHandler);
}

const _onConnect = () =>{
    console.log('connected to ' + mongoLab);
}

const _errHandler = (err) => {
    if(err) console.log(err);
    process.exit();
}

