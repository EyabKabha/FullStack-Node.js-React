function sum(x, y){
    return x + y;
}

console.log(sum(1,2));
console.log(sum(1));
console.log(sum());
console.log(sum('lala', 7));
console.log(sum('6', 7));
console.log(sum(7, '7'));

function sum2(x, y, z){
    return x + y + z;
}

console.log('\nsum2');
console.log(sum2(1, 2, 3));
console.log(sum2(1, 2, '3'));
console.log(sum2(1, '2', '3'));
console.log(sum2('1', '2', '3'));
console.log(sum2('1', '2', 3));
console.log(sum2('1', 2, 3));

console.log('\nreplace', 'by value');

function replace(x){
    x = 10;
}

var x = 9;
console.log(x);
replace(x);
console.log(x);

//object
x = {
    //property
    name: 'Shahar'
};

console.log(x, x.name);

console.log('\nreplace', 'by reference');

function replace2(obj){
    obj = {
        age: 69
    };
}

console.log(x);
replace2(x);
console.log(x);

//Write a function which gets name and age
//If name or age not sent print appropriate messages
//If name isn't a string or age isn't a number, print appropriate messages
//If they're both set, return an object with name and age
// {name: 'Shahar', age: 17}

//Proposal solution:

// function validateNameAndAge(name, age) {
//     if(name == undefined){
//         console.log('Please provide the name');
//     }else if(typeof name != 'string'){
//         console.log('Name should be a string');
//     }
//     else if(age == undefined){
//         console.log('Please provide the age');
//     } else if(typeof age != 'number'){
//         console.log('Age should be a number');
//     }else{
//         return {
//             name,
//             age
//         }
//     }
// }

// validateNameAndAge();
// validateNameAndAge('shahar');
// validateNameAndAge(4);
// validateNameAndAge('shahar', 'lala');

// var result = validateNameAndAge('shahar', 78);
// console.log('success', result);


function validateNameAndAge2(name, age) {
    if(arguments.length != 2){
        console.log('Please provide name and age');
    }
    //...Continue just to check types
}

console.log('arguments');
validateNameAndAge2(1,2,3,4,5);

function createPerson(name, age, phones){
    var name = name || 'John';
    var age = age || 18;
    var phones = phones || [];

    return {
        name,
        age,
        phones
    }
}

console.log(createPerson());
console.log(createPerson('Shahar'));
console.log(createPerson('Shahar', 17));
console.log(createPerson('Shahar', 17, ['054', '055']));

//ES6 (ES2015)
function defaultValues(name = 'John', age = 18, phones = []) {
    return {
        name,
        age,
        phones
    }
}