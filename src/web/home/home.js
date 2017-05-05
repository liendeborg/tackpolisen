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
            vm.authors = [
                {
                    name: 'Robin Liendeborg',
                    jobTitle: 'Grundare och ordförande i <b>#TackPolisen</b>',
                    description: 'Robin är en Social Entreprenör och samhällsaktivist baserad i Linköping. Till vardags arbetar han med UX design och tjänstedesign.',
                    imageClass: 'robin'
                }
            ];

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
        }
    }