//all primitive data types are immutable ...they cannnot change their value

//1.
let x=100
console.log('value of x is :',x)

//2.
let y=200
y+100
console.log('Value of y is : ',y)
//output:300 they wonot update ...instead the memmory will be allocated ...but reference is not allocated

//3.
let z=400
z=z+200
console.log('Value of z is : ',z)
//ouput:600
//the value of 4000 is frist created and 600 also created and refernce is given to 600 ...hence this 400 remains garbe iss collected  by garbage collector.
