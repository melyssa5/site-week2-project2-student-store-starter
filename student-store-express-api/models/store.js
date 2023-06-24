const db = require('./data/db.json');

class Store{

    static listProducts() {
        let products = [...db.products];
        return products;
    }

    static listPurchases() {
        let purchases = [...db.purchases];
        return purchases;
    }


    // method that fetches single product by its ID
    static singleProduct(id) {

    }

    static addPurchase(purchase){
        let products = [...db, db.purchases.push(purchase)]
        return products
    }
}

module.exports = Store