{
/*
You are now in charge of building another Stâck Skope whose job is to go to the nearest forest and process the 37 trees available to convert into logs. Lexscopistanian food processors can produce 4 usable logs from every tree.

There are 9 trees of Oak available
There are 12 trees of Pine available
There are 6 trees of Ash available
There are 10 trees of Balsa available
Define the forest. Refer to the agricultural field defined above for guidance.

const forest = []
Define your Stâck Skope.

const cropStackSkope = function (trees) {
    // Functionality to convert each tree into 4 logs

    // Start filling up the 10 available storage containers
}
*/

const forest = [
    {
        "type": "Oak",
        "qty": 9
    },
    {
        "type": "Pine",
        "qty": 12
    },
    {
        "type": "Ash",
        "qty": 6
    },
    {
        "type": "Balsa",
        "qty": 10
    }
]

/* 
    This is the stackSkope, it converts trees into logs
    and stores them in storage containers

    Each tree becomes 4 logs
*/
const cropStackSkope = function (forest) {
    // Functionality to convert each tree into 4 logs
    
    const sendToTheSawmill = forest.map(      
        tree => 
            ({   "type": tree.type,
                "logs": tree.qty * 4
            })
    )
    
    return sendToTheSawmill;
}

// Generator for the log containers
const logContainerGenerator = function* () {
    let currentContainer = 0;
    let maximumContainers = 10;

    while (currentContainer <= maximumContainers) {
        yield {"id": currentContainer, "type": "tree", "logs": []};
        currentContainer++;
    }
}
const logStorageFactory = logContainerGenerator();

// Create a place to store the containers of logs next to the Stack Skope
cropStackSkope.container = [];

// Create an initial container, the rest are created while looping through the trees
let currentContainer = logStorageFactory.next().value;

// define the stackSkope
let allTrees = cropStackSkope(forest);

// Start filling up the 10 available storage containers
allTrees.forEach(
    
    // Look at each processed item
    currentTree => { 

        /*
            The current tree represents the output of the stack skope, which is
            an array of logs of a certain type of tree

            Here were' looping through the collection of each type of log and adding
            them to the log containers

            The containers hold a max of 21 logs
        */
        for (let i = 0; i < currentTree.logs; i++) {

            // for tree, take each log and add it to the container
            const tree = {type: currentTree.type}
            currentContainer.logs.push(tree);

            /* 
                Check the number of logs in the container now, is it 21?
                If so, then we need a new one for the next iteration.
            */
                if (currentContainer.logs.length === 21) {
                cropStackSkope.container.push(currentContainer);
                currentContainer = logStorageFactory.next().value;
            }
        }
    }
);

// Pick up any remaining containers that aren't full yet
if (currentContainer.logs.length > 0) {
    cropStackSkope.container.push(currentContainer);
}

console.log("cropStackSkope: ", cropStackSkope.container);
}