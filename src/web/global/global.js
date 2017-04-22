const template = require('./global.html');
require('./global.scss');

angular.module('app.tackpolisen.web')
    .component('global', {
        templateUrl: template,
        controller: GlobalController,
        bindings: {
            'hasHeading': '<',
            'hasTooltip': '<',
            'checklist': '=',
        }
    });

    //GlobalController.$inject = ['Checklist'];  
    function GlobalController() {
        const vm = this;

        vm.$onInit = function () {

        };
    }