/**
 * Created by dhales on 20/11/16.
 */
"USE STRICT"
application.factory("dbService", function($http){
    var sqlite = require('sqlite-sync');
    var db = sqlite.connect('./database/database.db');
    return db;
});