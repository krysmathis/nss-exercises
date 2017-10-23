// Requirements

// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.
// Notes

// In order to know which delete button the user clicked on, each one must have a unique value in its id attribute.
// Remember your factory and generator functions. Generator should yield a unique identifier. Factory should generate DOM string.
// You can't attach an event listener to an element until it has been added to the DOM.

// Use event bubbling to handle the delete button click event
document.querySelector("#container-cards").addEventListener("click", function(event){
    const targetId = event.target.id;

    if (targetId.startsWith("delButton-")){
        // extract the # from the button id
        const cardNumber = targetId.split("-")[1];
        // capture the card element with the same id - this is what we want to remove
        const cardEl = document.getElementById(`card-${cardNumber}`);
        // capture the parent container element
        const cardContainer = document.querySelector("#container-cards");

        cardContainer.removeChild(cardEl);

    }
})


// Generator function for unique id
const uniqueIdGenerator = function* () {
    let id = 0;

    while (true) {
        yield id;
        id++;
    }
}
// Instantiate the generator function
const uniqueIdFactory = uniqueIdGenerator();

// Callback function to handle adding a card based on the current text area
const addCard = function(event) {
    // use this id to create unique elements
    const id = uniqueIdFactory.next().value;
    // We'll add the new elements to the container-cards
    const cardContainer = document.getElementById("container-cards");
    // capture the text from the text area
    const textAreaText = document.getElementById("textArea").value;
    // update the cardContainer's innerHTML
    cardContainer.innerHTML += `
    <article id="card-${id}" class="card">
        <div class="card-text-area word-wrap">${textAreaText}</div>
        <div class="container-button">
            <button id="delButton-${id}" class="button">DELETE</button>
        <div>
    </article>
    `
}

// Add event listener for the add card button
document.getElementById("button-create").addEventListener("click", addCard)