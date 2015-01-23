angular.module('starter.directives', [])

.directive('dragBack', function($ionicGesture, $state) {
  return {
    restrict : 'A',
    link : function(scope, elem, attr) {
      
      $ionicGesture.on('swipe', function(event) {
      
        console.log('Got swiped!');
        event.preventDefault();
        window.history.back();
        
      }, elem);
      
    }
  }  
});