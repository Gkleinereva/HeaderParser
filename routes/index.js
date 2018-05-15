var express = require('express');
var router = express.Router();

var cont = require('../controllers/parser');

/* GET home page. */
router.get('/', cont.parser);

module.exports = router;
