//defining the javascript object
let person={
    name:"LOkesh",
    age:21,
    salary:"Given"
}
console.log("THe java script : ",person)
//transform javascript to json format
//by using stringify
let person1=JSON.stringify(person)
console.log(person1)
//transform json to js
//by suing parse
let person2=JSON.parse('{"name":"LOkesh","age":21,"salary":"Given"}')
console.log(person2)