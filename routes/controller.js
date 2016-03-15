/**
 * Created by Malindu Warapitiya on 3/15/16.
 */

var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Database connection is working');
});


var ContactsSchema = mongoose.Schema({
    name: String,
    number: String
});

mongoose.model('contacts', ContactsSchema);

/**
 * Get index file
 * @param req
 * @param res
 * @param next
 */
exports.getIndex = function (request, respond, next) {
    res.sendFile('index.html');
};

exports.contacts = function (request, respond) {
    mongoose.model('contacts').find(function (err, contacts) {

        if (err) {
            console.error(err);
        }

        respond.send(contacts);
    })
};