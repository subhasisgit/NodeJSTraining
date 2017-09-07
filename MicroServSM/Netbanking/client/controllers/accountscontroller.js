accountsApp.constant('type',['Savings','Recurring']);


accountsApp.controller('AccountsController',['$scope','type','UserService','AccountService',function($scope,type,UserService,AccountService)
{
    $scope.accountTypes=type;
    $scope.accountObj={
        accountNo:0,
        accountType:"",
        balance:0,
        customerRef:0
    }
    UserService.userObject().then(function(result) {
        $scope.customerColl=result.data;
    })



    $scope.save=function()
    {
        AccountService.accObject($scope.accountObj).then(function (result) {
            console.log(result);
        })

    }

}])