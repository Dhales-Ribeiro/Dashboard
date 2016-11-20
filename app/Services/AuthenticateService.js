/**
 * Created by dhales on 20/11/16.
 */
application.factory('AuthenticateService', function (dbService) {

    var _authenticate = function(data) {

        if(!angular.isObject(data)){
            console.log('não é um objeto valido');
        }

        var email = data.email;
        var password = data.password;

        var result = dbService.run("SELECT * FROM users WHERE email = '"+ data.email +"' AND password = '"+ data.password +"';");

        if(result.length == 1){
            console.log('logado');
        }else{
            console.log('ocorreu um erro');
        }
    }

    return{
        authenticate: _authenticate
    }
})