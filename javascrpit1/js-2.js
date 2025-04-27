let a=40
console.log(a)

function tet(){
    //function scope variable can be acessed within in the function only
    let b=30
    console.log(b)
    //global scopevariable can be accesed throught anywhere of the program
    console.log(a)
    if(a===40){
        let c=30
        //block scope variable can be accesed only in particular block
        return a+b+c
    }
    
}
//function call
tet()