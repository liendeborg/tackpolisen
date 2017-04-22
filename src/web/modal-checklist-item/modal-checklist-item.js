const template = require('./modal-checklist-item.html');
require('./modal-checklist-item.scss');

angular.module('app.tackpolisen.web')
    .component('modalChecklistItem', {
        templateUrl: template,
        controller: ModalChecklistItemController,
        bindings: {
            'resolve': '<',
            'close': '&',
            'dismiss': '&'
        }
    });

    ModalChecklistItemController.$inject = ['Checklist', 'ChecklistItem'];    
    function ModalChecklistItemController(Checklist, ChecklistItem) {
        const vm = this;

        vm.$onInit = function () {
            vm.checklistItemForm = {};
            vm.optionsForIsActive = [
                {
                    id: 1,
                    name: 'Active',
                    value: true
                },
                {
                    id: 2,
                    name: 'Not active',
                    value: false
                }
            ];

            if(typeof vm.resolve.checklistItem != "undefined") {
                // checklistItem already exist (Edit mode)
                // Fetch data and make a copy of the object to not accidently update the global checklist object before saving
                vm.checklistItemForm = angular.copy(vm.resolve.checklistItem);
            }
            else {
                // checklistItem doesn't exist yet (Create mode)
                // Build a new object
                vm.checklistItemForm = {
                    // Title: '',
                    // Description: '',
                    // ShortTitle: '',
                    ChecklistGroupID: vm.resolve.checklistGroup.ID
                };
            }
        };

        vm.save = function() {
            // If ID already exist, lets run an update, else create/post a new object
            if('ID' in vm.checklistItemForm) {
                ChecklistItem.update(vm.checklistItemForm);
                vm.close({$value: vm.checklistItemForm});
            }
            // If ID already exist, lets run an update instead of a post
            else {
                ChecklistItem.create(vm.checklistItemForm)
                .then((data) => {
                    vm.checklistItemForm.ID = data.ChecklistItemID;
                    vm.close({$value: vm.checklistItemForm});
                })
                .catch((data) => {
                    console.log("Failed to post checklistItem #"+vm.checklistItemForm.Title+" to database: ");
                    console.log(data);
                })
            }
        };

        vm.cancel = function() {
            vm.dismiss();
        };
        vm.deleteChecklistItem = function() {
            $log.info("Removed checklistItem: #"+ vm.checklistItemForm.ID);
            vm.close({$value: vm.checklistItemForm});
        };
    }
    