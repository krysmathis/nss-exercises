// attach review to the item
// pass in the product and get the review
const database = require("./database");
const reviewComponentFactory = require("./reviewComponentFactory");
const productComponentFactory = require("./productComponentFactory");

const generateProducts = () => {
    
    // updated
    const products = database.products || [];
    const reviews = database.reviews || [];
    
    products.forEach(
        product => {
        //print out to the dom
            let prodEl = productComponentFactory(
                product.title,
                product.shortDesc,
                product.price,
                product.quantity,
                product.image
            );

            const matchingReviews = reviews.filter(review =>
                review.productId === product.id
            );
            
            // create a wrapper section for reviews
            const reviewWrapper = document.createElement("div");
            reviewWrapper.className = "product__reviewWrapper";
            reviewWrapper.innerHTML = "Reviews:";
            
            prodEl.appendChild(reviewWrapper);

            matchingReviews.forEach(review => {
                reviewWrapper.appendChild(
                    reviewComponentFactory(review.review)
                );
            });
        }
    );
};

module.exports = generateProducts;
