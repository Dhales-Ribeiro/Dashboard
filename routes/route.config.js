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
        .state('adm.dashboard', {
            url: '/adminDashboard',
            templateUrl: './resources/views/dashboard/index.html',
            controller: 'dashboardController'
        })
        .state('adm.users', {
            url: '/adminUsers',
            templateUrl: './resources/views/users/index.html',
            controller: 'userController'
        })
        .state('adm.usersRegister', {
            url: '/adminUsers/register',
            templateUrl: './resources/views/users/form.html',
            controller: 'userController'
        })
        .state('adm.profiles', {
            url: '/adminProfiles',
            templateUrl: './resources/views/profiles/index.html',
            controller: 'rolesController'
        })
        .state('adm.profilesRegister', {
            url: '/adminProfiles/register',
            templateUrl: './resources/views/profiles/create.html',
            controller: 'rolesController'
        })
        .state('adm.profilesEdit', {
            url: '/adminProfiles/edit/:id',
            templateUrl: './resources/views/profiles/edit.html',
            controller: 'rolesController'
        })


        // States For Access

        .state('access', {
            url: '/access',
            template: '<div ui-view></div>'
        })
        .state('access.admlockscreen', {
            url: '/admlockscreen ',
            templateUrl: './resources/views/auth/adm.lockscreen.html',
            controller: 'LockScreenController'
        })



    $urlRouterProvider.otherwise('login');
});