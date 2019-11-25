function print(msg){
    console.log(msg);
}
                        //callback
                        // ||
                        // \/
function calculate(x, y, print){
    var result = x + y;
    var msg = `Result of ${x}+${y} is ${result}`;
    print(msg);
}

