"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TshirtType = void 0;
var TshirtType;
(function (TshirtType) {
    TshirtType["Printed"] = "Printed";
    TshirtType["Handmade"] = "Handmade";
    TshirtType["Crushed"] = "Crushed";
    TshirtType["Checked"] = "Checked";
})(TshirtType = exports.TshirtType || (exports.TshirtType = {}));
var TShirt = /** @class */ (function () {
    // Initialize the default values
    function TShirt(id, name, brand, size, gender, price, type, color) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.size = size;
        this.gender = gender;
        this.actualPrice = price;
        this.type = type;
        this.color = color;
    }
    return TShirt;
}());
// Discount Tshirt class
var DiscountTshirt = /** @class */ (function (_super) {
    __extends(DiscountTshirt, _super);
    function DiscountTshirt(id, name, brand, size, gender, price, type, color) {
        return _super.call(this, id, name, brand, size, gender, price, type, color) || this;
    }
    // calculates discount price
    DiscountTshirt.prototype.calculateDiscountedPrice = function () {
        this.discountPrice = this.actualPrice - ((this.actualPrice * 20) / 100);
    };
    // Display the properties of T-Shirt
    DiscountTshirt.prototype.display = function () {
        var tShirtData = "Name: ".concat(this.name, " \n Brand: ").concat(this.brand, " \n Size: ").concat(this.size, " \n Gender: ").concat(this.gender, " \n Type: ").concat(this.type, " \n Color: ").concat(this.color, " \n Actual Price: ").concat(this.actualPrice, " \n Discounted Price: ").concat(this.discountPrice);
        console.log(tShirtData);
    };
    return DiscountTshirt;
}(TShirt));
var tShirtObj = new DiscountTshirt('CT#00001', 'Printed Designer Black', 'Craft Tees', 'XL', 'M', 1200, TshirtType.Crushed, 'Black');
// Derived class attributes
tShirtObj.discountPercentage = 20;
tShirtObj.discountEndsOn = new Date('05/05/2022');
tShirtObj.calculateDiscountedPrice();
tShirtObj.display();
