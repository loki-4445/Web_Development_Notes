//it is very easy to create the data copy for the primitive
let data=20;
let datacopy=data
data=600
console.log(data)
console.log(datacopy)

//non primitive datatypes
//1.we usse 
let test={
    a:20,
    b:30
}

let test_copy1=({},test)
console.log(test_copy1)
 
test.a=30
console.log(test)
console.log(test_copy1)

//2.we use
let test_copy2={...test}
// ... is an spread operator 
test_copy1.a=300
console.log(test)
console.log(test_copy1)