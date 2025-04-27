// 1. Take a number array and find the sum of elements of it.
//i am gonna use reduce() for this.
let arr=[11,20,33,48,50,60,77,89,92,100]
let res1=arr.reduce((acc,ele)=>acc+ele)
console.log("The sum is : ",res1)


//2. Take a number array and print even numbers of it
//i am gonna use filter() to filter the elements which are even.
let res2=arr.filter((ele)=>ele%2==0)
console.log("The even numbers are:",res2)

//3.Take a number array and print prime  numbers of it.
let arr1=[2, 30, 5, 27, 11, 13, 176, 19, 23, 29]
let res3=arr1.filter(elements=>{
    let count=0;
    for(let i=1;i<=elements;i++){
       if(elements%i==0)
       {
        count++;
       }
    }
    return count==2
})
console.log(res3)

