app.controller('volunteer',function($scope,$http){
    
   $scope.countryList = function(){
       $http.get('../data/countries.json').then(function(response){          
          $scope.countries = response.data;
       });
   }
   
   $scope.skills = ["Certified Plumber", "Carpentry Experience", "Certified Electrician", "Bardending Experience","Food Hygiene Certificate","First Aid Course","Forklift Drive Certificate","Driver's Licence (Type B)"];
   
   $scope.sendForm = function(vol){
       console.log(vol);
   }
    
});