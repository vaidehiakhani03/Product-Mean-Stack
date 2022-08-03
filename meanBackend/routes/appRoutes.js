var express = require('express');
var router = express.Router();
var Product = require('../models/dataSchema');


router.post('/create',(req,res,next)=>{
    var newProduct = new Product({
        Productid: req.body.Productid,
        Productname: req.body.Productname,
        Productdescription: req.body.Productdescription,
        Startdate: req.body.Startdate,
        Enddate: req.body.Enddate,
    });
    newProduct.save((err,product)=>{
        if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:product});
    })
    // res.status(200).json({msg:'Post request is running'});
});
router.get('/read',(req,res,next)=>{
    Product.find({},(err,products)=>{
        if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:products});
    });
    // res.status(200).json({msg:'get request is running'});
});
router.put('/update',(req,res,next)=>{
    Product.findById(req.body._id,(err,product)=>{
        if(err)
        res.status(500).json({errmsg:err});
        product.Productid=req.body.Productid;
        product.Productname=req.body.Productname;
        product.Productdescription=req.body.Productdescription;
        product.Startdate=req.body.Startdate;
        product.Enddate=req.body.Enddate;
        product.save((err,product)=>{
            if(err)
            res.status(500).json({errmsg:err});
            res.status(200).json({msg:product});
            // document.getElementById("save_btn").innerHTML="update";
        })
    })
    // res.status(200).json({msg:'put request is running'});
});
router.delete('/delete/:id',(req,res,next)=>{
    Product.findByIdAndRemove({_id:req.params.id},(err,product)=>{
        if(err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:product});
    });
    // res.status(200).json({msg:'delete request is running'});
});
module.exports=router;