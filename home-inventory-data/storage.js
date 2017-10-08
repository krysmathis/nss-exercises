/*
// Example objects
const vintageInkwell = {
  "name": "Vintage Ink Well",
  "type": "crafts",
  "location": "Writing desk",
  "description": "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}
const writingDesk = {
  "name": "Shaker Writing Desk",
  "type": "furniture",
  "location": "Bedroom",
  "description": "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}


*/

/* --- OBJECTS ---- */
const computerDesk = {
    "name": "IKEA Computer Desc",
    "type": "furniture",
    "location": "Office",
    "description": "White computer desk that fits into the corner of a room"
}

const couch = {
    "name": "Comfy Couch",
    "type": "furniture",
    "location": "Living Room",
    "description": "Comfy L-shaped couch with soft cushions - great for sitting"
}

const projector = {
    "name": "Projector",
    "type": "Electronics",
    "location": "Living Room",
    "description": "White projector for showing movies on the wall"
}

const clouds = {
    "name": "Clouds",
    "type": "Artwork",
    "location": "Kitchen",
    "description": "My wife was obsessed with clouds and is a sculpture, so she made a series of cloud sculptures"
}

const ipad = {
    "name": "iPad",
    "type": "Electronics",
    "location": "Kitchen",
    "description": "This used to be my iPad, but my son uses it watch videos on the weekends"
}

const lamp = {
    "name": "Lamp",
    "type": "Furniture",
    "location": "Living Room",
    "description": "Turns on and off and gives off light, not sure why we have it"
}

const headNoddingBear = {
    "name": "Head Nodding Bear",
    "type": "Arwork",
    "location": "Office",
    "description": "Hungry bear that I picked up in Hong Kong. It's a solar powered bear that eats ramen"
}

const bookshelf = {
    "name": "Bookshelf",
    "type": "Furniture",
    "location": "Office",
    "description": "Actually two bookshelves stacked on top of each other"
}

const shoeCubby = {
    "name": "Shoe Cubby",
    "type": "Furniture",
    "location": "Living Room",
    "description": "A place to store shoes by the front door"
}

const kitchenTable = {
    "name": "Kitchen Table",
    "type": "Furniture",
    "location": "Kitchen",
    "description": "Antique, refinished expandable table with decorative legs"
}

/*
computerDesk
couch
projector
clouds
ipad
lamp
headNoddingBear
bookshelf
shoeCubby
kitchentable
*/

let artwork = []
let furniture = []
let electronics = []

artwork.push(clouds)
artwork.push(headNoddingBear)
furniture.push(computerDesk)
furniture.push(couch)
furniture.push(lamp)
furniture.push(bookshelf)
furniture.push(shoeCubby)
furniture.push(kitchenTable)
electronics.push(ipad)
electronics.push(projector)


let HomeInventory = {
    "furniture": furniture,
    "artwork": artwork,
    "electronics": electronics
}

//to add the localStorage object using JSON.stringify
const homeInventoryString = JSON.stringify(HomeInventory)
localStorage.setItem("homeInventory", homeInventoryString)


