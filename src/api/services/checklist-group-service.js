angular.module('app.tackpolisen.api')
  .factory('ChecklistGroup', ChecklistGroup);

ChecklistGroup.$inject = [ '$http' ];

function ChecklistGroup($http) {
  const apiUrl = angular.isDefined(window.__env) ? window.__env.apiUrl || DEV_API : DEV_API;

    // Get all checklist groups in a checklist, based on checklist ID
    function getAll(id) {
        return $http({
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },
            url: apiUrl + '/checklistgroup/checklist/' + id + "?groupId=1",
            withCredentials: true,
        }).then(response => response.data);
    }

    // Get a single checklist group based on ID
    function get(id) {
        return $http({
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: apiUrl + '/checklistgroup/' + id,
            withCredentials: true,
        }).then(response => response.data);
    }
    function create(checklistGroup) {
        return $http({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: { 
                Title: checklistGroup.Title,
                ShortTitle: checklistGroup.ShortTitle,
                Description: checklistGroup.Description,
                ChecklistID: checklistGroup.ChecklistID
            },
            url: apiUrl + '/checklistgroup/',
            withCredentials: true
        }).then(response => response.data);
    }
    function update(checklistGroup) {
        return $http({
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: { 
                Title: checklistGroup.Title,
                ShortTitle: checklistGroup.ShortTitle,
                Description: checklistGroup.Description,
                ChecklistID: checklistGroup.ChecklistID,
                ID: checklistGroup.ID
            },
            url: apiUrl + '/checklistgroup/' + checklistGroup.ID,
            withCredentials: true
        }).then(response => response.data);
    }

    return {
        getAll,
        create,
        update
    };
}