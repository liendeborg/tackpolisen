const template = require('./user.html');
require('./user.scss');

angular.module('app.tackpolisen.web')
    .component('user', {
        templateUrl: template,
        controller: UserController,
        bindings: {
            'value': '='
        }
    });
    
    UserController.$inject = ['$state'];
    function UserController($state) {
        const vm = this;
        vm.state = $state.current.name;
        console.log(vm.state);
    }