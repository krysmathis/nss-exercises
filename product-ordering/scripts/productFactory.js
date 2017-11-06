/**
 * Factory function for the product
 */
const productIdGenerator = function* () {
    let id = 1;
    while(true){
        yield id;
        id++;
    }
};

const productIdFactory = productIdGenerator();

const productFactory = function (title, shortDesc, price, quantity, image) {
    return Object.create(null, {
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
    });
};

const product1 = productFactory(
    "Unilab", 
    "Imagine Timothy Dalton at a school rally?", 
    10.00, 5, "http://via.placeholder.com/150x150");

const product2 = productFactory(
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

const products = [];
products.push(product1,product2);

module.exports = products;