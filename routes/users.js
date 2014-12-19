var express = require('express');
var router = express.Router();
var controllers = require("../controller/MainController");

/* GET nav bar. */
router.get('/api/polls',controllers.index);
router.get('/api/sub_category', function(req, res, next ) {
    controllers.show(req, res);
})
router.get('/api/sale_category', function(req, res, next ) {
    controllers.sale_list(req, res);
})
router.get('/api/sale_products', function(req, res, next ) {
    controllers.sale_products(req, res);
})
module.exports = router;
