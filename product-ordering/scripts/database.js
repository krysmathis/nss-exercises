const products = require("./productFactory");
const reviews = require("./reviewFactory");

const database = {};

database.products = products || [];
database.reviews = reviews || [];

module.exports = database;