const template = require('./modal-checklist-group.html');
require('./modal-checklist-group.scss');

angular.module('app.tackpolisen.web')
    .component('modalChecklistGroup', {
        templateUrl: template,
        controller: ModalChecklistGroupController,
        bindings: {
            'resolve': '<',
            'close': '&',
            'dismiss': '&'
        }
    });

    ModalChecklistGroupController.$inject = ['Checklist', 'ChecklistGroup'];    
    function ModalChecklistGroupController(Checklist, ChecklistGroup) {
        const vm = this;

        vm.$onInit = function () {
            vm.checklistGroupForm = {};
            if(typeof vm.resolve.checklistGroup != "undefined") {
                // checklistGroup already exist (Edit mode)
                // Fetch data and make a copy of the object to not accidently update the global checklist object before saving
                vm.checklistGroupForm = angular.copy(vm.resolve.checklistGroup);
            }
            else {
                // checklistGroup doesn't exist yet (Create mode)
                // Build a new object
                vm.checklistGroupForm = {
                    // Title: '',
                    // Description: '',
                    // ShortTitle: '',
                    ChecklistID: vm.resolve.checklist.ID
                };
            }
        }
        vm.save = function() {
            // If ID already exist, lets run an update, else create/post a new object
            if('ID' in vm.checklistGroupForm) {
                ChecklistGroup.update(vm.checklistGroupForm);
                vm.close({$value: vm.checklistGroupForm});
            }
            else {
                ChecklistGroup.create(vm.checklistGroupForm)
                .then((data) => {
                    vm.checklistGroupForm.ID = data.ChecklistGroupID;
                    vm.close({$value: vm.checklistGroupForm});
                })
                .catch((data) => {
                    console.log("Failed to post checklistGroup #"+vm.checklistGroupForm.Title+" to database: ");
                    console.log(data);
                })
            }
        };
        vm.cancel = function() {
            vm.dismiss();
        };
    }

