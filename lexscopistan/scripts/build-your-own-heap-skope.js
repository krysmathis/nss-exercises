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

const mineHeapSkopeOne = function() {
    
    const resouces = 
    {
        "coal": { "kilograms": 5302 },
        "gold": { "kilograms": 2775 }
    },
        
        
        return { 
            "process": {value: function(resource) { 
                /*
                    Determine the amount to process, if the existing kilos is greater
                    than the max amount we can process per order use the processMax
                */
                let processMax = 5;
                let remainingKilograms = this.resources[resource].kilograms;
                let kilosToProcess = remainingKilograms > processMax ? processMax : remainingKilograms;
                
                //  Decrement the resource kilograms
                this.resources[resource].kilograms -= kilosToProcess;

                return {
                    "mineral": resource,
                    "amount": kilosToProcess // Change this to the correct amount
                }
        }
    }
}
    
const mineHeapSkopeOneManager = mineHeapSkopeOne();


const mineTwoHeapSkope = heapSkope(
    {
        "iron": { "kilograms": 3928 },
        "copper": { "kilograms": 901 }
    }, 
    5
);

const mineralsInMineOne = ["coal", "gold"];
const mineralsInMineTwo = ["iron", "copper"];

mineralsInMineOne.forEach(mineral => {
    
    do {
        let order = mineHeapSkopeOneManager.process(mineral);

    } while (mineral)
    mineOneHeapSkope.process(mineral,5);
    console.log(mineral, mineOneHeapSkope.resources[mineral].kilograms);

})
