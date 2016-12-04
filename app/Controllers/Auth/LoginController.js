/**
 * Created by dhales on 20/11/16.
 */
application.controller('LoginController', function ($scope, $location, $state, AuthenticateService, localStorageService, menssagesService) {


    if($state.current.url == '/login'){
        particlesJS.load('particles-js', './public/js/particles.json', function() {
        });
    }

    AuthenticateService.clear();

    $scope.login = function (user) {
        AuthenticateService.authenticate(user).then(function (res) {
            if(res.length == 1){
                $state.go('app.statistics');
                var data = res[0];
                data._embedded;
                localStorageService.set('userLogged', data);
            }else{
                var text = {
                    content: "Erro, login ou senha invalidos",
                    action: "Fechar",
                    style: "bold md-warn"
                }
                menssagesService.openMenssage(text)
            }

        }, function (error) {
            console.log(error)
        })
    }

    $scope.adminLogin = function (user) {
        AuthenticateService.authenticate(user).then(function (res) {
            if(res.length == 1 && res[0]['role_id'] == 1){
                var data = res[0];
                data._embedded;
                localStorageService.set('admLogged', data);
                $state.go('adm.dashboard');
            }else{
                var text = {
                    content: "Erro, login ou senha invalidos",
                    action: "Fechar",
                    style: "bold md-warn"
                }
                menssagesService.openMenssage(text)
            }

        }, function (error) {
            console.log(error)
        })
    }
});