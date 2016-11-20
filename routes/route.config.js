/**
 * Created by dhales on 20/11/16.
 */

application.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: './resources/views/auth/login.html',
            controller: 'LoginController'
        });

    $urlRouterProvider.otherwise('/login');
});