var express = require("express");
var config=require('./config')
var app = express();

app.get("/",function (request,response) {
    response.send("Express is ready");
})

app.set('port',config.apiport)
app.listen(app.get('port'),function () {
    console.log("server stsrted on port",app.get('port'));
})