class Tshirt {
    name: string;
    brand: string;
    size: string;
    gender: string;
    price: string;
    type: string;
    color: string;

    // Display the properties of T-Shirt
    display() {
        let tShirtData = `Name: ${this.name} \n Brand: ${this.brand} \n Size: ${this.size} \n Gender: ${this.gender} \n Price: ${this.price} \n Type: ${this.type} \n Color: ${this.color}`;

        console.log(tShirtData);
    }
}

let tShirtObj = new Tshirt();

tShirtObj.name = 'Printed Designer Black';
tShirtObj.brand = 'Craft Tees';
tShirtObj.size = 'XL';
tShirtObj.gender = 'M';
tShirtObj.price = 'Rs. 500.00';
tShirtObj.type = 'Printed';
tShirtObj.color = 'Black';

tShirtObj.display();