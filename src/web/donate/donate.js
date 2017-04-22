const template = require('./donate.html');
require('./donate.scss');

angular.module('app.tackpolisen.web')
    .component('donate', {
        templateUrl: template,
        controller: DonateController,
        bindings: {
            'value': '='
        }
    });
    
    function DonateController() {
        const vm = this;
        vm.tackpolisen = "#TackPolisen";
        vm.state = $state.current.name;
        console.log(vm.state);
    }