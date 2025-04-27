class Employee {
    constructor(name, age, basic) {
        this.name = name;
        this.age = age;
        this.basic = basic;
    }

    getSalary() {
        return this.basic;
    }
}

// Create instances of Employee
let obj1 = new Employee('lokesh', '21', '50000');
let obj2 = new Employee('chaitu', '19', '30000');
let obj3 = new Employee('nani', '15', '70000');
let obj4 = new Employee('villian', '17', '20000');
let obj5 = new Employee('Hero', '23', '90000');

// Store all objects in an array
let employees = [obj1, obj2, obj3, obj4, obj5];

// Loop through each object and print details
employees.forEach(employee => {
    console.log("Name: " + employee.name);
    console.log("Age: " + employee.age);
    console.log("Basic Salary: " + employee.basic);
    console.log("Salary: " + employee.getSalary());
    console.log("-----");
});


// 2. Create Product class and add properties brand, price, model and add getDiscountPrice method to its prototype. Create 5 Products objects and print their discount price.
class product {
    constructor(brand,price,model){
        this.brand=brand;
        this.price=price
        this.model=model
    }
    getDiscountPrice(dis){
        return this.price-this.price*dis/100
    }
}

let p1=new product('Shoes',3000,'jdefiifu')
let p2=new product('Bag',2000,'dsffu')
let p3=new product('Pant',1200,'dsdfd')
let p4=new product('Shirt',3230,'sdgffd')
let p5=new product('T-shirt',2900,'wrsgrga')
console.log(p1)
console.log(p2)
console.log(p3)
console.log(p4)
console.log(p5)
console.log("Price after Discount for p1 :",p1.getDiscountPrice(15))
console.log("Price after Discount for p2 :",p2.getDiscountPrice(35))
console.log("Price after Discount for p3 :",p3.getDiscountPrice(25))
console.log("Price after Discount for p4 :",p4.getDiscountPrice(20))
console.log("Price after Discount for p5 :",p5.getDiscountPrice(10))




