app.controller('contact',function($scope,$timeout){
    
   $scope.contactsForm = function(contact){
       console.log(contact);
       $scope.contactSuccess = true;
       $timeout(function(){
           $scope.contactSuccess = false;
       },5000);
   }
   
});