function Phone(brand, price, color, glass) {
	this.brand = brand;
	this.price = price;
	this.color = color;
  this.protection = glass;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " and is protected by " + this.protection +".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "nothing");
var SamsunggalaxyS6 = new Phone ("Samsung", 3000, "black", "some plastic");
var OnePlusOne = new Phone ("One Plus", 1500, "pink", "Gorilla Glass");

iPhone6S.printInfo();
SamsunggalaxyS6.printInfo();
OnePlusOne.printInfo();
