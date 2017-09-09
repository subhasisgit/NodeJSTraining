/**
 * Created by BALASUBRAMANIAM on 07/09/2017.
 */

accountsApp.constant('type',['Savings','Recurring']);
accountsApp.controller('AccountsController',['$scope','type','UserService',
    function($scope,type,UserService)
{
    $scope.accountTypes=type;
    $scope.accountsObj={
        accountNo:0,
        accountType:"",
        balance:0,
        customerRef:0
    }
   UserService.userObject().then(function(result)
   {
       $scope.customerColl=result.data;
   })

    $scope.save=function()
    {
        console.log($scope.accountsObj);
    }


}])