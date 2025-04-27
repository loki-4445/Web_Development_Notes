let module1=require('./module1')
let module2=require('./module2')

console.log(module1)
console.log(module2)

//accessing the module1
console.log(module1.arr)
console.log(module1.arr[2])
console.log(module1.add(10,20))


///accesiing the module2
console.log(module2.person)
console.log(module2.person.name)
console.log(module2.person.pNumber)
