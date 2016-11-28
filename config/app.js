/**
 * Created by dhales on 20/11/16.
 */


var application = angular.module("dashboard", [ "ui.router", 'ngMaterial', 'LocalStorageModule', 'md.data.table'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo', {
                'default': '500',
                'hue-1': '100',
                'hue-2': '500',
                'hue-3': '900'
            })
            .accentPalette('orange', {
                'default': '500',
                'hue-1': '100',
                'hue-2': '500',
                'hue-3': '900'
            })
            .warnPalette('red', {
                'default': '500',
                'hue-1': '100',
                'hue-2': '500',
                'hue-3': '900'
            })
    });
