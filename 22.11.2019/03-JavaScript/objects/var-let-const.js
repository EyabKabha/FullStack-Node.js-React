function foo(){
    console.log(i);

    for(var i = 0; i < 5; i++){
        console.log(i);
    }

    console.log(i);
}

//Hoisting
//All var declarations are 'hoisted' up
//To the upper scope:
//When using var - the function is the upper scope, or the global scope
function foo(){
    var i;
    console.log(i);

    for(i = 0; i < 5; i++){
        console.log(i);
    }

    console.log(i);
}

foo();

function bar(){
    //console.log(i);

    for(let i = 0; i < 5; i++){
        console.log(i);
    }

    //console.log(i);
}
bar();

// var x = 9;
// x = 'Joker';
// x = {name: 'Popay'};

// let x = 'Jachnun';
// x = 42;

const x = 'Melawach';
x = 42;








