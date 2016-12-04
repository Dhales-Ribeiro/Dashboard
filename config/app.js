/**
 * Created by dhales on 20/11/16.
 */


var application = angular.module("dashboard", [ "ui.router", 'ngMaterial', 'LocalStorageModule', 'md.data.table', 'chart.js'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey', {
                'default': '900',
                'hue-1': '100',
                'hue-2': '500',
                'hue-3': '800'
            })
            .accentPalette('teal', {
                'default': '900',
                'hue-1': '100',
                'hue-2': '500',
                'hue-3': '800'
            })
            .warnPalette('red', {
                'default': '900',
                'hue-1': '100',
                'hue-2': '500',
                'hue-3': 'A700'
            })
    });
