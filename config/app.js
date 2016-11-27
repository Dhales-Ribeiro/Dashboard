/**
 * Created by dhales on 20/11/16.
 */


var application = angular.module("dashboard", [ "ui.router", 'ngMaterial', 'LocalStorageModule'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('green', {
                'default': '900',
                'hue-1': '50',
                'hue-2': '100',
                'hue-3': '200'
            })
            .accentPalette('grey', {
                'default': '900',
                'hue-1': '50',
                'hue-2': '100',
                'hue-3': '200'
            })
            .warnPalette('red', {
                'default': '900',
                'hue-1': '50',
                'hue-2': '100',
                'hue-3': '200'
            })
    });
