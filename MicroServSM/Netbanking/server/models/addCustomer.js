//var mongoose=require('mongoose');
var configRef=require('./config')
var customentModelRef=require('./dbschema').CustomerModel;

var connRef=require('./connectionHelper')

/*mongoose.connect(configRef.url,configRef.mongodb,configRef.mongoport)

var db=mongoose.connection;
db.once('open',function () {
    console.log("Connection Ready!");
    console.log("Testing ... ")
}
);
*/

var obj = new customentModelRef(
    {
        customerId:5454,
        name:'Brocksss',
        email:'brrss@gmail.com',
        phoneNo:677349999
    }
)

obj.save(function (err,success) {
    if (!err)
    {
        console.log("Object saved")
    }
})