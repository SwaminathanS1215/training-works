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
    type: TshirtType;
    color: string;

    // Initialize default values
    constructor(name: string, brand: string, size: string, gender: string, price: string, type: TshirtType, color: string) {
        this.name = name;
        this.brand = brand;
        this.size = size;
        this.gender = gender;
        this.price = price;
        this.type = type;
        this.color = color;
    }

    // Display the properties of T-Shirt
    display() {
        let tShirtData = `Name: ${this.name} \n Brand: ${this.brand} \n Size: ${this.size} \n Gender: ${this.gender} \n Price: ${this.price} \n Type: ${this.type} \n Color: ${this.color}`;

        console.log(tShirtData);
    }
}

let tShirtObj = new Tshirt('Printed Designer Black', 'Craft Tees', 'XL', 'M', 'Rs. 500.00', TshirtType.Crushed, 'Black');

tShirtObj.display();