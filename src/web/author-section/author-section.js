const template = require('./author-section.html');
require('./author-section.scss');

angular.module('app.tackpolisen.web')
    .component('authorSection', {
        templateUrl: template,
        controller: AuthorSectionController,
        bindings: {
            'authors': '=',
        }
    });

    AuthorSectionController.$inject = [];    
    function AuthorSectionController() {
        const vm = this;

        vm.$onInit = function () {
            console.log("funkar");
        };
    }