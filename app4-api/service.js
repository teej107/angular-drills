app.service('apiService', function ($http)
{
    this.getPokemon = function (name)
    {
        return $http({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/' + name
        });
    }
});