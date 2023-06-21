const db = require('./data/db.json');

class Store{

    static listProducts() {
        let products = [...db.products];
        return products;
    }

    // method that fetches single product by its ID
    static singleProduct(id) {

    }
}

module.exports = Store