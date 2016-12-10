/**
 * Created by dhales on 02/12/16.
 */

application.controller('rolesController', function ($scope, $state, $mdDialog, $stateParams, roleService, menssagesService, $mdDialog) {

    // verificando URL
    var myLocal = $state.current.url;

    // verificando o nome da URL
    $scope.myLocal = $state.current.name;

    if(myLocal == '/adminProfiles'){
        atualizaRole()
    }

    // função para atualizar os dados da tabela de dados
    function atualizaRole() {
        roleService.getAllRole().then(function (res) {
            if(res.length >= 1){
                var data = res;
                $scope.desserts = data;
            }
        })
    }

    if($scope.myLocal == 'adm.profilesEdit'){
        roleService.findRole($stateParams.id).then(function (res) {
            res = res[0];
            $scope.role = {
                role: res.rolename,
                slug: res.slug,
                id: res.id
            }
        }, function (error) {
            console.log('error');
        })
    }

    // verificando qual opção o usuário escolheu na tabela (editar/excluir)
    $scope.optionChange = function (id, option) {
        if(option == "Editar"){
            $state.go('adm.profilesEdit', {id: id});
        }
        if(option == "Excluir"){
            roleService.findRole(id).then(function (res) {
                res = res[0]
                deleteAs('', res)
            }, function (error) {
                console.log('error');
            })
            function deleteAs(ev, res) {
                var confirm = $mdDialog.confirm()
                    .title('Excluir '+res.rolename)
                    .textContent('Você deseja mesmo Excluir '+res.rolename+'?')
                    .targetEvent(ev)
                    .ok('Excluir')
                    .cancel('Cancelar');
                $mdDialog.show(confirm).then(function() {
                    roleService.deleteRole(res.id).then(function (res) {
                        var text = {
                            content: "Perfil removido com sucesso.",
                            action: "Fechar",
                            style: "bold md-warn"
                        }
                        menssagesService.openMenssage(text)
                        atualizaRole();
                    }, function (error) {
                        console.log('error');
                    })
                }, function() {
                });
            };
        }
    }

    // resgistrando uma nova Role
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


    // atualizando os dados do usuario
    $scope.update = function (role) {
        if (!angular.isObject(role)) {
            new TypeError('Um objeto é experado');
        }
        roleService.updadeRole(role).then(function (res) {
            $state.go('adm.profiles');
            var text = {
                content: "Perfil atualizado com Sucesso",
                action: "Fechar",
                style: "bold md-warn"
            }
            menssagesService.openMenssage(text)
        }, function (error) {
            console.log(error);
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