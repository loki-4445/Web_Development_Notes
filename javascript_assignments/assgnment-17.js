//1.Write  a program to find out the big number of given two numbers.
function big(a,b){
    a>b?console.log("a is greater than b"):console.log("b is greater than a");
}

big(40,31)
big(2,20)
big(3,3)

//2.Write a program to find big one int givrn three numbers
let bigthreefun1=(a,b,c)=>a>b && a>c?a:b>c?b:c;
console.log("among 30,40,34 : ",bigthreefun1(30,40,34))
console.log("among 300,40,34 : ",bigthreefun1(300,40,34))
console.log("among 30,40,340 : ",bigthreefun1(30,40,340))

//3.write a function to find the factors of a givven  number
let facnum=function (a){
    let i=1;
    console.log('the factors of '+a,'are :')
    for(;i<=a;i++)
    {
        if(a%i==0){
            console.log(i)
        }
    }
}
//test case 1:
facnum(20)
//test case 2:
facnum(7)
//test case 3:
facnum(14)

//4.Write a function to check given number is prime or not
function primenumber(a){
    let count=0;
    for(let i=1;i<=a;i++){
        if(a%i==0){
            count++;
        }
    }
    if(count==2)
    return true;
    return false;
}

//test case1:
console.log("is 42 a prime ? :",primenumber(42))
//test case2:
console.log("is 17 a prime ? :",primenumber(17))
//test case3:
console.log("is 7 a prime ? :",primenumber(7))


//5.write a program that prints the even factors of an given number
let evenfactors=(a)=>{
    console.log("Even factors of",+a,"are :")
    for(let i=1;i<=a;i++){
        if(a%i==0 && i%2==0){
            console.log(i)
        }
    }
}
//test case 1:
evenfactors(20)
//test case 2:
evenfactors(70)
//test case 3:
evenfactors(14)

//6.write a function ti recive  a numbet as arg and return the sum of its digits
function sumofdigits(a){
    let a1=a
    let sum=0;
    while(a>0){
        sum+=a%10
        a=parseInt(a/10)
    }
    console.log("The sum of ",+a1,"is :",sum)
}
//test case 1:
sumofdigits(2190)
//test case 2:
sumofdigits(710)
//test case 3:
sumofdigits(819114)