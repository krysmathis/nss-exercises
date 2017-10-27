{
    /*
    Build Your Own Hëap Skope

    Now build another Hëap Skope whose job is to go to the nearest mountain, where our geologists have discovered that we can build 2 mines. They must be separate mines because the veins originate on opposite sides of the mountain. One mine will produce iron, and copper. The other mine will produce gold, and coal.

    The geologists have detected the following amounts in each mine.

    Mine 1

    There is 5302kg of coal
    There is 2775kg of gold
    Mine 2

    There is 3928kg of iron
    There is 901kg of copper
    Remember, Hëap Skopes enclose all of the resources they are in charge of processing.
*/

const mineHeapSkopeOne = function () {

    const resources = {
            "coal": {
                "kilograms": 5302
            },
            "gold": {
                "kilograms": 2775
            }
        }


        return {
            "process": 
                function (resource) {
                    /*
                        Determine the amount to process, if the existing kilos is greater
                        than the max amount we can process per order use the processMax
                    */
                    let processMax = 30;
                    let remainingKilograms = resources[resource].kilograms;
                    let kilosToProcess = remainingKilograms > processMax ? processMax : remainingKilograms;

                    //  Decrement the resource kilograms
                    resources[resource].kilograms -= kilosToProcess;

                    return {
                        "mineral": resource,
                        "amount": kilosToProcess // Change this to the correct amount
                    }
                }
            
        }
}

const mineHeapSkopeTwo = function () {
    
        const resources = {
                "iron": {
                    "kilograms": 3928
                },
                "copper": {
                    "kilograms": 901
                }
            }
    
    
            return {
                "process": 
                    function (resource) {
                        /*
                            Determine the amount to process, if the existing kilos is greater
                            than the max amount we can process per order use the processMax
                        */
                        let processMax = 30;
                        let remainingKilograms = resources[resource].kilograms;
                        let kilosToProcess = remainingKilograms > processMax ? processMax : remainingKilograms;
    
                        //  Decrement the resource kilograms
                        resources[resource].kilograms -= kilosToProcess;
    
                        return {
                            "mineral": resource,
                            "amount": kilosToProcess // Change this to the correct amount
                        }
                    }
                
            }
    }

const mineHeapSkopeOneManager = mineHeapSkopeOne();
const mineHeapSkopeTwoManager = mineHeapSkopeTwo();


const mineralsInMineOne = ["coal", "gold"];
const mineralsInMineTwo = ["iron", "copper"];

const mines = [{
    "mineManager": mineHeapSkopeOneManager,
    "minerals": mineralsInMineOne
}, 
{   
    "mineManager": mineHeapSkopeTwoManager,
    "minerals": mineralsInMineTwo
}]

const mineHeapContainerGenerator = function*() {
    let currentContainer = 1;
    let maximumContainers = 100;

    while (currentContainer <= maximumContainers) {
        yield {"id": currentContainer, "type": "Mineral", "orders": [], "kilograms": 0};
        currentContainer++;
    }
};
const mineHeapContainerFactory = mineHeapContainerGenerator();

// Need a place to collect the containers
mineHeapSkopeContainers = []

// create the first, empty container
let currentContainer = mineHeapContainerFactory.next().value;
let weightLimit = 1000;

let c = 0;
mines.forEach(function (mine) {
    console.log(mine);
    mine.minerals.forEach(mineral => {

        let order;
        try {
            do {
                c++;
                order = mine.mineManager.process(mineral);
                let orderNotZero = order.amount > 0;
                let hasCapacity = currentContainer.kilograms + order.amount <weightLimit;
                
                if (orderNotZero && hasCapacity) {

                    currentContainer.orders.push(order);  
                    currentContainer.kilograms += order.amount;  

                } else if (!hasCapacity) {
                    mineHeapSkopeContainers.push(currentContainer);
                    currentContainer = mineHeapContainerFactory.next().value;
                    currentContainer.orders.push(order);
                    currentContainer.kilograms = order.amount;
                }

                if (c > 1000) {
                    break;
                }

            } while (order.amount > 0)
        } catch (err) {
            if (err instanceof TypeError) {
                console.log("You've run out of containers!")
            } else {
                console.log(err);
            }
        }


    })

})

try {
    if (currentContainer.orders.length > 0) {
        mineHeapSkopeContainers.push(currentContainer);
    }
} catch (err) {
    if (err instanceof TypeError) {
        console.log("You've run out of containers!")
    } else {
        console.log(err);
    }
}

console.log(mineHeapSkopeContainers);

}