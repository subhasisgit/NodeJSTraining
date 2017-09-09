//var mongoose=require('mongoose');
var configRef=require('./config')
var customentModelRef=require('./dbschema').CustomerModel;
var accountModelRef=require('./dbschema').AccountModel;
var connRef=require('./connectionHelper')

/*mongoose.connect(configRef.url,configRef.mongodb,configRef.mongoport)

var db=mongoose.connection;
db.once('open',function () {
    console.log("Connection Ready!");
    console.log("Testing ... ")
}
);
*/
module.exports.addData=function (obj) {
    Id=parseInt(obj.customerRef);
    customentModelRef.findOne({customerId:Id},function (err,res) {
        console.log(res);
        obj = new accountModelRef(
            {
                accountNo:obj.accountNo,
                accountType:obj.accountType,
                balance:obj.balance,
                customerRef:res
            }
        )
        obj.save(function (err,success) {
            if (!err)
            {
                console.log("Object saved")
            }
            else
            {
                console.log("Error in saving data")
            }
        })
    })

}


