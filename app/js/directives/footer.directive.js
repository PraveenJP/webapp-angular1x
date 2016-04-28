app.directive("footer", function() {
  return {
    restrict: 'A',
    templateUrl: 'templates/footer.html',
    scope: true,
    transclude : false    
  };
});