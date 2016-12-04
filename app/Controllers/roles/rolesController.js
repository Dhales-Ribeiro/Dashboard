/**
 * Created by dhales on 02/12/16.
 */

application.controller('rolesController', function ($scope, $state, roleService, menssagesService, $mdDialog) {


    if($state.current.url == '/adminProfiles'){
        roleService.getAllRole().then(function (res) {
            if(res.length >= 1){
                var data = res;
                $scope.desserts = data;
            }
        })
    }
    //console.log(roleService.getAllRole());


    $scope.register = function (role) {

        roleService.getRole(role.role).then(function (res) {
            if(res.length >= 1){
                $mdDialog.show(
                    $mdDialog.alert()
                        .clickOutsideToClose(true)
                        .title('Ops...')
                        .textContent('Parece que esse perfil já está cadastrado.')
                        .ok('ok!')
                );

                return false
            }

            roleService.registerRole(role).then(function (res) {
                $state.go('adm.profiles');
                var text = {
                    content: "Perfil criado com Sucesso",
                    action: "Fechar",
                    style: "bold md-warn"
                }
                menssagesService.openMenssage(text)

            }, function (error) {
                console.log(error);
            })
        })
    }





    $scope.selected = [];
    $scope.limitOptions = [5, 10, 15];

    $scope.options = {
        rowSelection: false,
        multiSelect: true,
        autoSelect: true,
        decapitate: false,
        largeEditDialog: false,
        boundaryLinks: true,
        limitSelect: true,
        pageSelect: true
    };

    $scope.query = {
        order: 'id',
        limit: 5,
        page: 1
    };


    $scope.toggleLimitOptions = function () {
        $scope.limitOptions = $scope.limitOptions ? undefined : [5, 10, 15];
    };

    $scope.getTypes = function () {
        return ['Editar', 'Excluir'];
    };


    $scope.logItem = function (item) {
        console.log(item.name, 'was selected');
    };

    $scope.logOrder = function (order) {
        console.log('order: ', order);
    };

    $scope.logPagination = function (page, limit) {
        console.log('page: ', page);
        console.log('limit: ', limit);
    }


})