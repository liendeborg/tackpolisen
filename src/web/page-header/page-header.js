const template = require('./page-header.html');
require('./page-header.scss');

angular.module('app.tackpolisen.web')
    .component('pageHeader', {
        templateUrl: template,
        controller: PageHeaderController,
        bindings: {
            'value': '='
        }
    });
    
    PageHeaderController.$inject = ['$state'];
    function PageHeaderController($state) {
        const vm = this;
        vm.state = $state.current.name;
        console.log(vm.state);
    }