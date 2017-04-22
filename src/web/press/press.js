const template = require('./press.html');
require('./press.scss');

angular.module('app.tackpolisen.web')
    .component('press', {
        templateUrl: template,
        controller: PressController,
        bindings: {
            'value': '='
        }
    });
    
    PressController.$inject = ['$state'];
    function PressController($state) {
        const vm = this;
        vm.state = $state.current.name;
        console.log(vm.state);
    }