/**
 * Created by dhales on 20/11/16.
 */

application.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            views: {
                '': {
                    templateUrl: './resources/views/auth/login.html',
                    controller: 'LoginController'
                }
            }
        })
        .state('app', {
            url: '/app',
            views: {
                '': {
                    templateUrl: './resources/views/layout/app.layout.html'
                },
                'content': {
                    templateUrl: './resources/views/partials/content.html',
                    controller: 'appController'
                },
                'leftMenu': {
                    templateUrl: './resources/views/partials/left.menu.html',
                    controller: 'LeftMenuController'
                },
                'rightMenu': {
                    template: 'menu-right'
                }
            }
        })
        .state('app.statistics', {
            url: '/statistics',
            templateUrl: './resources/views/statistics/statistics.html'
        })


    $urlRouterProvider.otherwise('login');
});