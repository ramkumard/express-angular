var Nav = require("../model/nav_model");
var request = require("request");


exports.index = function(req, res){
   resultsObj = Nav.get_list(request, function(results){
   res.json(results);
});
};

exports.show = function(req, res){
   results_data = Nav.get_sub_category(req.param('permalink'),request, function(results){
   res.json(results);
});
};

exports.sale_list = function(req, res){
   results_data = Nav.get_sale_category(req.param('c1'),req.param('c2'),request, function(results){
   res.json(results);
});
};


exports.sale_products = function(req, res){
   results_data = Nav.get_sale_products(req.param('c1'),req.param('c2'),req.param('c3'),request, function(results){
   res.json(results);
});
};