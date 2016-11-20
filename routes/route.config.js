/**
 * Created by dhales on 20/11/16.
 */

angular.module("dashboard").config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: './resources/views/auth/login.html'
        });

    $urlRouterProvider.otherwise('/login');
});