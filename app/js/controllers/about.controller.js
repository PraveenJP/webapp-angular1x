app.controller('about',function($scope,webservice){
    
    $scope.getAboutContent = function(){
        webservice.getContent().then(function(response){
           $scope.aboutContent = response.data[1].about;          
        });
    }
    
})