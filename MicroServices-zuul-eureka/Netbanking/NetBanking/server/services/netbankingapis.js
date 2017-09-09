/**
 * Created by BALASUBRAMANIAM on 06/09/2017.
 */
var express = require("express");
var config=require('./config');
var getCustomerListRef= require('../models/getCustomerList');
var app = express();

app.get("/",function(request,response)
{
    response.send("Express is ready!");
})
app.get("/getCustomers",function(request,response)
{

    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Methods','GET', 'POST');
    response.setHeader('Access-Control-Allow-Headers','X-Requested-With, Content-Type');
    response.setHeader('Access-Control-Allow-Credentials',true);
    getCustomerListRef.getList().then(function(data)
    {
        response.send(data);
    })
})

app.set('port',config.apiport);
app.listen(app.get('port'),function()
{
    console.log("server started at port number",app.get('port'));
});