/**
 * Created by dhales on 24/11/16.
 */
application.controller('LeftMenuController', function ($scope, $mdSidenav, $state, localStorageService, Fullscreen) {

    if($state.current.url == '/adminDashboard'){
        $scope.activeMenu = "start";
    }

    $scope.goFullscreen = function () {

        if (Fullscreen.isEnabled())
            Fullscreen.cancel();
        else
            Fullscreen.all();
    }

    $scope.subConfig = false;
    $scope.aneelConfig = false;
    $scope.isfixMenu = false;

    $scope.fixMenu = function () {
        $scope.isfixMenu = { true: false, false:true}[$scope.isfixMenu]
    }

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

    var localStorageKey = localStorageService.keys()

    if(localStorageKey == 'userLogged'){
        var user = localStorageService.get('userLogged');
        if(angular.isObject(user)){
            $scope.user = user;
        }else{
            $scope.user = {
                name: 'Indefinido',
                email: 'Indefinido'
            };
        }
    }
    if(localStorageKey == 'admLogged'){
        var user = localStorageService.get('admLogged');
        if(angular.isObject(user)){
            $scope.user = user;
        }else{
            $scope.user = {
                name: 'Indefinido',
                email: 'Indefinido'
            };
        }
    }
})