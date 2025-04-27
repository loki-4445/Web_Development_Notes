async function getdata(){
   try{
    let result= await fetch(' https://jsonplaceholder.typicode.com/todos ')
    let data=await result.json()
    return data
   }
   catch(err){
    console.log(err)
   }
}

getdata().then(data=>{

    let h1=document.createElement('h3')
    h1.textContent=JSON.stringify(data)
    //adding to the document
    document.body.appendChild(h1)
    //to console
    console.table(data)
}
)