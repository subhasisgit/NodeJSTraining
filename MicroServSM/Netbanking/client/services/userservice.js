userApp.service('UserService',['$http',function($http)
{
    var userList=function ()
    {
       return $http({
            url:'http://localhost:1000/getCustomers',
            method:'get',
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
        userObject:userList
    }
}])