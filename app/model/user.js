var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({

        profile_id           : String,
        token        : String,
        email        : String,
        name         : String,
        role         : String,
        image        : String,
        provider     : String,
        company      : String,
        join_date    : Date
});

module.exports = mongoose.model('User', userSchema);
