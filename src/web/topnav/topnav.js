const template = require('./topnav.html');
require('./topnav.scss');

angular.module('app.tackpolisen.web')
    .component('topnav', {
        templateUrl: template,
        controller: TopnavController,
        bindings: {
            'value': '='
        }
    });
    
    TopnavController.$inject = ['$state'];
    function TopnavController($state) {
        const vm = this;
        vm.state = $state.current.name;
    }