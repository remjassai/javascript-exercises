function Smartphone(brand, name, price){
    this.brand = brand;
    this.name = name;
    this.price = price;
}

let iphone = new Smartphone("apple", "iphone", 1299);

let android = new Smartphone("android", "jassai", 2323);

console.log(iphone);
console.log(android);