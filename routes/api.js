const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');
const weapons = require('../models/weapons');


//applying aggregation
router.get("/weapons",function(req, res) {
    weapons.aggregate([
        {
          $lookup:
            {
              from: "ninja",
              localField: "item",
              foreignField: "sku",
              as: "result"
            }
       }
     ]).exec(function(err, results) {
        if (err) throw err;
        console.log(results);
        res.send(results);
 });    
});





//adding new ninja to database

router.post('/ninja',function(req,res){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    });
});


router.post('/weapons',function(req,res){
   weapons.create(req.body).then(function(weapons){
        res.send(weapons);
    });
});

//update ninja
router.put('ninja/:id',function(req,res){
    Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
    Ninja.findOne({_id: req.params.id}).then(function(ninja){
    res.send(ninja);
});
});
});

// delete ninja
router.delete('ninja/:id',function(req,res){
        Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
        res.send(ninja);
});
});
module.exports = router;
