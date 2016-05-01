app.controller('volunteer',function($scope,$http,webservice,$timeout){
   
   $scope.success = false;
    
   $scope.countryList = function(){
       webservice.countryData().then(function(response){          
          $scope.countries = response.data;
       });
   }
   
   $scope.skills = ["Certified Plumber", "Carpentry Experience", "Certified Electrician", "Bardending Experience","Food Hygiene Certificate","First Aid Course","Forklift Drive Certificate","Driver's Licence (Type B)"];
   
   $scope.sendForm = function(vol){
       console.log(vol);
       $scope.success = true;
       $timeout(function(){
          $scope.success = false;
       },5000);
   }
    
});