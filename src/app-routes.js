var appTemplate = require('./app.html');

angular.module('app.tackpolisen')
  .config(AppRouter);

AppRouter.$inject = [ '$stateProvider', '$urlRouterProvider', '$authProvider' ];
function AppRouter($stateProvider, $urlRouterProvider, $authProvider) {

  $urlRouterProvider.otherwise('/');
  $stateProvider
    // .state('app', {
    //   abstract: true,
    // })
    .state('app', {
      url: '/',
      views: {
        'topnav@': {
          template: '<topnav></topnav>',
        },
        'main@': {
          template: '<home></home>',
        }
      }
    })
    .state('app.user', {
      url: 'user',
      views: {
        'topnav@': {
          template: '<topnav></topnav>',
        },
        'main@': {
          template: '<user></user>',
        }
      }
    })
    .state('app.explore', {
      url: 'explore',
      views: {
        'topnav@': {
          template: '<topnav></topnav>',
        },
        'main@': {
          template: '<explore></explore>',
        }
      }
    })
    .state('app.about', {
      url: 'about',
      views: {
        'topnav@': {
          template: '<topnav></topnav>',
        },
        'main@': {
          template: '<about></about>',
        }
      }
    })
    .state('app.nominate', {
      url: 'nominate',
      views: {
        'topnav@': {
          template: '<topnav></topnav>',
        },
        'main@': {
          template: '<nominate></nominate>',
        }
      }
    })
    .state('app.donate', {
      url: 'donate',
      views: {
        'topnav@': {
          template: '<topnav></topnav>',
        },
        'main@': {
          template: '<donate></donate>',
        }
      }
    })
    .state('app.support', {
      url: 'support',
      views: {
        'topnav@': {
          template: '<topnav></topnav>',
        },
        'main@': {
          template: '<support-us></support-us>',
        }
      }
    })
    .state('app.press', {
      url: 'press',
      views: {
        'topnav@': {
          template: '<topnav></topnav>',
        },
        'main@': {
          template: '<press></press>',
        }
      }
    });

    $authProvider.facebook({
      clientId: '995896113844119',
      url: 'https://api.oskarer.se/v1/auth/facebook',
      redirectUri: 'http://localhost:9703/',
      scope: ['public_profile', 'email', 'user_posts'],
    });

}
