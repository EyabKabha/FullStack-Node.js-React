var array = [];
console.log(array);

array.push(1);
array.push(2);
array.push('Shahar');
array.push({name:'Shahar'});

console.log(array);
console.log(array[2]);
console.log(array[10]);
console.log(array.length);

array.length = 10;
console.log(array);

array.length = 1;
console.log(array);