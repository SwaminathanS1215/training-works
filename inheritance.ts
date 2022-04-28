export enum TshirtType {
    Printed = "Printed",
    Handmade = "Handmade",
    Crushed = "Crushed",
    Checked = "Checked"
}

class TShirt {
    id: string;
    name: string;
    brand: string;
    size: string;
    gender: string;
    actualPrice: number;
    type: TshirtType;
    color: string;

    // Initialize the default values
    constructor(id: string, name: string, brand: string, size: string, gender: string, price: number, type: TshirtType, color: string) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.size = size;
        this.gender = gender;
        this.actualPrice = price;
        this.type = type;
        this.color = color;
    }
}

// Discount Tshirt class
class DiscountTshirt extends TShirt {
    discountPercentage: number;
    discountPrice: number;
    discountEndsOn: Date;

    constructor(id: string, name: string, brand: string, size: string, gender: string, price: number, type: TshirtType, color: string) {
        super(id, name, brand, size, gender, price, type, color)
    }

    // calculates discount price
    calculateDiscountedPrice() {
        this.discountPrice = this.actualPrice - ((this.actualPrice * 20) / 100);
    }

    // Display the properties of T-Shirt
    display() {
        let tShirtData = `Name: ${this.name} \n Brand: ${this.brand} \n Size: ${this.size} \n Gender: ${this.gender} \n Type: ${this.type} \n Color: ${this.color} \n Actual Price: ${this.actualPrice} \n Discounted Price: ${this.discountPrice}`;

        console.log(tShirtData);
    }
}

let tShirtObj: DiscountTshirt = new DiscountTshirt('CT#00001', 'Printed Designer Black', 'Craft Tees', 'XL', 'M', 1200, TshirtType.Crushed, 'Black');

// Derived class attributes
tShirtObj.discountPercentage = 20;
tShirtObj.discountEndsOn = new Date('05/05/2022');

tShirtObj.calculateDiscountedPrice();
tShirtObj.display();