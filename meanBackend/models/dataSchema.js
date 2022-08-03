var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
    Productid:{type:Number},
    Productname:{type:String},
    Productdescription:{type:String},
    Startdate:{type:Date},
    Enddate:{type:Date},
});

module.exports=mongoose.model('product',ProductSchema);