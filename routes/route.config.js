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


        // States For Administrator

        .state('admLogin', {
            url: '/adminLogin',
            views: {
                '': {
                    templateUrl: './resources/views/auth/adm.login.html',
                    controller: 'LoginController'
                }
            }
        })

        .state('adm', {
            url: '/adm',
            views: {
                '': {
                    templateUrl: './resources/views/layout/adm.layout.html'
                },
                'content': {
                    templateUrl: './resources/views/partials/adm.content.html',
                    controller: 'appController'
                },
                'leftMenu': {
                    templateUrl: './resources/views/partials/admLeft.menu.html',
                    controller: 'LeftMenuController'
                },
                'rightMenu': {
                    template: 'menu-right'
                }
            }
        })
        .state('adm.statistics', {
            url: '/adminStatistics',
            templateUrl: './resources/views/statistics/statistics.html'
        })
        .state('adm.users', {
            url: '/adminUsers',
            templateUrl: './resources/views/users/index.html',
            controller: 'userControler'
        })


    $urlRouterProvider.otherwise('login');
});