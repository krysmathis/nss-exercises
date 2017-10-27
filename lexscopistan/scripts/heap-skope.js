{
const gemHeapSkope = function () { // No parameter needed
    // Resource contained inside


    /*
    The gem mine does not exist outside the barricade of the
    hëap-skopes. The Lexscopistanians build the barricade
    around their facility AND the resource.

    a.k.a.
    Instead of being located in an outer scope to the
    function, the gem mine is enclosed by the scope of
    the `gemHeapSkope` function.
    */
    const GemMine = {
        "Onyx": {
            "kilograms": 453
        },
        "Amethyst": {
            "kilograms": 453
        },
        "Bloodstone": {
            "kilograms": 453
        },
        "Emerald": {
            "kilograms": 453
        }
    }

    /*
    Instead of processing the entirety of the resources in
    bulk - which is what the stâck-skope does - this skope
    will return an object that has a method for processing
    each type of mineral.

    We're exposing the functionality of this skope to code
    in the outer scope, so that the order in which minerals
    are processed can be customized.

    Hëap-skopes workshops can process 5 kilograms of a
    mineral with each work order. So every time the `process`
    function is invoked, subtract 5 from the amount of the
    requested mineral from the enclosed GemMine above.
    */
    return {
        "process": function (requestedMineral) {
            /*
            Subtract 5 from the total kilograms available in
            the gem mine, but make sure you stop when there
            are no minerals left.
            */
            let gem = GemMine[requestedMineral];
            let remainingKilos = gem.kilograms;
            
            /* 
                you can process a max of 5 kilos at a time, but sometimes
                the remaining kilos are less than 5

                Once you've captured the kilos to process subtract that 
                amount from the gem's kilo's, which should set it at zero.

            */
            let kilosToProcess = remainingKilos >= 5 ? 5 : remainingKilos;
            gem.kilograms -= kilosToProcess;

            return {
                "mineral": requestedMineral,
                "amount": kilosToProcess // Change this to the correct amount
            }
        }
    }
}

/*
    The SkopeManager variable represents the object with the
    `process` method on it.
*/
const SkopeManager = gemHeapSkope()

/*
    Create a generator for 30 storage containers, which is how many a hëap-skope
    is equipped with.
*/
const storageContainerGenerator = function* () {
    let currentContainer = 0;
    let maxContainers = 30;

    while (currentContainer <= maxContainers){
        yield { "id": currentContainer, "type": "Mineral", "orders": [] }
        currentContainer++;
    }
};

const storageContainerFactory = storageContainerGenerator();


// a place to hold the collected containers
let heapSkopeContainers = [];


// get the first container and initialize a variable to represent it is empty
let currentContainer = storageContainerFactory.next().value;
let containerKilograms = 0;


/*
Process the gems in any order you like until there none
left in the gem mine.
*/
const gemSequence = ["Onyx","Amethyst","Bloodstone","Emerald"];
gemSequence.forEach(function(currentGem){
    
        /*
            Once we've depleted a gem, it will return an amount of zero
            Loop through each gem until you get an order with a zero.
        */

        // intialize an order with an initial value to start while loop
        let order;

        do {
                
                order = SkopeManager.process(currentGem);

                let orderNotZero = order.amount > 0;
                let containerHasCapacity = containerKilograms + order.amount <= 565;

                /*
                    Place the gems in the storage containers, making sure that
                    once a container has 565 kilograms of gems, you move to the
                    next one.
                */

                if (orderNotZero && containerHasCapacity) {
                    currentContainer.orders.push(order);
                    containerKilograms += order.amount;

                } else if (!containerHasCapacity) {

                    /*
                        1. Add container to the heapSkope
                        2. Create a new container
                        3. Add the current order to the container
                        4. Reset the kilograms to the current order, which is the
                        only object in the container
                    */
                    heapSkopeContainers.push(currentContainer);
                    currentContainer = storageContainerFactory.next().value;
                    currentContainer.orders.push(order);
                    containerKilograms = order.amount;
                } 
            
            } while (order.amount > 0)

       // }
});

// Clean-up any half full containers
if (currentContainer.orders.length > 0) {
    heapSkopeContainers.push(currentContainer);
}

console.log(heapSkopeContainers);
}



