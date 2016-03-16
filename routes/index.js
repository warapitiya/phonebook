var express = require('express');
var router = express.Router();
var controller = require('./controller');

/* GET home page. */
router.get('/', controller.getIndex);

router.get('/api/contacts', controller.contacts);

router.post('/api/contact', controller.createContact);

router.delete('/api/contact/:id', controller.removeContact);

router.post('/api/contact/:id', controller.updateContact);

module.exports = router;
