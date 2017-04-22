const template = require('./wall.html');
require('./wall.scss');

angular.module('app.tackpolisen.web')
    .component('wall', {
        templateUrl: template,
        controller: WallController,
        bindings: {
            'value': '='
        }
    });
    
    //TopnavController.$inject = [];
    
    function WallController() {
        const vm = this;
        vm.tackpolisen = "#TackPolisen";
    }