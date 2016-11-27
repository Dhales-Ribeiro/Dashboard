/**
 * Created by dhales on 24/11/16.
 */
application.controller('LeftMenuController', function ($scope, $mdSidenav, localStorageService) {
    $scope.showMobileMainHeader = true;
    $scope.openSideNavPanel = function() {
        $mdSidenav('left').open();
    };
    $scope.closeSideNavPanel = function() {
        $mdSidenav('left').close();
    };
    $scope.setActive = function(iten) {
        $scope.activeMenu = iten;
    }

    var user = localStorageService.get('userLogged');

    if(angular.isObject(user)){
        $scope.user = user;
    }else{
        $scope.user = {
            name: 'Indefinido',
            email: 'Indefinido'
        };

    }






})