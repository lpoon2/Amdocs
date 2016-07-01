var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({

    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
        role         : String,
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        name         : String,
        email        : String,
        role         : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String,
        role         : String
    },
    linkedin          : {
        id           : String,
        token        : String,
        name         : String,
        email        : String,
        role         : String
    }

});

module.exports = mongoose.model('User', userSchema);