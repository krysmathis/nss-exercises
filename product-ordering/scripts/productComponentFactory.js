const productComponentFactory = function(title, shortDesc, price, quantity, image){
    
    // wrapper
    const wrapper = document.createElement("article");
    wrapper.className = "product";
    document.querySelector(".products").appendChild(wrapper);
    // title
    const productTitle = document.createElement("header");
    productTitle.className = "product__title";
    productTitle.innerHTML = title;
 
    // desc
    const productDesc = document.createElement("div");
    productDesc.className = "product__desc";
    productDesc.innerHTML = shortDesc;

    // price
    const productPrice = document.createElement("div");
    productPrice.className = "product__price";
    productPrice.innerHTML = `Price: ${price}`;

    // quantity
    const productQuantity = document.createElement("div");
    productQuantity.className = "product__quantity";
    productQuantity.innerHTML = `Quantity: ${quantity}`;

    // image
    const productImage = document.createElement("div");
    productImage.className = "product__image";
    const img = document.createElement("img");
    img.src = image;
    productImage.appendChild(img);

    wrapper.appendChild(productTitle);
    wrapper.appendChild(productDesc);
    wrapper.appendChild(productPrice);
    wrapper.appendChild(productQuantity);
    wrapper.appendChild(productImage);
    
    return wrapper;
};

module.exports = productComponentFactory;