/**
 * Created by Malindu Warapitiya on 3/15/16.
 */

var mongoose = require('mongoose');

var contact = require('./entity/contact');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Database connection is working');
});


/**
 * Get index file
 * @param request
 * @param respond
 * @param next
 */
exports.getIndex = function (request, respond, next) {
    res.sendFile('index.html');
};


/**
 * get all contacts
 * @param request
 * @param respond
 */
exports.contacts = function (request, respond) {

    contact.find(function (err, contacts) {

        if (err) {
            console.error(err);
        }

        respond.send(contacts);
    });
};


/**
 * Create a new contact
 * @param request
 * @param respond
 */
exports.createContact = function (request, respond) {

    var _contact = request.body;

    contact.create(_contact, function (err, contact) {

        if (err) {
            console.error(err);
        }

        respond.send(contact);
    });

};


/**
 * Remove a contact
 * @param request
 * @param respond
 */
exports.removeContact = function (request, respond) {

    var _data = {
        _id: request.params.id
    };

    console.log(_data);

    contact.remove(_data, function (_error) {
        if (_error) {
            console.error(_error);
            respond.status(400).end();
        }

        respond.status(200).end();

    });

};


/**
 * Update a contact record
 * @param request
 * @param respond
 */
exports.updateContact = function (request, respond) {

    var _id = request.params.id;

    contact.findById(_id, function (err, _contact) {
        if (err) throw err;

        // change the _contact values
        Object.keys(request.body).forEach(function (key) {

            //skip _id property
            if (key != '_id') {
                _contact[key] = request.body[key]
            }

        });

        // save the _contact
        _contact.save(function (err) {
            if (err) throw err;

            console.log('Contact successfully updated!');
            respond.status(200).end();
        });

    });

};