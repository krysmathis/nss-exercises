const reviewComponentFactory = function(review) {
    const div = document.createElement("div");
    div.className = "product__review";
    div.innerHTML = review;
    return div;
};

module.exports = reviewComponentFactory;