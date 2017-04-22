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
    
    //TopnavController.$inject = [];
    
    function TopnavController() {
        const vm = this;
        vm.tackpolisen = "#TackPolisen";
    }