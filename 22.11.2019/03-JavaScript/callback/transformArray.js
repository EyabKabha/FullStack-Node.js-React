function powerBy2(numbers){
    var result = [];
    
    for(var i = 0; i < numbers.length; i++){
        result.push(Math.pow(numbers[i], 2));
    }

    return result;
}

var numbers = [1,2,3,4,5];
var powersBy2 = powerBy2(numbers);
console.log(powersBy2);

function negativesNumbers(numbers){
    var result = [];
    
    for(var i = 0; i < numbers.length; i++){
        result.push(-numbers[i]);
    }

    return result;
}

var negatives = negativesNumbers(numbers);
console.log(negatives);

function transform(numbers, convert){
    var result = [];

    for (var i = 0; i < numbers.length; i++) {
        result.push(convert(numbers[i]));        
    }

    return result;
}

function toTenPercent(number){
    return number / 10;
}

var tenPercent = transform(numbers, toTenPercent);
console.log(tenPercent);

var plus1 = transform(numbers, function (number){
    return number + 1;
});
console.log(plus1);

var modulu3 = numbers.map(function(number){
    return number % 3;
});
console.log(modulu3);