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
    vendors + 'angular-animate/angular-animate.min.js',
    vendors + 'angular-aria/angular-aria.min.js',
    vendors + 'angular-messages/angular-messages.min.js',
    vendors + 'angular-material/angular-material.min.js',
    vendors + 'angular-local-storage/dist/angular-local-storage.min.js',
    vendors + 'particles.js/particles.js',
    './resources/assets/scripts/**',
    './config/**',
    './app/dbService.js',
    './routes/**',
    './app/Services/**',
    './app/Constant/**.js',
    './app/Controllers/**/**',
];

var styles = [
    vendors + 'bootstrap/dist/css/bootstrap.min.css',
    vendors + 'bootstrap/dist/css/bootstrap-theme.min.css',
];

var fonts = [
    vendors + 'material-design-icons/iconfont/**'
];

var images = [
    './resources/assets/images/**'
];

elixier(function (mix) {
    mix.copy('./node_modules/jquery/dist/jquery.min.js', './public/js/');

    mix.copy('./app/Constant/particles.json', './public/js/');
    mix.copy(fonts, './public/fonts/');
    mix.copy(images, './public/images/');

    mix.scripts(scripts);
    mix.styles(styles);
    
});