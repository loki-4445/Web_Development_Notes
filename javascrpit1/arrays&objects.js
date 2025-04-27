//array intilisstion
let elements=[20,30,10,30,40]
//of string type
let names=['lokesh','sreekar','subhash']
//printing array
console.log(elements)
//printing individually
console.log(names[1])
console.log(names[2])
//if it is uot of buonds it shows error as uot of bounds
console.log(names[3])

//if we wants to insetr the elemnt in the beging of the array..use unshift(value1,value2,...)
elements.unshift(1)
elements.unshift(2)
console.log(elements)
//output : (7) [2, 1, 20, 30, 10, 30, 40]

//if i want to insert at the end of the elemnts..we use push(value1,value2,....)
elements.push(50)
elements.push(60)
console.log(elements)
//output:(9) [2, 1, 20, 30, 10, 30, 40, 50, 60]

//if we want to insert the element on idex based we use spilce(index_of_the elemt,how many wants to delete,value ofthe elements)
//eg:1->i want to insert the element at index 3;of value 100[index starts from 0]
elements.splice(3,0,100)
console.log(elements)
//output:(10) [2, 1, 20, 100, 30, 10, 30, 40, 50, 60]



//deletion of elemnts

//at begining
//we use shift() to delete at beging
elements.shift()
console.log(elements)
//output: (9) [1, 20, 100, 30, 10, 30, 40, 50, 60]


//at end
//we use pop()
elements.pop()
console.log(elements)
//output : (8) [1, 20, 100, 30, 10, 30, 40, 50]
elements.pop()
console.log(elements)
//output : (7) [1, 20, 100, 30, 10, 30, 40]

//at index based
elements.splice(3,1)
//i said that to remove  this (1) elent at index three.
console.log(elements)
//output : (6) [1, 20, 100, 10, 30, 40]

elements.splice(4,2)
console.log(elements)
//output :  [1, 20, 100, 10]
//index 4 nuchii 2 elements remove cheyyana

elements.splice(1,1,50)
console.log(elements)
//output : (4) [1, 50, 100, 10]
//in place of index 1 i had told to reve the value and place 50 elent in it

elements.splice(2,2,10,40)
console.log(elements)
//output : (4) [1, 50, 10, 40]
//inplace of index (2,3)-->(10,40) are placed




//objects

//insertion of the key value
let person={
    name:"lokesh",
    id:225010547
}

//for iteration of keys and values simple give 
console.log(person)

//for ierations of values
//1.indivdually use,
console.log(person.name)
//or 
console.log(person['name'])

//2.by dynamically use

//for-in loop

for(let key in person){
    //for the keys
console.log(key)
//for the values
console.log(person[key])
}

//for insertion use 
person.city='hyd'
console.log(person.city)
//for deletion use
delete person.city
console.log(person)

//for updation
person.name='loki'
console.log(person.name)





