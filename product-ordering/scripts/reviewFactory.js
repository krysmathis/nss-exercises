const reviewIdGenerator = function* () {
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
};

// initiate id gen
const reviewIdFactory = reviewIdGenerator();
// append to review array
const reviews = [];

const reviewFactory = function(productId,review) {
    reviews.push( Object.create(null, {
        "id": {
            value: reviewIdFactory.next().value,
            enumerable: true
        },
        "productId": {
            value: productId,
            enumerable: true
        },
        "review": {
            value: review,
            enumerable: true
        }    
    }));
};

// review factory
reviewFactory(1,"Before they sold out chambray health goth narwhal hot chicken waistcoat jean shorts small batch. Edison bulb lo-fi squid marfa vape kogi man bun meh gentrify ennui meggings portland. Pork belly tousled tote bag sriracha stumptown roof party thundercats snackwave. Letterpress wayfarers literally, next level air plant vinyl synth salvia intelligentsia freegan mlkshk dreamcatcher asymmetrical banjo roof party. Photo booth lyft fam, butcher readymade VHS selfies brunch green juice stumptown literally crucifix hoodie succulents master cleanse. Blog kale chips semiotics hammock af tousled. Ennui migas kombucha letterpress lyft, banjo hashtag palo santo seitan hammock succulents ramps YOLO beard adaptogen.");
reviewFactory(1, "Tilde migas fam four loko food truck schlitz banh mi cardigan fanny pack listicle craft beer mumblecore. Tattooed aesthetic listicle authentic. Cred scenester hella tilde franzen cloud bread readymade roof party occupy. Narwhal subway tile enamel pin helvetica hoodie, chartreuse jianbing cardigan VHS ramps. Shabby chic raw denim bicycle rights poke, wayfarers brooklyn stumptown listicle occupy palo santo taxidermy venmo street art mustache selvage. IPhone banjo kitsch pabst street art thundercats raclette.");
reviewFactory(1, "Gochujang iceland taiyaki, four loko next level franzen cloud bread actually shaman tote bag chartreuse paleo migas. Woke jianbing snackwave poutine celiac small batch meditation. Chicharrones blog meh shaman jean shorts kale chips gluten-free 90's shabby chic tote bag lumbersexual health goth. Aesthetic next level readymade thundercats farm-to-table taiyaki polaroid occupy retro la croix disrupt freegan. Direct trade jianbing normcore bespoke 3 wolf moon farm-to-table. Banjo humblebrag ugh tofu chicharrones gluten-free.");
reviewFactory(2,"Before they sold out chambray health goth narwhal hot chicken waistcoat jean shorts small batch. Edison bulb lo-fi squid marfa vape kogi man bun meh gentrify ennui meggings portland. Pork belly tousled tote bag sriracha stumptown roof party thundercats snackwave. Letterpress wayfarers literally, next level air plant vinyl synth salvia intelligentsia freegan mlkshk dreamcatcher asymmetrical banjo roof party. Photo booth lyft fam, butcher readymade VHS selfies brunch green juice stumptown literally crucifix hoodie succulents master cleanse. Blog kale chips semiotics hammock af tousled. Ennui migas kombucha letterpress lyft, banjo hashtag palo santo seitan hammock succulents ramps YOLO beard adaptogen.");
reviewFactory(2, "Tilde migas fam four loko food truck schlitz banh mi cardigan fanny pack listicle craft beer mumblecore. Tattooed aesthetic listicle authentic. Cred scenester hella tilde franzen cloud bread readymade roof party occupy. Narwhal subway tile enamel pin helvetica hoodie, chartreuse jianbing cardigan VHS ramps. Shabby chic raw denim bicycle rights poke, wayfarers brooklyn stumptown listicle occupy palo santo taxidermy venmo street art mustache selvage. IPhone banjo kitsch pabst street art thundercats raclette.");
reviewFactory(2, "Gochujang iceland taiyaki, four loko next level franzen cloud bread actually shaman tote bag chartreuse paleo migas. Woke jianbing snackwave poutine celiac small batch meditation. Chicharrones blog meh shaman jean shorts kale chips gluten-free 90's shabby chic tote bag lumbersexual health goth. Aesthetic next level readymade thundercats farm-to-table taiyaki polaroid occupy retro la croix disrupt freegan. Direct trade jianbing normcore bespoke 3 wolf moon farm-to-table. Banjo humblebrag ugh tofu chicharrones gluten-free.");

module.exports = reviews;