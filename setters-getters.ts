enum TshirtType{
    Printed = "Printed",
    Handmade = "Handmade",
    Crushed = "Crushed",
    Checked = "Checked"
}

class TshirtPrivate {
    private name: string;
    private brand: string;
    private size: string;
    private gender: string;
    private price: string;
    private type: TshirtType;
    private color: string;

    // Setter methods for the attributes
    public setName(name: string) {
        this.name = name;
    }

    public setBrand(brand: string) {
        this.brand = brand;
    }

    public setSize(size: string) {
        this.size = size;
    }

    public setGender(gender: string) {
        this.gender = gender;
    }

    public setPrice(price: string) {
        this.price = price;
    }

    public setType(type: TshirtType) {
        this.type = type;
    }

    public setColor(color: string) {
        this.color = color;
    }

    // Getter methods for the attributes
    public getName() {
        return this.name;
    }

    public getBrand() {
        return this.brand;
    }

    public getSize() {
        return this.size;
    }

    public getGender() {
        return this.gender;
    }

    public getPrice() {
        return this.price;
    }

    public getType() {
        return this.type;
    }

    public getColor() {
        return this.color;
    }

}

let tShirtObj: TshirtPrivate = new TshirtPrivate();

// Set attributes
tShirtObj.setName('Crushed Designer White')
tShirtObj.setBrand('Craft Tees');
tShirtObj.setGender('M');
tShirtObj.setSize('XL');
tShirtObj.setType(TshirtType.Crushed);
tShirtObj.setPrice('Rs. 500.00');
tShirtObj.setColor('White');

const tShirtData = `
    Name: ${tShirtObj.getName()}
    Brand: ${tShirtObj.getBrand()}
    Size: ${tShirtObj.getSize()}
    Gender: ${tShirtObj.getGender()}
    Price: ${tShirtObj.getPrice()}
    Type: ${tShirtObj.getType()}
    Color: ${tShirtObj.getColor()}
`

console.log(tShirtData);


