var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    sport: String,
    nationality: String,
    gender: String,
    dob: Date,
    description: String,
    location: String,
    team: String,
    facebook: String,
    instagram: String,
    twitter: String,
});

module.exports = mongoose.model('UserModel', UserSchema );