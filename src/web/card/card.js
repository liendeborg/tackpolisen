const template = require('./card.html');
require('./card.scss');

angular.module('app.tackpolisen.web')
    .component('card', {
        templateUrl: template,
        controller: CardController,
        bindings: {
            'content': '='
        }
    });
    
    CardController.$inject = [];    
    function CardController() {
        const vm = this;

        vm.$onInit = function () {


        };

        vm.getFacebookLink = function( handle ) {
            var profile = handle.replace(/[@]/g, ""); 
            return 'https://www.facebook.com/'+profile;
        }
        vm.getTwitterLink = function( handle ) {
            var profile = handle.replace(/[@]/g, "");
            return 'https://twitter.com/'+profile;
        }
        vm.getInstagramLink = function( handle ) {
            var profile = handle.replace(/[@]/g, "");
            return 'https://www.instagram.com/'+profile;
        }
    }