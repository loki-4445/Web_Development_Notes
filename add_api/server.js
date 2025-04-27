
console.log("Hi this is an log msg")
console.info('hi this is info')
console.warn('hi this is wanr msg')
console.error("thi is an eroor")
console.time('process')
console.assert(1==2,"this is an asset failed, 1!=2")
for(let i =0;i<1000000;i++){

}
console.timeEnd("process")
const furits=[{
    name:"apple",
    color:"red"
},
{
    name:"banana",
    color:"yellow"
},
{
    name:"grape",
    color:"purple"
},
{
    name:"orange",
    color:"orange"
},
{
    name:"kiwi",
    color:"green"
}]
console.table(furits)


console.group("Names")
console.log("apple")
console.log("banana")
console.log("grape")
console.groupEnd()