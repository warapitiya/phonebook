var express = require('express');
var router = express.Router();
var controller = require('./controller');

/* GET home page. */
router.get('/', controller.getIndex);

router.get('/api/contacts', controller.contacts);

module.exports = router;
