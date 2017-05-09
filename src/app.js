// jQuery must be placed first
//require('jquery');

//require('jquery/dist/jquery.min.js');
var $ = require('jquery');
jQuery = $;
require('slick-carousel/slick/slick.js');

require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');

require('angular-sanitize');
require('angular-animate');
require('angular-loading-bar');

//require('angular-slick-carousel/dist/angular-slick.min.js');
require('angular-slick-carousel');
//require('angular-slick');

// Registration/initilization of modules
angular.module('app.tackpolisen', [
    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.modal',
    'ngSanitize',
    'ngAnimate',
    'angular-loading-bar',
    'slickCarousel',
    require('./api/api.js'),
    require('./web/web.js'),
    require('satellizer')
]);

// Style and fonts
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
//require('notosans-fontface/css/notosans-fontface.css');
require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');

// Routing
//require('./app-config.js');
require('./app-routes.js');
require('./controller.js');
