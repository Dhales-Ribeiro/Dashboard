/**
 * Created by dhales on 25/11/16.
 */

application.controller("appController", function ($scope, $mdDialog, $state, AuthenticateService) {

    $scope.exitApp = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
            .title('Deseja mesmo Sair?')
            .textContent('Você deseja mesmo sair do sistema de Inventario?')
            .targetEvent(ev)
            .ok('Sim, Sair!')
            .cancel('Não, foi engano... ');
        $mdDialog.show(confirm).then(function() {
            AuthenticateService.logout();
            $state.go('login')
        }, function() {

        });
    };

});