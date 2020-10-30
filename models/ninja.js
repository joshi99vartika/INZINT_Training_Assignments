const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NinjaSchema = new Schema({

    firstname:{type:String},
    lastname:{type:String},
    email:{type:String},
    // weapons:[{type: Schema.Types.ObjectId,ref: "weapons"}]
});
const Ninja = mongoose.model('ninja',NinjaSchema);
module.exports = Ninja;

