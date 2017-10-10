/*
<section class="furniture">
    <h2 class="furniture__name">
        Shaker Writing Desk
    </h2>
    <div class="furniture__location">
        Location: Bedroom
    </div>
    <div class="furniture__description">
        This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction.
    </div>
</section>
*/

const HomeInventory = JSON.parse(localStorage.getItem("homeInventory"));

// capture the element to manipulate
let inventoryEl = document.getElementsByClassName("inventory")[0];

for(let key in HomeInventory){
    
    const currentType = HomeInventory[key];
    // currentType is the array held within the HomeInventory object
    for (var i = 0; i < currentType.length; i++) {
        var item = currentType[i];
        inventoryEl.innerHTML += `
        <section class="${key}">
            <h2 class="${key}__name">${item.name}</h2>
            <div class="${key}__location">Location: ${item.location}</div>
            <div class="${key}__description">${item.description}</div>
        </section>
        `
    }
}

