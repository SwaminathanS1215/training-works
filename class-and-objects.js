var Tshirt = /** @class */ (function () {
    function Tshirt() {
    }
    Tshirt.prototype.display = function () {
        var tShirtData = "Name: ".concat(this.name, " \n Brand: ").concat(this.brand, " \n Size: ").concat(this.size, " \n Gender: ").concat(this.gender, " \n Price: ").concat(this.price, " \n Type: ").concat(this.type, " \n Color: ").concat(this.color);
        console.log(tShirtData);
    };
    return Tshirt;
}());
var tShirtObj = new Tshirt();
tShirtObj.name = 'Printed Designer Black';
tShirtObj.brand = 'Craft Tees';
tShirtObj.size = 'XL';
tShirtObj.gender = 'M';
tShirtObj.price = 'Rs. 500.00';
tShirtObj.type = 'Printed';
tShirtObj.color = 'Black';
tShirtObj.display();
