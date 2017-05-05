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
            vm.authors = [
                {
                    name: 'Robin Liendeborg',
                    jobTitle: 'Grundare och ordförande i <b>#TackPolisen</b>',
                    description: 'Robin är en Social Entreprenör och samhällsaktivist baserad i Linköping. Till vardags arbetar han med UX design och tjänstedesign. I TackPolisen arbetar han med verksamhetsutveckling från ett helikopterperspektiv.',
                    imageClass: 'robin'
                },
                {
                    name: 'Oskar Eriksson',
                    jobTitle: 'Styrelseledamot',
                    description: 'Oskar arbetar som Software Engineer på Infor och i TackPolisen är han teknikansvarig. Baserad i Linköping',
                    imageClass: 'oskar'
                },
                {
                    name: 'Ekonomen',
                    jobTitle: 'Styrelseledamot',
                    description: 'Ekonomen är någon med ekonomisk bakgrund som kan sköta ekonomin för stiftelsen.',
                    imageClass: 'ekonomen'
                },
                {
                    name: 'Experten',
                    jobTitle: 'Styrelseledamot',
                    description: 'Experten är någon med en spännande bakgrund som kan sköta särskilda arbetsområden för stiftelsen.',
                    imageClass: 'experten'
                },
                {
                    name: 'Polisen',
                    jobTitle: 'Styrelseledamot',
                    description: 'Polisrepresentanten är någon som jobbar inom poliskåren och som bidrar med polisens perspektiv i verksamheten.',
                    imageClass: 'polisen'
                },
                {
                    name: 'Polisen',
                    jobTitle: 'Styrelseledamot',
                    description: 'Polisrepresentanten är någon som jobbar inom poliskåren och som bidrar med polisens perspektiv i verksamheten.',
                    imageClass: 'polisen'
                }
            ];
        };
    }