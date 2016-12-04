/**
 * Created by dhales on 29/11/16.
 */

application.factory('roleService', function (dbService,$q) {

        var _getRole = function (role) {
        var deferred = $q.defer();
        var result = dbService.run("select r.id, r.rolename from roles r where r.rolename = '" + role + "';", function (res) {
            if (res.error)
                throw res.error
            deferred.resolve(res);
        })
        return deferred.promise;
    }

    var _getAllRole = function () {
        var deferred = $q.defer();
        var result = dbService.run("select * from roles;", function (res) {
            if(res.error)
                throw res.error
            deferred.resolve(res);
        })
        return deferred.promise;
    }

    var _registerRole = function (data) {

        if(!angular.isObject(data)){
            throw new  TypeError("Erro, Não é um Objeto para cadastro de perfil");
            return false;
        }

        var deferrend = $q.defer();
        var result = dbService.run("insert into roles (slug, rolename, created_at) values ('"+data.slug+"','"+data.role+"', '"+moment().format('DD/MM/YYYY h:mm:ss a')+"');", function (res) {
            if(res.error)
                throw res.error
            deferrend.resolve(res)
        })
        return deferrend.promise;
    }




    return {
        getRole: _getRole,
        getAllRole: _getAllRole,
        registerRole: _registerRole
    }
    
})