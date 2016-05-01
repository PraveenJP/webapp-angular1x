app.controller('md6',function($scope,webservice){
   
   $scope.getMd6Content = function(){
       webservice.getContent().then(function(response){
          $scope.md6Content = response.data[2].md6; 
          $scope.md6ContentImg = response.data[2].md6[0].img; 
       });
   }
    
});