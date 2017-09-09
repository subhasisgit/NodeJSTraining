/**
 * Created by BALASUBRAMANIAM on 06/09/2017.
 */
var mongoose = require('mongoose');
var configRef=require('./config')
mongoose.connect(configRef.url,configRef.mongodb,configRef.mongoport);
var db=mongoose.connection;
db.once('open',function(){
    console.log("Connection ready");
    console.log("testing....");
});