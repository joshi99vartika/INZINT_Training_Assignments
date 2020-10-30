const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeaponSchema = new Schema({
    
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String},
    // ninja:{type: mongoose.Types.ObjectId, ref: 'ninja'}  
});
const weapons = mongoose.model('weapons',WeaponSchema);
module.exports = weapons;
