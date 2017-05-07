angular.module('app.tackpolisen.api')
  .factory('Posts', Posts);

Posts.$inject = [ '$http' ];
function Posts($http) {
  const apiUrl = angular.isDefined(window.__env) ? window.__env.apiUrl || DEV_API : DEV_API;

    function getAll() {
        return $http({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: apiUrl + '/posts',
            withCredentials: false,
        }).then(response => response.data);
    }

    return {
        getAll
    };
}
