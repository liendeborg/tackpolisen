const template = require('./wall.html');
require('./wall.scss');

angular.module('app.tackpolisen.web')
    .component('wall', {
        templateUrl: template,
        controller: WallController,
        bindings: {
            'value': '='
        }
    });
    
    WallController.$inject = ['Posts'];
    function WallController(Posts) {
        const vm = this;
        vm.posts = [];

        vm.$onInit = function() {

            Posts.getAll()
            .then((data) => {
                vm.posts = data;
                console.log("Fetched all posts");
            })
            .catch((data) => {
                console.log("Couldn't fetch any posts");
            })

        }
    }