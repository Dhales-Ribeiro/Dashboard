/**
 * Created by dhales on 02/12/16.
 */

application.controller('dashboardController', function ($scope) {

    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [30, 30, 30];
})