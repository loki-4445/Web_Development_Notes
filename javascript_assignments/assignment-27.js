let form=document.querySelector("form")
let number=form.children[0]
let btn=form.children[1]


let h2=document.createElement('h2')
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    let facnum=Number(number.value)
    let res=1
    if(facnum>0){
        if(facnum==0 || facnum==1){
            h2.textContent=1
        }
        else{
            for(let i=1;i<=facnum;i++)
                {
                    res=res*i
                }
        h2.textContent=res
            
        }
        document.body.appendChild(h2) 
    }
    else{
       h2.textContent="Invalid Number" 
       document.body.appendChild(h2)

    }
})