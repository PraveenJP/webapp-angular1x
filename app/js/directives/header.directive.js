app.directive("header", function() {
  return {
    restrict: 'A',
    templateUrl: 'templates/header.html',
    scope: true,
    transclude : false    
  };
});