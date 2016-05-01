app.factory('webservice',function($http){
   var obj = {};
   
   obj.countryData = function(){
       return $http.get('../data/countries.json');
   }
   
   obj.getProducts = function(){
       return $http.get('../data/products.json');
   }
   
   obj.getContent = function(){
       return $http.get('../data/content.json');
   }
   
   return obj;
   
});