var configRef=require('./connectionHelper')
var customentModelRef=require('./dbschema').CustomerModel;

module.exports.getList=function ()
{
    dataResponse=customentModelRef.find({}).exec(function (err,result)
    {
            return result;
    })
    return dataResponse;
}

//testing
/*
response=module.exports.getList();
response.then(function(res)
{
    console.log(res);
})
*/

