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
var TshirtPrivate = /** @class */ (function () {
    function TshirtPrivate() {
    }
    // Setter methods for the attributes
    TshirtPrivate.prototype.setName = function (name) {
        this.name = name;
    };
    TshirtPrivate.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    TshirtPrivate.prototype.setSize = function (size) {
        this.size = size;
    };
    TshirtPrivate.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    TshirtPrivate.prototype.setPrice = function (price) {
        this.price = price;
    };
    TshirtPrivate.prototype.setType = function (type) {
        this.type = type;
    };
    TshirtPrivate.prototype.setColor = function (color) {
        this.color = color;
    };
    // Getter methods for the attributes
    TshirtPrivate.prototype.getName = function () {
        return this.name;
    };
    TshirtPrivate.prototype.getBrand = function () {
        return this.brand;
    };
    TshirtPrivate.prototype.getSize = function () {
        return this.size;
    };
    TshirtPrivate.prototype.getGender = function () {
        return this.gender;
    };
    TshirtPrivate.prototype.getPrice = function () {
        return this.price;
    };
    TshirtPrivate.prototype.getType = function () {
        return this.type;
    };
    TshirtPrivate.prototype.getColor = function () {
        return this.color;
    };
    return TshirtPrivate;
}());
var tShirtObj = new TshirtPrivate();
// Set attributes
tShirtObj.setName('Crushed Designer White');
tShirtObj.setBrand('Craft Tees');
tShirtObj.setGender('M');
tShirtObj.setSize('XL');
tShirtObj.setType(TshirtType.Crushed);
tShirtObj.setPrice('Rs. 500.00');
tShirtObj.setColor('White');
var tShirtData = "\n    Name: ".concat(tShirtObj.getName(), "\n    Brand: ").concat(tShirtObj.getBrand(), "\n    Size: ").concat(tShirtObj.getSize(), "\n    Gender: ").concat(tShirtObj.getGender(), "\n    Price: ").concat(tShirtObj.getPrice(), "\n    Type: ").concat(tShirtObj.getType(), "\n    Color: ").concat(tShirtObj.getColor(), "\n");
console.log(tShirtData);
