angular.module('app.tackpolisen.api')
  .factory('Facebook', Facebook);

Facebook.$inject = [ '$http' ];

function Facebook($http) {
  const apiUrl = angular.isDefined(window.__env) ? window.__env.apiUrl || DEV_API : DEV_API;

    function get(id) {
        return $http({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: apiUrl + '/checklistitem/checklist/' + id,
            withCredentials: true,
        }).then(response => response.data);
    }
    function create(checklistItem) {
        return $http({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: { 
                ChecklistGroupID: checklistItem.ChecklistGroupID,
                Title: checklistItem.Title,
                ExceptionHandling: checklistItem.ExceptionHandling,
                Description: checklistItem.Description,
                IsActive: checklistItem.IsActive
            },
            url: apiUrl + '/checklistItem',
            withCredentials: true
        }).then(response => response.data);
    }
    function update(checklistItem) {
        return $http({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: { 
                ChecklistGroupID: checklistItem.ChecklistGroupID,
                Title: checklistItem.Title,
                ExceptionHandling: checklistItem.ExceptionHandling,
                Description: checklistItem.Description,
                IsActive: checklistItem.IsActive,
                ID: checklistItem.ID
            },
            url: apiUrl + '/checklistItem/' + checklistItem.ID,
            withCredentials: true,
        }).then(response => response.data);
    }

    return {
        get,
        create,
        update
    };
}