const template = require('./support-us.html');
require('./support-us.scss');

angular.module('app.tackpolisen.web')
    .component('supportUs', {
        templateUrl: template,
        controller: SupportUsController,
        bindings: {
            'value': '='
        }
    });
    
    SupportUsController.$inject = ['$state'];
    function SupportUsController($state) {
        const vm = this;
        vm.state = $state.current.name;
        console.log(vm.state);
    }