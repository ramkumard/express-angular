var express = require('express');
var router = express.Router();
var controllers = require("../controller/MainController");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'St-Angular' });
});

module.exports = router;
