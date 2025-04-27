//1. Create student, bus , employee and mobile objects with all possible properties 

let student ={
name:'Lokesh',
class:'CSE',
study:"2nd -Btech",
roll:225010547
}
let bus={
    busno:290,
    busstop:'kanuru',
    busfee:4000
}
let employee={
    empid:201,
    company:'IBM',
    salary:96000,
    post:'Manager'

}
//printing these objects
console.log("Student Object")
for(let key in student){
    console.log("Key : ",key," Value:",student[key])
}
console.log("bus Object")
for(let key in bus){
    console.log("Key : ",key," Value:",bus[key])
}
console.log("employee Object")
for(let key in employee){
    console.log("Key : ",key," Value:",employee[key])
}

//2. Create Student object with properties roll number, name, marks(array),address and method to compute aggregate of marks
let students={
    rollnumber:225010547,
    name:'lokesh',
     marks:[49,48,45,47],
     address:'kanuru'
    
}
console.log("Studens Object")
for(let key in students){
    console.log("Key : ",key," Value:",students[key])
}
let n=students.marks.length
let sum=0;
for(let i=0;i<n;i++){
 sum+=students.marks[i]
}
console.log("the average is : ",sum/n)

//3. Create product object with properties product number, product name, model, price and a method to return discount price by receiving the discount percentage as argument.

let product={
    number:93939,
    name:"Hair clip",
    model:'9eb383neu',
    price:690,
}
function discount_func(dis){
    let discount=(dis/100)*product.price
    console.log("The amount you have to pay:",product.price-discount)
}
//calling the dicount function
discount_func(28)