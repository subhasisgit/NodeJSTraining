/**
 * Created by BALASUBRAMANIAM on 07/09/2017.
 */
customerApp.controller('CustomerController',['$scope','UserService',
    function($scope,UserService)
{

    $scope.checked=false;
     $scope.customerData={
         cId:2465,
         name:"Anoop",
         address:"chennai"

     }

   $scope.changeStatus=function()
   {

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
          console.log($scope.customerData);
      }


}])