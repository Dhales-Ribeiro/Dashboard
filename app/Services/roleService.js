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

    var _findRole = function (id) {
        var deferred = $q.defer();
        var result = dbService.run("select * from roles r where r.id = '" + id + "';", function (res) {
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

    var _updadeRole = function (data) {
        if(!angular.isObject(data)){
            throw new  TypeError("Erro, Não é um Objeto para Update perfil");
            return false;
        }
        var deferrend = $q.defer();
        var result = dbService.run("update roles set slug='"+data.slug+"', rolename='"+data.role+"',  updated_at='"+moment().format('DD/MM/YYYY h:mm:ss a')+"' where id='"+data.id+"';", function (res) {
            if(res.error)
                throw res.error
            deferrend.resolve(res)
        })
        return deferrend.promise;
    }

    var _deleteRole = function (id) {
        var deferrend = $q.defer();
        var result = dbService.run("delete from roles where id = '"+id+"';", function (res) {
            if(res.error)
                throw res.error
            deferrend.resolve(res)
        })
        return deferrend.promise;
    }


    return {
        getRole: _getRole,
        findRole: _findRole,
        getAllRole: _getAllRole,
        registerRole: _registerRole,
        updadeRole: _updadeRole,
        deleteRole: _deleteRole
    }

})