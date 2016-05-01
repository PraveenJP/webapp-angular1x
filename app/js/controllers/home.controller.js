app.controller('home',function($scope,webservice){
    
    $scope.getHomecontent = function(){
        webservice.getContent().then(function(response){
            $scope.homeContent = response.data[0].home; 
        });
    }
    
});