//to print hello world
console.log('Hello World!');
var a=20;
let b=30;
const c=30;
console.log("The value of a is:",a)
console.log("The data type of a is:",typeof a)
a='hello'
console.log("The value of a is:",a)
console.log("The data type of a is:",typeof a)
a=123000.45
console.log("The value of a is:",a)
console.log("The data type of a is:",typeof a)
a=true
console.log("The value of a is:",a)
console.log("The data type of a is:",typeof a)
//here the a doesnot ahve any fixed data type it will just make the data type depending upon the value..it is called dyanamic

console.log("The value "+b+" is intilised")
console.log(b)
console.log(c)
//creation of arrays and objects
//number array
let ar=[1,2,3,4,5];
//char array or string array
let names=['loki','poki','moki'];
console.log("the data type of ar is:",typeof ar)
//output:object

//creation of objects
let obj={
    name:'lokesh', //property-1
    age:21, //prperty-2
    class:'btech', //proprty-3
}
console.log("the type of obj is :",typeof obj)

//operators

//assignment operators
let z=20;
let y='20';
console.log(z==y);
//output:true
console.log(z===y);
//output:false
//because === compares the datatype also but not ==

let w=40;
console.log(z>40 && w<50)
console.log(z<40 || w>50)

//LOOPS





//functions
//function declaration
function findSum1(a,b){
    return a+b;
}
//function expression
let findSum2=function (a,b){
    return a+b;
}
//arrow function
let findSum3=(a,b)=>a+b;
//another arrow function
let findBig=(a,b)=>{
    if(a>b){
        console.log("a is big");
    }
    else{
        console.log("b is big");
    }
}
//accesing them
console.log("the value of 10+20 :",findSum1(10,20))
console.log("the value of 50+20 :",findSum2(50,20))
console.log("the value of 50+60 :",findSum3(50,60))
//accesing the findbig function
findBig(10,20)
