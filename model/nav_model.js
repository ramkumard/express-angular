exports.get_list= function(request, callback){
	request.get("http://foofys.styletag.in/api/categories/c1", function (err, res, body) {
        return callback(JSON.parse(body));
});
}

exports.get_sub_category= function(permalink,request, callback){
	request.get("http://foofys.styletag.in/api/categories/c1?id=t/designers/"+permalink, function (err, res, body) {
        return callback(JSON.parse(body));
});
}


exports.get_sale_category= function(c1,c2,request, callback){
	request.get("http://foofys.styletag.in/api/categories/c2?id=t/designers/"+c1+"/"+c2, function (err, res, body) {
        return callback(JSON.parse(body));
});
}


exports.get_sale_products = function(c1,c2,c3,request, callback){
	request.get("http://foofys.styletag.in/api/products?id=designers/"+c1+"/"+c2+"/"+c3+'&page=1&per_page=10'
, function (err, res, body) {
        return callback(JSON.parse(body));
});
}

