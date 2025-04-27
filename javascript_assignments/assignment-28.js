let form = document.querySelector('form');
let res = document.querySelector('.res');
let number1 = document.getElementById('num1');
let number2 = document.getElementById('num2');
let add = document.querySelector('.add');
let sub = document.querySelector('.subtract');
let mul = document.querySelector('.multiply');
let div = document.querySelector('.divide');

//display=document.createElement('h2')
add.addEventListener('click',(event)=>{
    event.preventDefault()
    let n1=parseFloat(number1.value)
    let n2=parseFloat(number2.value)
    let final=n1+n2
    res.value=final

})

sub.addEventListener('click',(event)=>{
    event.preventDefault()
    let n1=parseFloat(number1.value)
    let n2=parseFloat(number2.value)
    let final=n1-n2
    res.value=final

})

mul.addEventListener('click',(event)=>{
    event.preventDefault()
    let n1=parseFloat(number1.value)
    let n2=parseFloat(number2.value)
    let final=n1*n2
    res.value=final

})

div.addEventListener('click',(event)=>{
    event.preventDefault()
    let n1=parseFloat(number1.value)
    let n2=parseFloat(number2.value)
    let final=n1/n2
    res.value=final

})


