/**
 * Factory function for the product
 */
let idGen= require("./idGenerator");
const productIdFactory = idGen();

const products = [];

const productFactory = function (title, shortDesc, price, quantity, image) {
    products.push( Object.create(null, {
        "id": {
            value: productIdFactory.next().value,
            enumerable: true
        },
        "title": {
            value: title,
            enumerable: true
        },
        "shortDesc": {
            value: shortDesc,
            enumerable: true
        },
        "price": {
            value: price,
            enumerable: true
        },
        "quantity": {
            value: quantity,
            enumerable: true
        },
        "image": {
            value: image,
            enumerable: true
        }
    }));
};

productFactory(
    "Unilab", 
    "Imagine Timothy Dalton at a school rally?", 
    10.00, 5, "http://via.placeholder.com/150x150");

productFactory(
    "Singletop", 
    "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.", 
    10.00, 5, "http://via.placeholder.com/150x150");

// const product1 = productFactory(
//     "Product1", 
//     "A short description of Product1", 
//     10.00, 5, "http://via.placeholder.com/150x150");

// const product1 = productFactory(
//     "Product1", 
//     "A short description of Product1", 
//     10.00, 5, "http://via.placeholder.com/150x150");


module.exports = products;