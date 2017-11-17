$(document).ready(function() {
    // Initialize the page
    getProducts(updateDOM);

    // async function to pull JSON data
    function getProducts(callback) {
        
        let products = [];
        let categories = [];

        $.ajax({
            "url": "data/products.json",
            "method": "GET"
        })
        .then(function(productsData) 
        {
            products = productsData.products;
            $.ajax({
                "url": "data/categories.json",
                "method": "GET"
            })
            .then(function(categoryData) {            
                categories = categoryData.categories;
                const selection = $(".discounts__selection").val();
                callback(products,categories,selection);
            })
        }
    )}

    function updateDOM(products,categories,selection) {

        // process discount and selection options
        category  = categories.find(c=> c.season_discount === selection) || {id: null, discount: 0};
        const category_id = category.id;
        const discount = 1 * (1-category.discount.toPrecision());

        // get elements to use for the display
        const displayEl = $(".products");
        const discountsEl = $(".discounts__selection");

        // clear the existing HTML
        let displayHTML = "";
        products.forEach(product => {
            let productCategory = categories.find(c=> c.id === product.category_id);
            // Not discounted
            if (!category_id || category_id !== product.category_id) {
                displayHTML += `<h1>${product.name}</h1>
                <p>Price: $${product.price}</p>
                <p>Category: ${productCategory.name}</p>`
            } else {
                let discountedPrice = (product.price * discount).toFixed(2);
                displayHTML += `<h1>${product.name}</h1>
                <p class="product__price--discounted">Price: $${discountedPrice} Regular price: $${product.price} a ${((1-discount)*100).toFixed(0)}% discount!</p>
                <p>Regular price: ${product.price}</p>
                <p>Category: ${productCategory.name}</p>`
            }
        })
        displayEl.html(displayHTML);
        
        // Refresh the select options to show the properly selected option
        discountsEl.empty();
        discountsEl.append("<option value=''></option>")
        categories.forEach(category => {
            if (!category_id || category_id !== category.id) {
                discountsEl.append(`<option value="${category.season_discount}">${category.season_discount}</option>`);
            } else { // if the category was selected update the selected attribute
                discountsEl.append(`<option value="${category.season_discount}" selected>${category.season_discount}</option>`);                
            }
        })
    }
    
    // event listener for the selector...
    $(".discounts").change(function(e) {
        // repull the data
        getProducts(updateDOM);
    })
});





