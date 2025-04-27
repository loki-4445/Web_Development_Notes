//1.to retruive the values 
let test={
    a:10,
    b:20,
    c:30
}
//to print the keys of the object
let test1=Object.keys(test)
console.log(test1)
//to print the values of the object
test1=Object.values(test)
console.log(test1)
//to modify the content in the object
Object.freeze(test)
test.d=40;
console.log(test)
//no modifications are ocuured because we freezed the  object ...so we enable to modifiy the content



//---->
test2={
    x:100,
    y:200,
    z:300
}
//to copy the objects we use
let copied_test2=Object.assign({},test2)
console.log(copied_test2)

//--->
//if we want to merge the test1 and test2 objects to the target objectts we use
let merge=Object.assign({},test1,test2)
console.log(merge)
