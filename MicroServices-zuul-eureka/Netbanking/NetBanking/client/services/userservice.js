/**
 * Created by BALASUBRAMANIAM on 07/09/2017.
 */
userApp.service('UserService',['$http',function($http)
{

    var userList =function()
    {
       return  $http({
            url:'http://localhost:10000/getCustomers',
            method:'get',
            datatype:'json',
            headers:{
                'Content-Type':'application/json'
            }
        }).then(function(response)
        {
            return response;
        })
    }

     //closure
    return{
        userObject:userList
    }


}]);