"use strict";
exports.__esModule = true;
exports.TshirtType = void 0;
var TshirtType;
(function (TshirtType) {
    TshirtType["Printed"] = "Printed";
    TshirtType["Handmade"] = "Handmade";
    TshirtType["Crushed"] = "Crushed";
    TshirtType["Checked"] = "Checked";
})(TshirtType = exports.TshirtType || (exports.TshirtType = {}));
var Tshirt = /** @class */ (function () {
    // Initialize default values
    function Tshirt(name, brand, size, gender, price, type, color) {
        this.name = name;
        this.brand = brand;
        this.size = size;
        this.gender = gender;
        this.price = price;
        this.type = type;
        this.color = color;
    }
    // Display the properties of T-Shirt
    Tshirt.prototype.display = function () {
        var tShirtData = "Name: ".concat(this.name, " \n Brand: ").concat(this.brand, " \n Size: ").concat(this.size, " \n Gender: ").concat(this.gender, " \n Price: ").concat(this.price, " \n Type: ").concat(this.type, " \n Color: ").concat(this.color);
        
        console.log(tShirtData);
    };
    return Tshirt;
}());
var tShirtObj = new Tshirt('Printed Designer Black', 'Craft Tees', 'XL', 'M', 'Rs. 500.00', TshirtType.Crushed, 'Black');
tShirtObj.display();
