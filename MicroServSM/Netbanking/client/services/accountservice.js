accountsApp.service('AccountService',['$http',function($http)
{
    var createAccount=function (obj)
    {
        return $http({
            url:'http://localhost:1000/createAccount',
            method:'post',
            params:obj,
            dataType:'json',
            headers:{
                'Content-Type':'application/json'
            }
        }).then(function (response) {
            return response;
        })
    }

    //closure for a singleton object
    return{
        accObject:createAccount
    }
}])