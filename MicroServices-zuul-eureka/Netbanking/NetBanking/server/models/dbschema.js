/**
 * Created by BALASUBRAMANIAM on 06/09/2017.
 */
var mongoose = require('mongoose');
var configRef=require('./config')
console.log('Module is ready');

//1.Create schema
var customerSchema=new mongoose.Schema(
    {
        customerId:{type:Number,
            unique:true
        },
        name:String,
        email:String,
        phoneNo:String

    });

var accountSchema=new mongoose.Schema({
       accountNo:{
           type:Number,
           unique:true
       },
       accountType:String,
       balance:Number,
       customerRef:[{type:mongoose.Schema.Types.ObjectId,
           ref:'CustomerModel'}]
})

module.exports.CustomerModel=mongoose.model('CustomerModel',customerSchema);
module.exports.AccountModel=mongoose.model('AccountModel',accountSchema);