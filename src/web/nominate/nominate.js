const template = require('./nominate.html');
require('./nominate.scss');

angular.module('app.tackpolisen.web')
    .component('nominate', {
        templateUrl: template,
        controller: NominateController,
        bindings: {
            'value': '='
        }
    });
    
    NominateController.$inject = ['$state'];
    function NominateController($state) {
        const vm = this;
        vm.state = $state.current.name;
        console.log(vm.state);
    }