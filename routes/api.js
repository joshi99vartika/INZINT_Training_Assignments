const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');


//get list of ninja from db
router.get('/ninja',function(req,res){
    res.send({type:'GET'});
});

//adding new ninja to database

router.post('/ninja',function(req,res){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
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
