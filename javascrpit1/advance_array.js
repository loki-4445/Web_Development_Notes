//1.filter -it filters the content that we need in the array
let b=[20,70,54,10,65,90,19]
//removing elements less than 50
let result3=b.filter((element)=>element>50)
console.log(result3)
//removing the odd numbers
let result4=b.filter((element)=>element%2==0)
console.log(result4)


//2.map(modify)
let arr=[10,11,20,21,30,31,40,50,-1]
let result1=arr.map((element)=>element+10)
console.log(result1)
//divding the elemnts in arr with 2
let result5=arr.map((element)=>element/2)
console.log(result5)

//3.for each ->to iterate the array with or without index
//without index
arr.forEach((element)=>console.log("Element : ",element))
//with index
arr.forEach((element,index)=>console.log("Element : ",element," Index : ",index))

//4.find()-->it finds the element and returns that element when found else return undefined
let find_ele=arr.find((element)=>element==40)
console.log(find_ele)
//output:40
find_ele=arr.find((element)=>element==410)
console.log(find_ele)
//oytput:undefined

let find_element=arr.findIndex((element,index)=>element==40)
console.log(find_element)
//output:6
find_element=arr.findIndex((element,index)=>element==410)
console.log(find_element)
//output:-1

//reduce()--->
//it reduces the array elements into single value
//to find the sum of elements in the array.
let sum=arr.reduce((element,accumulator)=>element+accumulator)
console.log("The sum is :",sum)

//to find the minimum element in the arr
let min=arr.reduce((element,accumulator)=>element>accumulator?accumulator:element)
console.log("The minimum element is :",min)

















//problems-->

//problem-1
let emps=[
{
    eno:100,
    name:'ravi',
    age:21,
    salary:2000
},
{
    eno:200,
    name:'bhanu',
    age:19,
    salary:5000
},
{
    eno:300,
    name:'vikas',
    age:21,
    salary:30000
}
]
//find the youngest empolyee
let result2=emps.reduce((acc,element)=>acc.age<element.age?acc:element)

console.log("The youngest employee is :",result2.name)

//give increamentation of 5000
let reult3=emps.map((element)=>element.salary+5000)