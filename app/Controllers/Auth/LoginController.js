/**
 * Created by dhales on 20/11/16.
 */
application.controller('LoginController', function ($scope, $location, AuthenticateService) {
    $scope.login = function (user) {
        AuthenticateService.authenticate(user);
    }
});