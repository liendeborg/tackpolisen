// jQuery must be placed first
// http://stackoverflow.com/questions/28969861/managing-jquery-plugin-dependency-in-webpack
var $ = require('jquery');
jQuery = $;

require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-sanitize');
require('angular-animate');
require('angular-loading-bar');

// Slick (Slideshow)
require('slick-carousel/slick/slick.js');
require('angular-slick-carousel');

// Videogular (Videoplayer)   v1.4+
require('videogular/videogular.js');
require('videogular-controls/vg-controls.js');
require('videogular-overlay-play/vg-overlay-play.js');
require('videogular-poster/vg-poster.js');
require('videogular-buffering/vg-buffering.js');
// Videogular (Videoplayer) v2.0+
// require('videogular/dist/videogular/videogular.js');
// require('videogular/dist/controls/vg-controls.js');
// require('videogular/dist/overlay-play/vg-overlay-play.js');
// require('videogular/dist/poster/vg-poster.js');
// require('videogular/dist/buffering/vg-buffering.js');


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
])
.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
     //cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>'
}])
// .config(function($sceDelegateProvider) {
//     $sceDelegateProvider.resourceUrlWhitelist([
//         // Instructions: 
//         // http://stackoverflow.com/questions/23980911/using-sce-in-angular
//         // http://stackoverflow.com/questions/23958779/iframe-not-working-in-angularjs-1-3-0/23967773?noredirect=1#answer-23967773
//         // Allow same origin resource loads.
//         'self',                     // trust all resources from the same origin
//         '*://www.youtube.com/**',   // trust all resources from `www.youtube.com`
//         '*://www.facebook.com/**',
//         '*://www.twitter.com/**',
//         '*://static.videogular.com/**',
//         '*://www.videogular.com/**',
//         'http://static.videogular.com/assets/videos/videogular.mp4',
//         'http://static.videogular.com/assets/videos/videogular.webm',
//         'http://static.videogular.com/assets/videos/videogular.ogg'
//     ])
// });
.config(function($sceDelegateProvider) {    
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://**',
        'https://**',
        '*://**',
        '*://www.youtube.com/**',
        '*://www.instagram.com/**',
        '*://www.facebook.com/**',
        '*://www.vimeo.com/**',
        'http://static.videogular.com/assets/videos/**'
    ]);

    $sceDelegateProvider.resourceUrlBlacklist([
        
    ]);
})

// Style and fonts
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');
require('slick-carousel/slick/slick.css');

//require('videogular/dist/themes/default/videogular.css'); // v2+
require('videogular-themes-default/fonts/videogular.woff');
require('videogular-themes-default/fonts/videogular.ttf');
require('videogular-themes-default/fonts/videogular.svg');
require('videogular-themes-default/fonts/videogular.eot');
require('videogular-themes-default/fonts/videogular.dev.svg');
require('videogular-themes-default/videogular.css');

require('angular-loading-bar/build/loading-bar.css');
//require('/videogular.scss');


// Routing
//require('./app-config.js');
require('./app-routes.js');
require('./controller.js');
