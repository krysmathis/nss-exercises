# Interactive Cards and Event Bubbling
In this exercise we want the user to be able to create cards by typing in a text area and clicking a button.

We want the cares to have a delete button on each one that will delete only that card

## TextArea
To access what's typed into the text area
```javascript
    // capture the text from the text area
    const textAreaText = document.getElementById("textArea").value;
```

## Adding a card

There's a text area with a button and with a div area to hold the cards once they are created.

In the javascript, add an event listener to the "create card" button that adds a card based on the text inside the text area.

Looks like: 
![screen shot 2017-10-24 at 9 57 21 am](https://user-images.githubusercontent.com/8272526/31950728-d4ddb81a-b8a1-11e7-86e1-1d71d55efc13.png)

```html
<div class="container-addCard">
        <textarea id="textArea"></textarea>
       <button id="button-create" class="button">Create Card</button>
      </div>
      <div id="container-cards">
        <!-- a place to hold cards -->
      </div>
```

```javascript
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
```

## Event Bubbling

### Logic
When the user clicks within the container-cards area the script will check to see if the event.target.id was one of the delete buttons. If so, it will extract the unique id for the delete button and then find the section tag with the same id and remove it. 

### Caveats
This method relies on there being a unique id for both the button itself and it's section container. 

### The card:
![screen shot 2017-10-24 at 10 11 50 am](https://user-images.githubusercontent.com/8272526/31951530-0015131e-b8a4-11e7-9caa-e1f9aebe73fc.png)


```javascript
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
```