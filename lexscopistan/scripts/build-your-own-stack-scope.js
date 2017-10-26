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

const cropStackSkope = function (forest) {
    // Functionality to convert each tree into 4 logs
    
    const sendToTheSawmill = forest.map(
        
        tree => 
            ({   "type": tree.type,
                "logs": tree.qty / 4
            })
    )

    return sendToTheSawmill;
}

const logContainerGenerator = function* () {
    let currentContainer = 0;
    let
}

// Start filling up the 10 available storage containers