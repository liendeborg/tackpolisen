const template = require('./about.html');
require('./about.scss');

angular.module('app.tackpolisen.web')
    .component('about', {
        templateUrl: template,
        controller: AboutController,
        bindings: {
            'hasHeading': '<',
            'hasTooltip': '<',
            'checklist': '=',
        }
    });

    //AboutController.$inject = [];    
    function AboutController() {
        const vm = this;

        vm.$onInit = function () {
            console.log("HasHeading: " + vm.hasHeading);
        };
    }