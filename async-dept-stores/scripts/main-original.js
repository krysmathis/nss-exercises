$(document).ready(function(somefunction) {

    // HTML representation of the data
    const displayEl = $(".products");
    displayEl.innerHTML = "hasn't run yet";
    displayHTML = "";

    const discountsEl = $(".discounts");
    
    $.ajax({
        "url": "../products.json",
        "method": "GET"
    }).then(
        function(productsDB){
            $.ajax({
                "url": "../categories.json",
                "method": "GET"
            }).then(
                function(categoryDB){

                    products = productsDB.products;
                    categories = categoryDB.categories;

                    products.forEach(product => {
                        let productCategory = categories.find(c=> c.id === product.category_id);
                        displayHTML += `<h1>${product.name}</h1>
                        <p>Price: ${product.price}</p>
                        <p>Category: ${productCategory.name}</p>`
                    })
                    
                    // display the select options
                    discountsEl.append("<option value='' selected='selected'></option>")
                    categories.forEach(category => {
                        discountsEl.append(`<option value="${category.season_discount}">${category.season_discount}</option>`);
                    })
                
                displayEl.html(displayHTML);

        })
            
    })




})
