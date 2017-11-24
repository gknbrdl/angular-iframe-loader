angular.module('app').controller('MainController',MainController);

function MainController($sce){
  var vm = this;
  vm.init = init;

  function init(){
  	  vm.iframeLink = $sce.trustAsResourceUrl('https://gaming.youtube.com/');
  }
}