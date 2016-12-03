/**
 * Created by dhales on 29/11/16.
 */

application.factory('userService', function (dbService,$q) {

    var _find = function (email) {
        var deferred = $q.defer();
        var result = dbService.run("select u.id, u.name, u.email, u.status, r.rolename from users u join roles r on u.role_id = r.id WHERE u.email = '"+email+"';", function (res) {
            if(res.error)
                throw res.error
            deferred.resolve(res);
        })
        return deferred.promise;
    }


    var _findAll = function () {
        var deferred = $q.defer();
        var result = dbService.run ("select u.id, u.name, u.email, u.status, r.rolename from users u join roles r on u.role_id = r.id;", function (res) {
            if(res.error)
            throw res.error
            deferred.resolve(res);
        })
        return deferred.promise;
    }

    var _register = function (data) {
        if(!angular.isObject(data)){
            throw new  TypeError("Erro, Não é um Objeto para cadastro de usuario");
            return false;
        }

        var deferrend = $q.defer();
        var result = dbService.run("insert into users (name, email, password, status, role_id, created_at) values ('"+data.name+"','"+data.email+"', '"+data.passwd+"', '"+data.status+"', '"+data.role+"', '"+moment().format('DD/MM/YYYY h:mm:ss a')+"');", function (res) {
            if(res.error)
            throw res.error
            deferrend.resolve(res)
        })
        return deferrend.promise;
    }

    var _edit = function (id) {

    }



    return {
        find: _find,
        findAll: _findAll,
        register: _register
    }
    
})