var names = ['Shahar', 'Lilian', 'Suah', 'Dabush', 'Ahmad', 'Jasmine', 'Rawya'];
var balances = [3, -87, -9, 120, 11, 290, 0];

//Sort both arrays

console.log(names.sort());
console.log(balances.sort(function(x, y) {
    return y - x;
}));