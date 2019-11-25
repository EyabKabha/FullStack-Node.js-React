var nums1 = [1,2,3,4,5,6];
var nums2 = [7,8,9,10];

// 1- function(numbers, number)
//    the function returns if number is in numbers

function isIn(numbers, number){
    return numbers.includes(number);
}

console.log(isIn(nums1, 8));
console.log(isIn(nums2, 10));

// 2- function join(arr1, arr2)
//    the function returns 1 array containing both arrays

function myJoin(arr1, arr2){
    return arr1.concat(arr2);
}

console.log(myJoin(nums1, nums2));

// 3- function reverse(arr)
//    the function reverses arr

console.log(nums1.reverse());

var chars = ['A', 'h', 'a', 'l', 'l', 'a', 'n'];

// 4- from chars, make 'Ahallan'

console.log(chars.join(''));

// 5- from chars, make 'A-h-a-l-l-a-n'
console.log(chars.join('-'));

// 6- from chars, make 'n,a,l,l,a,h,A'
console.log(chars.reverse().join(''));


var names = ['Shahar', 'Mohamad', 'Wu', 'Hanan', 'Yossef', 'Dan', 'Ayman', 'Suheer']
// 7- find the names which length is more than 3 chars and print array of those lengths

var result = names.filter(function(name){
    return name.length > 3;
}).map(function(name){
    return name.length;
});

console.log(result);