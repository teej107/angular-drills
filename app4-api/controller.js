app.controller('mainController', function ($scope, apiService)
{
    $scope.pokemon = {};

    $scope.searchPokemon = function ()
    {
        if ($scope.input.length === 0)
            return;

        apiService.getPokemon($scope.input).then(function (result)
        {
            console.log(result.data);
            $scope.pokemon = result.data;
        }, function (fail)
        {
            console.log(fail);
            $scope.pokemon = {};
        });
    };
});