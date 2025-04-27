//  <!-- example on the incremantations -->
let counter=document.querySelector('.counter')
let btn=document.querySelector('button')

btn.addEventListener("click",()=>{
    counter.textContent=Number(counter.textContent)+1
})

//2.caluclator example
let form=document.querySelector('form')
let num1=form.children[0]
let num2=form.children[1]
let butn=form.children[2]
let h1class=document.querySelector('.h1class')
//manam add click chesthuntee automatic ga relaoda avuthundhe so ala avvakunda undali antee...insert event.preventdefault..by passing event as argument (as response)

form.addEventListener("submit",(event)=>{
    //stop the refresh after submit
    event.preventDefault()
    //unlike the accesing of elements ..input ni value kavali antee use  _____ .value()
    let n1=Number(num1.value)
    let n2=Number(num2.value)
    let sum=n1+n2
    //..modifying the taxt  as result
    h1class.textContent=sum

})

//3.creating the html element by using js
let h1=document.createElement('h1')
h1.textContent="lokesh"
document.body.append(h1)





