//1.write a program to implement arithematic operations
let a=10;
let b=2;
console.log("Addition : ",a+b )
console.log("Subraction : ",a-b )
console.log("Multiplication : ",a*b )
console.log("Division : ",a/b )
console.log("Modulus : ",a%b )

//2.write a program to test unnary increment annd decrement operators
let c=100;
console.log("Pre-Increamentation : ",++c)
//output : 101 because in pre incremntation the the value will be updated  and then assigned
c=100;
console.log("Post-Increamentation : ",c++)
//output:100 beacause the value will be assigned and then updated if we print that value ..it will incremented
console.log(c)

let d=200;
console.log("Pre-drecemntation : ",--d)
//output : 199 because in pre decreamentation the the value will be updated  and then assigned
d=200;
console.log("Post-Decreamentation : ",d--)
//output:200 beacause the value will be assigned and then updated if we print that value ..it will Decreamnted
console.log(d)

//3.write a program to verify comparision operator.
let e=2;
let f=20;
console.log(e==f)
console.log(e!=f)
console.log(e===f)
let g="20";
console.log(f===g)
console.log(e>f)
console.log(e<f)
console.log(e<=f)
console.log(e>=f)

//4.Wirte the program to find the diifernce between between == and === operators
let v=3;
let u=3;
let w="3";
console.log("v==u :",v==u)
console.log("u==w :",u==w)
//from the above we conclude that the == operator iss only comparing the value of the variable . but not the data type.
console.log("v===u :",v===u)
console.log("v===w :",v===w)
//form the above we conclude that the === operator is comparing the values of the variable along with their data types.

