require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-drag-scroll');
require('angular-chart.js');
require('angular-loading-bar');

// Registration/initilization of modules
angular.module('app.tackpolisen', [
    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.modal',
    'ng-drag-scroll',
    'chart.js',
    'angular-loading-bar',
    require('./api/api.js'),
    require('./web/web.js')
]);

// Style and fonts
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('notosans-fontface/css/notosans-fontface.css');

// Routing
//require('./app-config.js');
require('./app-routes.js');