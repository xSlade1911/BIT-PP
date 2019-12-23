"use strict"

function Product(name, price, expirationDate) {
    this.name = name;
    this.price = price;
    this.expirationDate = expirationDate;
    this.ID = Math.round(Math.random() * 90000 + 10000)
    this.getInfo = function () {
        return this.name.charAt(0).toUpperCase() + this.name.charAt(this.name.length - 1).toUpperCase() + this.ID + ", " + this.name + ", " + this.price;
    }
}

var pro = new Product("banana", 130, new Date());

function ShoppingBag() {
    this.listOfProducts = [];
    this.addProduct = function (product) {
        this.listOfProducts.push(product);
    }
    this.calculateTotalPrice = function () {
        var total = 0;
        for (var i = 0; i < this.listOfProducts.length; i++) {
            total += this.listOfProducts[i].price;
        }
        return total;
    }
    this.getAverage = function () {
        var average = this.calculateTotalPrice() / this.listOfProducts.length;
        return average;
    }
    this.getMostExpensive = function () {

        // var mostExpensive = Math.max(...listOfProducts);
        var mostExpensive = this.listOfProducts[0];
        for (var i = 0; i < this.listOfProducts.length; i++) {
            if (mostExpensive.price < this.listOfProducts[i].price) {
                mostExpensive = this.listOfProducts[i];

            }
        }
        return mostExpensive;
    }
}

function PaymentCard(accountBalance, validUntilDate) {
    this.accountBalance = accountBalance;
    this.validUntilDate = validUntilDate;

    this.checkIfValid = function () {
        var today, expiryDate;
        expiryDate = new Date(this.validUntilDate);
        today = new Date();
        console.log(expiryDate);
        console.log(today);

        if (expiryDate < today) {
            console.log("The expiry date is before today's date. Please select a valid expiry date");
            return false;
        }

        return true;
    }

    this.status = this.checkIfValid();



}

function checkOutAndBuy(nekaKorpa, nekaKartica) {
    var totalPrice = nekaKorpa.calculateTotalPrice();
    console.log(totalPrice);
    console.log(nekaKartica.accountBalance);

    if (nekaKartica.status === false) {
        return "Your payment card has expired. Purchase is impossible!";
    } else if (totalPrice > nekaKartica.accountBalance) {
        return "You don't have enough money on your card! The missing amount is: " + (totalPrice - nekaKartica.accountBalance);
    } else {
        nekaKartica.accountBalance = nekaKartica.accountBalance - totalPrice;
        return "Your purchase is successful!" + " The remaining amount of money on your card is: " + (nekaKartica.accountBalance);
    }
}




var sljiva = new Product("sljiva", 9000, new Date());
var ananas = new Product("ananas", 50, new Date());

var korpa = new ShoppingBag();
var kartica = new PaymentCard(5000, "2018-02-23");


korpa.addProduct(sljiva);
korpa.addProduct(ananas);

console.log(kartica);

var daLiMoguDaKupim = checkOutAndBuy(korpa, kartica);
console.log(daLiMoguDaKupim);

