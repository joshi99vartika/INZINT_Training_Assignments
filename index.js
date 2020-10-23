const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/firstdb', {useNewUrlParser: true});

var db= mongoose.connection;
db.on('error',console.error.bind(console, 'connection error'));
db.once('open',function(){
    console.log("we are connected")
});

const kittySchema = new mongoose.Schema({
    name: String
  });
  /*******function speak */
 kittySchema.methods.speak = function () {
     const greeting = "my name is : "+this.name
        console.log(greeting);
   }
const Kitten = mongoose.model('kitten', kittySchema);

const harrykitty = new Kitten({ name: 'BINGO' });
    console.log(harrykitty.name);
harrykitty.speak();

harrykitty.save(function (err, k) {
    if (err) return console.error(err);
        k.speak();

  });

  Kitten.find({ name: "BINGO" }, (err,kittens)=>{
      if(err)return console.error(err)
      console.log(kittens);
  });