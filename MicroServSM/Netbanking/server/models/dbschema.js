var mongoose = require('mongoose');
var configRef = require('./config')

console.log('Mongoose is ready!');

/*
mongoose.connect(configRef.url,configRef.mongodb,configRef.mongoport)

var db=mongoose.connection;
db.once('open',function () {
    console.log("Connection Ready!");
    console.log("Testing ... ")

})
*/

//create schema
var customerSchema=new mongoose.Schema(
    {
        customerId: {
            type: Number,
            unique: true
        },

        name: String,
        email: String,
        phoneNo: String
    }
);

var accountSchema=new mongoose.Schema(
    {
        accountNo:{
            type:Number,
            unique:true
        },
        accountType:String,
        balance:Number,
        customerRef:[{type:mongoose.Schema.Types.ObjectId,ref:'CustomerModel'}]
    }
)

module.exports.CustomerModel=mongoose.model('CustomerModel',customerSchema);
module.exports.AccountModel=mongoose.model('AccountModel',accountSchema);

