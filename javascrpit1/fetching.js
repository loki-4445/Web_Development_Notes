//fake apis anne search chey    
//json palce holder
//akda post ,commentss,images ane untai
//click chesthe akkda url undhe kadha adhe endpoint ana mata
function getposts(){
    //by default fetch andhe promis so then,catch is provided
fetch('https://jsonplaceholder.typicode.com/posts')
//response from fetching the data should be converted into the json format
.then((res)=>res.json())
//this response has in bulit promise attributes so again create then
.then((posts)=>console.table(posts))
//catch frrom fetch ..if any error occur
.catch((mes)=>console.log(mes))
}
//calling function
getposts()




//2.instead of using the then or catch simpy use async and await
//instead their is no error handiling so use try and ccatc h for them
async function getposts2(){
    try{
        //like avve aithe time taking process avuthai oo dhaniki manam await pedhatam ..and function anne munndhu async anne define cehsstham
    let res=await fetch('https://jsonplaceholder.typicode.com/posts')
    let data=await res.json()
    console.log(data)
}
catch(err){ 
    console.log(err)
}
}
getposts2()
