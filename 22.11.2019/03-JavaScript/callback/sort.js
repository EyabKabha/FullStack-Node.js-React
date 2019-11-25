function isAsc(num1, num2){
    return num1 > num2;
}

function bubbleSort(numbers) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < numbers.length-1; i++) {
            if (isAsc(numbers[i], numbers[i+1])) {
                var temp = numbers[i];
                numbers[i] = numbers[i+1];
                numbers[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

var numbers = [1,8,9,2,5,3];
bubbleSort(numbers);
console.log(numbers);