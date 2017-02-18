app.controller('mainController', function ($scope, dataService)
{
    $scope.data = dataService.getData();
});