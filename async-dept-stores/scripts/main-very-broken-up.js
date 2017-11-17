

$(document).ready(function() {
    // globals
    let products = [];
    let categories = [];

    function getProducts(next){
        $.ajax({
            "url": "../products.json",
            "method": "GET"
        })
        .then(function(productsDB) 
        {
            products = productsDB.products;
            console.log('moving to next');
            next(updateDOM);
        });
    };

    function getCategories(next) {
        $.ajax({
            "url": "../categories.json",
            "method": "GET"
        }).then(function(categoryDB) {            
            categories = categoryDB.categories;
            next();
        });
    }

    function updateDOM(discount, category_id) {
        // get elements to use
        const displayEl = $(".products");
        const discountsEl = $(".discounts__selection");
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
        
        // Refresh the select options
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
    
    const loadData = () => {
        getProducts(getCategories);
    };

    loadData();
    
    // event listener
    $(".discounts").change(function(e) {
        const selection = e.target.value;
        const category  = categories.find(c=> c.season_discount === selection);
        const discount = 1 * (1-category.discount.toPrecision());
        updateDOM(discount, category.id)
    })
});





