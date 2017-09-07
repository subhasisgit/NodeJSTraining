customerApp.controller('CustomerController',['$scope','UserService',function ($scope,UserService) {
    $scope.checked=false;
    $scope.customerData={
        cId:34567,
        name:"Subhasis",
        address:"Blore"
    }

    $scope.changeStatus=function() {


        if($scope.checked) {
            UserService.userObject().then(function (result) {
                //console.log(result);
                $scope.userColl = result.data
                console.log($scope.userColl);
            });
        }
    }



    $scope.save=function()
    {
        console.log($scope.customerData)
    }
}])
