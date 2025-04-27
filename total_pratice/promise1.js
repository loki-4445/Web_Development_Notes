let hardwork=true
setTimeout(() => {
    let proobj=new Promise ((full,rej)=>{
        if(hardwork==true){
            full('Your hardwork leading to sucess')
        }
        else{
            rej('Better luck next time')
        }
        })
        proobj.then((message)=>console.log(message)).catch((message)=>console.log(message))
}, 5000);
console.log("Caluclating your results . . . .")
