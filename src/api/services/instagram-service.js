angular.module('app.tackpolisen.api')
  .factory('Instagram', Instagram);

Instagram.$inject = [ '$http' ];

function Instagram($http) {
  const apiUrl = angular.isDefined(window.__env) ? window.__env.apiUrl || DEV_API : DEV_API;
  
  
  function get(id) {
      return $http({
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        url: apiUrl + '/checklist/' + id,
        withCredentials: true,
    }).then(response => response.data);
  }
  function post() {
      return $http({
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          url: apiUrl + '/checklistItem',
          withCredentials: true,
      }).then(response => response.data);
  }
  function update(id) {
      return $http({
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          url: apiUrl + '/checklistItem/' + id,
          withCredentials: true,
      }).then(response => response.data);
  }

  return {
    get,
    post,
    update
  };
}


