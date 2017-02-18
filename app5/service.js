const NO_CHAR = '!';

app.service('wordService', function ()
{
    var chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    this.generateWords = function (words, padding)
    {
        if(padding === undefined)
        {
            padding = 0;
        }
        var columns = longestWord(words).length + padding;
        var wordSearch = create2dArray(columns);
        wordSearch.forEach(function (row)
        {
           for(var i = 0; i < columns; i++)
           {
               row.push(NO_CHAR);
           }
        });

        function getValidSpots(word, horizontal, index)
        {
            var spots = [];
            if(horizontal)
            {
                for(var i = 0; i < wordSearch[index]; i++)
                {

                }
            }
            else
            {

            }
            return spots;
        }

        function insert(word, horizontal, row, column)
        {
            var wordArr = word.split('');
            if(horizontal)
            {
                var rowArr = wordSearch[row];
                var index = 0;
                for(var i = column; i < Math.min(rowArr.length, wordArr.length); i++)
                {
                    rowArr[i] = wordArr[index++];
                }
            }
            else
            {
                var index = 0;
                for(var i = row; i < Math.min(columns, wordArr.length); i++)
                {
                    var rowArr = wordSearch[i];
                    rowArr[column] = wordArr[index++];
                }
            }
        }

        words.forEach(function (e)
        {
            var horizontal = getRandomInt(0, 2) === 0;
            var max = horizontal ? columns : wordSearch.length - e.length;
            insert(e, horizontal, getRandomInt(0, max), getRandomInt(0, max));
        });

        for(var x = 0; x < columns; x++)
        {
            for(var y = 0; y < wordSearch[x].length; y++)
            {
                if(wordSearch[x][y] === NO_CHAR)
                {
                    wordSearch[x][y] = chars[getRandomInt(0, chars.length)];
                }
            }
        }

        return wordSearch;
    };
});

function WordSpot(word, horizontal, row, col)
{
    this.word = word;
    this.horizontal = horizontal;
    this.row = row;
    this.col = col;
}

function longestWord(wordArr)
{
    var value = wordArr[0];
    for (var i = 1; i < wordArr.length; i++)
    {
        if (wordArr[i].length > value.length)
        {
            value = wordArr[i];
        }
    }
    return value;
}

function create2dArray(rows)
{
    var value = [];
    for (var i = 0; i < rows; i++)
    {
        value.push([]);
    }
    return value;
}

function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}