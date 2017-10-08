//convert it back out
const storedInventory = JSON.parse(localStorage.getItem("homeInventory"))

//Add one new object of each type into array
const oddlyShapedVases = {
    "name": "Oddly Shaped Vases",
    "type": "Artwork",
    "location": "Living Room",
    "description": "Some oddly placed vases from a local artist"
}

const laptop = {
    "name": "Laptop",
    "type": "Electronics",
    "location": "Office",
    "description": "A portable computer you can take anywhere"
}

const coffeeTable = {
    "name": "Coffee Table",
    "type": "Furniture",
    "location": "Living Room",
    "description": "Though coffee is rarely placed on this thing, it holds a lot of other random junk. We like it best when it is empty. Plus, we like it because my wife made it herself."
}

// Add the objects to the database, unshift to see it at the top
HomeInventory.artwork.push(oddlyShapedVases);
HomeInventory.furniture.unshift(coffeeTable);
HomeInventory.electronics.push(laptop)

// Place the updated database back into local storage
const homeInventoryStringUpdated = JSON.stringify(HomeInventory);
localStorage.setItem("homeInventory", homeInventoryStringUpdated);
