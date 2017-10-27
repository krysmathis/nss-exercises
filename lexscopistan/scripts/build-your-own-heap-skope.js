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

const mineHeapSkope = function () {

    const mountain = {
         "mine1": {
            
            "coal": {
                "kilograms": 5302
            },
            "gold": {
                "kilograms": 2775
            }
        }, 
        "mine2" :{
            "iron": {
                "kilograms": 3928
            },
            "copper": {
                "kilograms": 901
            }
        }
    }

    // determine which mine to pull the resource from
    const getMine = function(resource) {
        for(let mine in mountain) {
            let currentMine = mountain[mine];
            for (let mineral in currentMine) {
                if (mineral === resource) {
                    return currentMine[mineral];
                }
            }
            
        }
    } || {kilograms: 0};

        return {
            "process": 
                function (resource) {
                    /*
                        Determine the amount to process, if the existing kilos is greater
                        than the max amount we can process per order use the processMax
                    */
                    let processMax = 5;
                    let mineral = getMine(resource);
                    let remainingKilograms = mineral.kilograms;
                    let kilosToProcess = remainingKilograms > processMax ? processMax : remainingKilograms;

                    //  Decrement the resource kilograms
                    mineral.kilograms -= kilosToProcess;

                    return {
                        "mineral": resource,
                        "amount": kilosToProcess // Change this to the correct amount
                    }
                }
            
        }
}


const mineHeapSkopeManager = mineHeapSkope();

const mineHeapContainerGenerator = function*() {
    let currentContainer = 1;
    let maximumContainers = 30;
    const maxCapacity = 565;
    while (currentContainer <= maximumContainers) {
        yield {"id": currentContainer, "type": "Mineral", "orders": [], "capacity": maxCapacity}
        currentContainer++;
    }
};
const mineHeapContainerFactory = mineHeapContainerGenerator();

// Need a place to collect the containers
mineHeapSkopeContainers = []

// create the first, empty container
let currentContainer = mineHeapContainerFactory.next().value;
/*
    loadContainer is reponsible for loading containers if the
    order it receives is greater than zero
*/
const loadContainer = function(order) {
    if (order.amount > 0) {
        currentContainer.orders.push(order);  
        currentContainer.capacity -= order.amount; 
    }
};      

// call this to bring in a new empty container
const getNewContainer = function() {
    mineHeapSkopeContainers.push(currentContainer);
    currentContainer = mineHeapContainerFactory.next().value;
}


const mineralOrder = ["coal", "gold", "iron", "copper"];
mineralOrder.forEach(function (mineral) {

    let order;
    do {
        /* 
        1. Generate an order
        2. Check if the order will fit in the current container
        3. If false, get a new container
        4. Send the container to the loader
        */
        order = mineHeapSkopeManager.process(mineral);
        
        try {
            let hasCapacity = currentContainer.capacity - order.amount >= 0;
                
                if (!hasCapacity) {
                    getNewContainer();
                } 
                
                loadContainer(order);
                
        } catch (err) {
                // TypeError is thrown when there are no more containers
                if (err instanceof TypeError) {
                    console.log("You've run out of containers!")
                } else {
                    console.log(err);
                }
        }

            } while (order.amount > 0)
        


    })

    // Container clean-up: push any remaining containers to the collection
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

console.log("myHeapSkope: ", mineHeapSkopeContainers);

}