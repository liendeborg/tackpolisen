const template = require('./modal-comment.html');
require('./modal-comment.scss');

angular.module('app.tackpolisen.web')
    .component('modalComment', {
        templateUrl: template,
        controller: ModalCommentController,
        bindings: {
            'resolve': '<',
            'close': '&',
            'dismiss': '&'
        }
    });

    ModalCommentController.$inject = ['Checklist', 'ChecklistItem'];    
    function ModalCommentController(Checklist, ChecklistItem) {
        const vm = this;

        vm.$onInit = function () {
            // Fetch data and make a copy of the object to not accidently update the global checklist object before saving
            // vm.checklistItemForm.IsActive = {id: 1, name: 'Active', value: true};
            vm.checklistItemForm = angular.copy(vm.resolve.checklistItem);
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
        };

        vm.save = function() {
            // Save form data to API and return updated checklistItem data
            console.log(vm.commentForm);

            // If ID already exist, lets run an update instead of a post
            if('ID' in vm.commentForm) {
                ChecklistComment.update(vm.commentForm);
                vm.close({$value: vm.commentForm});
            }
            else {
                console.log("Post");
                ChecklistItem.create(vm.commentForm)
                .then((data) => {
                    vm.checklistItemForm.ID = response.data.ID;

                    // Close modal and return data
                    vm.close({$value: vm.commentForm});

                    return response.data;
                })
                .catch((data) => {
                    console.log("Couldn't post comment #"+vm.commentForm.ID+" to server: "+ data);
                })
            }
        };

        vm.cancel = function() {
            vm.dismiss();
        };
        vm.deleteComment = function() {
            $log.info("Removed comment: #"+ vm.commentForm.ID);
            vm.close({$value: vm.commentForm});
        };
    }
    