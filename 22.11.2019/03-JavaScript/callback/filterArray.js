
function evens(numbers){
    var result = [];

    for (var i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 == 0){
            result.push(numbers[i]);
        }
    }

    return result;
}

function odds(numbers){
    var result = [];

    for (var i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 != 0){
            result.push(numbers[i]);
        }
    }

    return result;
}
//And so on...

function myFilter(numbers, filterBy){
    var result = [];

    for (var i = 0; i < numbers.length; i++) {
        if(filterBy(numbers[i])){
            result.push(numbers[i]);
        }
    }

    return result;
}

var numbers = [1,2,3,4,5,6,7,8,9];

var odds = numbers.filter(function(number){
    return number % 2 != 0;
});

console.log(odds);






