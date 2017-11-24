angular.module('app').directive('iframeOnload',OnloadIframe);

function OnloadIframe($compile, $timeout){
  
  var directive = {
    restrict: 'A',
    transclude: false,
    scope: {
      ngSrc: '@'
    },
    link:link
  };
  
  function link(scope, element, attrs){
    scope.$watch(function() {
      return scope.ngSrc;
    }, function(data) {
      if (typeof data !== "undefined") {
        element.addClass('iframe-loading');
      }
    });
    element.on('load', function(){
      $timeout(function(){
         element.removeClass('iframe-loading');  
      });
    })
  }
  
  return directive;
}