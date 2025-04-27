//for multiple creation of objects we use bject literals
class Student{
    constructor(sno,name){
        this.sno=sno;
        this.name=name;
    }
    getstudent(){
        console.log("The sno is",this.sno)
        console.log("The name is",this.name)

    }
}
//creating the object for the above class using new keyword
let obj1=new Student(100,"lokes")
let obj2=new Student(200,"pokes")

obj1.getstudent()
obj2.getstudent()
