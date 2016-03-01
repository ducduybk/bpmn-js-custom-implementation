(function() {
    "use strict";
    angular
      .module('custom-bpmnjs')
      .controller('ModelerController', ModelerController);

    ModelerController.$inject = ['$rootScope', 'modelerFactory', '$translate', '$state'];

    function ModelerController($rootScope, modelerFactory, $translate, $state) {
      var vm = this;
      vm.provider = modelerFactory.getCurrentProviderName();
      vm.providers = modelerFactory.getProviders();
      vm.changePanelProvider = function(newProvider){
        modelerFactory.changeProvider(newProvider);
        vm.provider = modelerFactory.getCurrentProviderName();
      };
      vm.save = function() {
        modelerFactory.save();
      };
      vm.saveAndPreview = function() {
        vm.save();
        $state.go('viewer');
      };
    }
  }
)();