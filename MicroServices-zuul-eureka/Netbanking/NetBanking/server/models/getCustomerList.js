/**
 * Created by BALASUBRAMANIAM on 06/09/2017.
 */
var connRef=require('./connectionHelper')
var customerModelRef=require('./dbschema').CustomerModel;

module.exports.getList=function()
{

  dataResponse= customerModelRef.find({}).exec(function(err,result) {
          return result;
      }
   )
   return dataResponse;
}

//testing

/*
 response = module.exports.getList();
 response.then(function(res)
 {
 console.log(res);
 });
*/
