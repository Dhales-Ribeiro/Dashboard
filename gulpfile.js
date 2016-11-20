/**
 * Created by dhales on 20/11/16.
 */

var elixier = require('laravel-elixir');
var vendors = './node_modules/';

var scripts = [
    vendors + 'jquery/dist/jquery.min.js',
    vendors + 'bootstrap/dist/js/bootstrap.min.js',
    vendors + 'angular/angular.min.js',
    vendors + 'angular-ui-router/release/angular-ui-router.min.js',
    './resources/assets/scripts/core.js',
    './config/app.js',
    './routes/route.config.js',
];

var styles = [
    vendors + 'bootstrap/dist/css/bootstrap.min.css',
    vendors + 'bootstrap/dist/css/bootstrap-theme.min.css',
];

elixier(function (mix) {
    mix.copy('./node_modules/jquery/dist/jquery.min.js', './public/js/');
    mix.scripts(scripts);
    mix.styles(styles);
    
});