app.controller('wordCtrl', function ($scope, wordService)
{
    $scope.words = [];
    $scope.wordSearch = [];

    $scope.addWord = function ()
    {
        if ($scope.wordInput === undefined || $scope.wordInput.trim().length === 0)
            return;

        var words = $scope.wordInput.split(/ /g);
        words.forEach(function (word)
        {
            if (!$scope.words.includes(word))
            {
                $scope.words.push(word);
            }
        });
        $scope.wordInput = undefined;
    };

    $scope.removeWord = function (word)
    {
        var index = $scope.words.indexOf(word);
        if (index >= 0)
        {
            $scope.words.splice(index, 1);
        }
    };

    $scope.create = function ()
    {
        if ($scope.words.length > 0)
        {
            $scope.wordSearch = wordService.generateWords($scope.words, $scope.padding);
        }
    };
});