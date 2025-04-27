//to acess the head
let h=document.head
console.log("Head is  ",h)
//to acess the body
let b=document.body
console.log("body is  ",b)

//to acces the other elemnts we use queuryselctor
let fp=document.querySelector('p')
console.log(fp)
let fp1=document.querySelector('.loki')
console.log(fp1)

//acessing the loki calss chiledrens
//acessing the childerens by parent

console.log(fp1.children[0]) 
console.log(fp1.children[1]) 

//acc esing the parent with the help of childrens 

parentofloki=loki
