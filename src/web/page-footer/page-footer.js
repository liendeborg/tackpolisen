const template = require('./page-footer.html');
require('./page-footer.scss');

angular.module('app.tackpolisen.web')
    .component('pageFooter', {
        templateUrl: template,
        controller: PageFooterController,
        bindings: {
            'value': '='
        }
    });
    
    PageFooterController.$inject = [];
    function PageFooterController() {
        const vm = this;
        vm.test = "Footer page";
    }