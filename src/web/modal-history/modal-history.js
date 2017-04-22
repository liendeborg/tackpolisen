const template = require('./modal-history.html');
require('./modal-history.scss');

angular.module('app.tackpolisen.web')
    .component('modalHistory', {
        templateUrl: template,
        controller: ModalHistoryController,
        bindings: {
            'resolve': '<',
            'close': '&',
            'dismiss': '&'
        }
    });

    ModalHistoryController.$inject = ['Checklist'];    
    function ModalHistoryController(Checklist) {
        const vm = this;
        
        vm.$onInit = function () {
            // Fetch data
            vm.checklistForm = vm.resolve.checklist;
            vm.checklistFormValidation = {
                title: false,
                description: false
            }
        }
        vm.save = function() {
            // Save form data to API and return updated checklistItem data
            Checklist.post(vm.checklistForm)
            .then((data) => {
                // Receive ID from header response
                vm.checklistForm.ID = response.data.ID;
                // Close modal and return data
                vm.close({$value: vm.checklistForm});
                return response.data;
            })
            .catch((data) => {
                console.log("Couldn't post checklistGroup #"+vm.checklistForm.Title+" to server: "+ data);
            })
        };
        vm.cancel = function() {
            vm.dismiss();
        };
    }