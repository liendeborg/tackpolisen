const template = require('./card.html');
require('./card.scss');

angular.module('app.tackpolisen.web')
    .component('card', {
        templateUrl: template,
        controller: CardController,
        bindings: {
            'value': '='
        }
    });
    
    function CardController() {
        const vm = this;
        vm.tackpolisen = "#TackPolisen";
    }