/**
 * Created by BALASUBRAMANIAM on 06/09/2017.
 */
var connRef=require('./connectionHelper')
var customerModelRef=require('./dbschema').CustomerModel;

var obj = new customerModelRef(
    {
        customerId:237233,
        name:'Madhu',
        email:'madhu@gmail.com',
        phoneNo:34625234
    }
)

obj.save(function(err,success)
{
    if(!err)
    {
        console.log("Object Saved!!!");
    }
})
