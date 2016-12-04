/**
 * Created by dhales on 01/12/16.
 */


application.factory('menssagesService', function ($mdToast) {

    var _openMenssage = function(config) {

        var menssage = $mdToast.show(
                            $mdToast.simple()
                                .textContent(config.content)
                                .action(config.action)
                                .highlightAction(true)
                                .highlightClass(config.style)// Accent is used by default, this just demonstrates the usage.
                                .position('left right bottom')
                                .hideDelay(10000)
                        );
                    };

    return {
        openMenssage: _openMenssage,
    }
})