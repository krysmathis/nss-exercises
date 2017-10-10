// give yourself as many coins as you want
const piggyBank = {
    "quarters": 8,
    "nickels": 20,
    "dimes": 10,
    "pennies": 101
};

let dollarAmount = 0;

let returnQty = (key) => piggyBank[key];

for(let coin in piggyBank) {
    switch (coin) {
        case "quarters":
            dollarAmount += returnQty(coin) * .25;
            break;
        case "nickels":
            dollarAmount += returnQty(coin) * .05
            break;
        case "dimes":
            dollarAmount += returnQty(coin) * .1
            break;
        case "pennies":
            dollarAmount += returnQty(coin) * .01
            break;
        default:
            break;
    }
}
