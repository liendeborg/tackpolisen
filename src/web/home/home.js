const template = require('./home.html');
require('./home.scss');
require('./home.scss');

angular.module('app.tackpolisen.web')
    .component('home', {
        templateUrl: template,
        controller: HomeController,
        bindings: {
            'hasHeading': '<',
            'hasTooltip': '<',
            'checklist': '=',
        }
    });

    HomeController.$inject = [];  
    function HomeController() {
        const vm = this;

        vm.$onInit = function () {
            vm.introSectionIsOpen = false;

            // number counter
            // $('.count').each(function () {
            //     $(this).prop('Counter',0).animate({
            //         Counter: $(this).text()
            //     }, {
            //         duration: 4000,
            //         easing: 'swing',
            //         step: function (now) {
            //             $(this).text(Math.ceil(now));
            //         }
            //     });
            // });
        };

        vm.toggleIntroSection = function() {
            vm.introSectionIsOpen = !vm.introSectionIsOpen;
            console.log(vm.introSectionIsOpen);
        }
    }