var express = require('express');
var router = express.Router();
var Civillian = require('../models/Civillian');
var bodyParser = require('body-parser');
var path = require('path');


router.use(bodyParser.urlencoded({extended: true}));

router.get('/', function(request, response) {
	Civillian(function(err, civillians) {
	  response.render('civillian', civillians)
	})
})