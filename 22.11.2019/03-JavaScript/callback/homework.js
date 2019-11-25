// יש לכם מערך כזה [88, -90, 11, 22, 189, -440, 7, -333, 65]
// כתבו קוד כדי לסנן את המספרים האיזוגיים בטווח שבין 400- ל 100,
// לאחר מכן לחשב 17% מעמ לכל הנותרים,
// ולבסוף להדפיס לכל אחד
// The TAX is (and the calculated value)

var prices = [88, -90, 11, 22, 189, -440, 7, -333, 65];

function isOdd(number){
    return number % 2 == 1;
}

function isBetweenRange(number, min, max){
    return number >= min && number <= max;
}

function vat(number){
    return number * .17; 
}

function toPriceString(number){
    return `The TAX is ${number}`;
}

//Strategy Pattern
function processPrices(prices, isOdd, isBetweenRange, vat, toString){
    var result = [];

    for(var i = 0; i < prices.length; i++){
        var price = prices[i];
        if(isOdd(price) && isBetweenRange(price, -400, 100)){
            var priceAsString = toString(vat(price));
            result.push(priceAsString);
        }
    }

    return result;
}

var calculated = processPrices(prices, isOdd, isBetweenRange, vat, toPriceString);
console.log(calculated);

//Solution #2

calculated = prices
                .filter(isOdd)
                .filter(function(number) {
                    return isBetweenRange(number, -400, 100);
                })
                .map(vat)
                .map(toPriceString);

console.log(calculated);


