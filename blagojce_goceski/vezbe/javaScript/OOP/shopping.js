'use strict';

(function() {
    console.log("Hi");


    // constructor function Product
    function Product (name, price, expiration) {
        this.productID = (Math.floor(Math.random() * 90000) + 10000);
        this.name = name;
        this.price = price.toFixed(2);
        this.expiration = new Date(expiration).toLocaleDateString('en-US');
        this.getInfo = function() {
            // String
            // var productCode = `${this.name[0].toUpperCase()}${this.name[this.name.length-1].toUpperCase()}${this.productID}, ${this.name}, ${this.price}`;
            // return productCode;

            // Array
            var productInfo = [this.name, this.price, this.expiration];
            this.productCode = `${this.name[0].toUpperCase()}${this.name[this.name.length-1].toUpperCase()}${this.productID}`;
            productInfo.unshift(this.productCode);
            return productInfo;
        };
    }


    // constructor function ShoppingBag
    function ShoppingBag () {
        this.listOfProducts = [];
        this.addProduct = function(input) {
            // console.log(input.expiration);
            // console.log(typeof input.expiration);
            if (new Date(input.expiration) >= new Date()) {
                var addProduct = input.getInfo();
                this.listOfProducts.push(addProduct);
            }
        };
        this.averagePrice = function() {
            let sum = 0;
            for (let i = 0; i < this.listOfProducts.length; i++) {
                console.log(this.listOfProducts[i][2]);
                sum += +this.listOfProducts[i][2];
            }
            return (sum / this.listOfProducts.length).toFixed(3);
        };
        this.getMostExpensive = function() {
            var mostExpensivePrice = +this.listOfProducts[0][2];
            var mostExpensiveProduct = this.listOfProducts[0];
            for (let i = 1; i < this.listOfProducts.length; i++) {
                if (+this.listOfProducts[i][2] > mostExpensivePrice) {
                    mostExpensivePrice = +this.listOfProducts[i][2];
                    mostExpensiveProduct = this.listOfProducts[i];
                }
            }
            return mostExpensiveProduct;
        };
        this.calculateTotalPrice = function() {
            let sum = 0;
            for (let i = 0; i < this.listOfProducts.length; i++) {
                sum += +this.listOfProducts[i][2];
            }
            return sum;
        }; 
    }


    // create an product object
    var product01 = new Product('banana', 55, '2023-03-25');
    var product02 = new Product('ananas', 83, '2023-04-11');
    var product03 = new Product('hleb', 90, '2023-01-09');
    var product04 = new Product('vino', 790, '2025-01-09');

    // products info
    console.log(product01.getInfo());
    console.log(product02.getInfo());
    console.log(product03.getInfo());
    console.log(product04.getInfo());

    // shopping
    var shopping = new ShoppingBag();
    shopping.addProduct(product01);
    shopping.addProduct(product02);
    shopping.addProduct(product03);
    shopping.addProduct(product04);
    console.log(shopping.listOfProducts);

    // average product price in the shopping cart
    console.log("Average price of products in the shopping cart:", shopping.averagePrice());

    // most expensive product in the shopping cart
    console.log("Most expensive product in the shopping cart:", shopping.getMostExpensive());

    // total price of the product in the shopping cart
    console.log("Total price:", shopping.calculateTotalPrice());


    // constructor function PaymentCard
    function PaymentCard(balance = 0.00, status = 'active', validDate) {
        this.balance = balance;
        this.status = status;
        this.expirationDate = new Date(validDate);
    }

    // payment cards
    var card1 = new PaymentCard(1000.00, 'active', '5/23/2023');
    var card2 = new PaymentCard(500.00, 'active', '5/23/2023');
    var card3 = new PaymentCard(1000.00, 'inactive', '5/23/2023');
    var card4 = new PaymentCard(1000.00, 'active', '5/23/2022');

    // console.log(card1);
    // console.log(card2);
    // console.log(card3);
    // console.log(card4);


    // checkout and payment
    function checkoutAndBuy(shoppingCart, card) {
        // console.log(shoppingCart.calculateTotalPrice());
        console.log();
        console.log(card);
        if(card.balance < shoppingCart.calculateTotalPrice()) {
            return `There is no enough money on the card. You need ${shoppingCart.calculateTotalPrice() - card.balance} more.`;
        }
        if(card.status == 'inactive') {
            return "Your card is inactive. Please use another card.";
        }
        if(new Date() > new Date(card.expirationDate)) {
            return "Your card has expired. Please use another card.";
        }

        return "The purchase is successful.";
    }


    console.log(checkoutAndBuy(shopping, card1));
    console.log(checkoutAndBuy(shopping, card2));
    console.log(checkoutAndBuy(shopping, card3));
    console.log(checkoutAndBuy(shopping, card4));


})();