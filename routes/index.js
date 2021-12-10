var express = require('express');
var router = express.Router();
let { index, detailMenu } = require('../controllers/indexController.js');

/* GET home page. */
router.get('/', index);

/* Route for Menu Detial */
router.get('/detalle/:id', detailMenu);

module.exports = router;
