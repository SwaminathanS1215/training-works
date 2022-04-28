export enum TshirtType{
    Printed = "Printed",
    Handmade = "Handmade",
    Crushed = "Crushed",
    Checked = "Checked"
}

class Tshirt {
    name: string;
    brand: string;
    size: string;
    gender: string;
    price: string;
    private type: TshirtType;
    private color: string;
}

let tShirtObj: Tshirt = new Tshirt();
tShirtObj.name = 'Printed Designer black';
tShirtObj.brand = 'Craft Tees';
tShirtObj.size = 'XL';
tShirtObj.gender = 'F';
tShirtObj.price = 'Rs. 500.00';

// tShirtObj.type = TshirtType.Checked;
