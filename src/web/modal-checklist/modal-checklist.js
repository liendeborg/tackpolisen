const template = require('./modal-checklist.html');
require('./modal-checklist.scss');

angular.module('app.tackpolisen.web')
    .component('modalChecklist', {
        templateUrl: template,
        controller: ModalChecklistController,
        bindings: {
            'resolve': '<',
            'close': '&',
            'dismiss': '&'
        }
    });

    ModalChecklistController.$inject = ['Checklist'];    
    function ModalChecklistController(Checklist) {
        const vm = this;
        
        vm.$onInit = function () {
            vm.checklistFormValidation = {
                title: false,
                description: false
            }
            vm.checklistForm = {};
            if(typeof vm.resolve.checklist != "undefined") {
                // checklist already exist (Edit mode)
                // Fetch data and make a copy of the object to not accidently update the global checklist object before saving
                vm.checklistForm = angular.copy(vm.resolve.checklist);
            }
            else {
                // checklist doesn't exist yet (Create mode)
                // Build a new object
                vm.checklistForm = {
                    // Title: '',
                    // Description: '',
                    // ShortTitle: '',
                    ID: vm.resolve.checklist.ID
                };
            }
        }
        vm.save = function() {
            // If ID already exist, lets run an update, else create/post a new object
            if('ID' in vm.checklistForm) {
                Checklist.update(vm.checklistForm);
                vm.close({$value: vm.checklistForm});
            }
            else {
                checklistForm.create(vm.checklistForm)
                .then((data) => {
                    vm.checklistForm.ID = data.ChecklistID;
                    vm.close({$value: vm.checklistForm});
                })
                .catch((data) => {
                    console.log("Failed to post checklist #"+vm.checklistForm.Title+" to database: ");
                    console.log(data);
                })
            }
        };
        vm.cancel = function() {
            vm.dismiss();
        };
    }