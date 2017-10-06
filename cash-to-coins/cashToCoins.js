const dollarAmount = 10.04;
const piggyBank = {};

// Your magic code here
// create a collection of coins
const quarter = {"name": "quarters", "value": .25};
const dime = {"name": "dimes", "value": .10};
const nickel = {"name": "nickels", "value": .05};
const penny = {"name": "pennys", "value": .01};

// put those coins in an array
const coins = [quarter, dime, nickel, penny];

// a variable to hold the remaining change to place
let uncategorizedChange = dollarAmount.toPrecision();

coins.forEach(function(coin) {

    
    //if (coinCount >= 1) {
    if (uncategorizedChange % coin.value >= 0 && uncategorizedChange > 0) {
        // divide the uncategorizedChange by the coin value
        let coinCount = (uncategorizedChange/coin.value);
        let preciseCoinCount = Math.floor(coinCount.toPrecision(2));
        piggyBank[coin.name] = preciseCoinCount;
        uncategorizedChange = uncategorizedChange - (preciseCoinCount * coin.value); 
    }
    else {

        piggyBank[coin.name] = 0;
    }

});

console.log(piggyBank)


/* 
{
  quarters: 0,
  dimes: 1,
  nickels: 0,
  pennies: 0
}
*/