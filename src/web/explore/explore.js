const template = require('./explore.html');
require('./explore.scss');

angular.module('app.tackpolisen.web')
    .component('explore', {
        templateUrl: template,
        controller: ExploreController,
        bindings: {
            'value': '='
        }
    });
    
    ExploreController.$inject = ['$state'];  
    function ExploreController($state) {
        const vm = this;
        vm.tackpolisen = "#TackPolisen";
        vm.state = $state.current.name;
        console.log(vm.state);
    }