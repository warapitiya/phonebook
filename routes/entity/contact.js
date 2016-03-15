/**
 * Created by Malindu Warapitiya on 3/15/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var contactSchema = new Schema({
    name: String,
    number: Number,
    address: String,
    email: String
});

var Contacts = mongoose.model('contacts', contactSchema);

module.exports = Contacts;