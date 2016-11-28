/**
 * Created by dhales on 20/11/16.
 */
application.factory('AuthenticateService', function (dbService, $q, localStorageService) {

    var _authenticate = function(data) {

        if(!angular.isObject(data)){
            throw new TypeError('Um objeto e Esperado');
            return false
        }
        var deferred = $q.defer();
        var result = dbService.run("SELECT * FROM users WHERE email = '"+ data.email +"' AND password = '"+ data.password +"';",function(res){
            if(res.error)
                throw res.error;
            deferred.resolve(res);
        });
        return deferred.promise;
    }

    var _logout = function () {
        localStorageService.clearAll();
    }

    var _clear = function () {
        localStorageService.clearAll();
    }

    return{
        authenticate: _authenticate,
        logout: _logout,
        clear : _clear
    }
})