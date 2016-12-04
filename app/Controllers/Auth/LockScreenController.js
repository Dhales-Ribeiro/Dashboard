/**
 * Created by dhales on 04/12/16.
 */

application.controller('LockScreenController', function ($scope, $location, $state, $timeout, localStorageService, menssagesService) {
    particlesJS.load('particles-js', './public/js/particles.json', function() {
    });

    var localStorageKey = localStorageService.keys();

    if(localStorageKey == 'userLogged'){
        var lock = localStorageService.get('userLogged');
        if(angular.isObject(lock)){
            $scope.lock = lock;
        }else{
            $scope.lock = {
                name: 'Indefinido',
                email: 'Indefinido'
            };
        }
    }



    if(localStorageKey == 'admLogged'){
        var lock = localStorageService.get('admLogged');
        if(angular.isObject(lock)){
            $scope.lock = lock;
        }else{
            $scope.lock = {
                name: 'Indefinido',
                email: 'Indefinido',
            };
        }
    }

    $scope.enter = function (pass) {
        if(pass == undefined){
            var text = {
                content: "Digite uma senha!",
                action: "Fechar",
                style: "bold md-warn"
            }
            menssagesService.openMenssage(text)
            return false;
        }

        if(lock.password === pass.password){
            $scope.logon = true;
            function redirect() {
                $state.go('adm.dashboard');
            }
            $timeout(redirect, 1000);

        }else{
            var text = {
                content: "Erro, senha invalida.",
                action: "Fechar",
                style: "bold md-warn"
            }
            menssagesService.openMenssage(text)
        }
    }




})