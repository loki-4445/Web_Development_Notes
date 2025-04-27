let string = "aaaabbababababbbbabababaaaa";
let acount = 0;
let bcount = 0;

for(let index = 0; index < string.length; index++) {
    let c = string[index];
    if (c == 'a') {
        acount++;
    } else if (c == 'b') {
        bcount++;
    }
}

console.log("The frequency of a's", acount);
console.log("The frequency of b's", bcount);

//2.
function frecount(a){
    let count=0;
    for(let i=0;i<a.length;i++){
        let c=a[i];
        if(c==" "){
           count=count+1
        }
    }
    return count+1
    //to consider last one 
}
let string1="how are you mohit"
console.log("The number of words are : ",frecount(string1))