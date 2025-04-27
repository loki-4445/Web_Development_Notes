let a_count=0;
let b_count=0;
let str="aaaabbababababbbbabababaaaa";
for(let i=0;i<str.length;i++){
    if(str[i]=='a'){
        a_count++;
    }
    else{
        b_count++;
    }
}
console.log("The Number of a :",a_count);
console.log("The Number of b :",b_count);


//2.
let string="how are you al      l";
let count=0;
for(let i=0;i<string.length;i++){
    if(string[i]==" "){
        count++;
    }
}
count++;        
console.log(count)