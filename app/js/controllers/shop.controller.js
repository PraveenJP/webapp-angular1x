app.controller('shop',function($scope,webservice){
    
     $scope.cartCount = 0;
    
    $scope.getProductlist = function(){
        webservice.getProducts().then(function(response){
            $scope.products = response.data;
        });   
    }
    
    $scope.addtoCart = function(value){        
        if(value == undefined){
            $scope.cartCount = 0;    
        }else{
            $scope.cartCount += 1;
        }
        console.log($scope.cartCount);
    }
    
});