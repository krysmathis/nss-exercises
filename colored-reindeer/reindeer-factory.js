const reindeerColorGenerator = function* () {
    
    let i = 0;
    let colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"];
    while(i< colors.length) {
        yield colors[i];
        i++;
    }
}

const reindeerColorFactory = reindeerColorGenerator();

const reindeerFactory = function (name) {
    return Object.create({},{
        "name": {value: name, enumerable: true},
        "color": {value: reindeerColorFactory.next().value, enumerable: true }
    })
};

const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    const coloredReindeer = [];
    // Write a for loop that looks at each reindeer
    for (let i = 0; i < reindeer.length; i++) {
        let currentReindeer = reindeer[i];
        // Invoke factory function to create reindeer object
        // Put new reindeer object in coloredReindeer array
        coloredReindeer.push(reindeerFactory(currentReindeer));
    }
    // Return coloredReindeer array
    return coloredReindeer;
}
