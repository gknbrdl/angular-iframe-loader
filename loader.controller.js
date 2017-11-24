angular.module('app').controller('MainController',MainController);

function MainController($sce){
  var vm = this;
  vm.init = init;

  function init(){
  	  vm.iframeLink = $sce.trustAsResourceUrl('http://contents.good-game-network.com/leaflet/ggpokersite?lang=tr&btag1=betorder');
  }
}