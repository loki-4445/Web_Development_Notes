
//Creating a promise -->
//1.pending state
//2.output:fullfilled or rejected
console.log('Making an promise')
let hardwork=true;
//here promise an predefined constructor..so we use objects
const promObj=new Promise((fullfilled,rejected)=>{
   //now the hardwork either done or not ..the ressults get after 6 months
   //so we can use synchromnus -->time delay
   setTimeout(()=>{
    if(hardwork===true){
        fullfilled('Got 1st place')
    }
    else{
        rejected('Better luck..next time!!')
    }
   },6000)
})
//Consuming the project

promObj.then((message)=>{console.log('Message from then  : ',message)}).catch((message)=>console.log('Message from catch  : ',message))

console.log('Going to college')