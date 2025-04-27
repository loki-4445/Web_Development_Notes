//if we want implement the inheritance (that is common uunave vere vre avtiki use cheyadham) ..so we use prototypes
//let student1={
  //  name:'lokesh',
    //age:'17'
    // class:'cse',
    //address:'kanuru',
    //city:'vijayawada'
//}
//let student2={
  //  name:'vikas',
    //age:'27'
    // class:'cse',
    //address:'kanuru',
    //city:'vijayawada'

//}
//instead of the above we can use the below


//class inheritance
class college{
    constructor(clgname,branch){
        this.clgname=clgname
        this.branch=branch
    }
}
class student3 extends college{
    constructor(clgname,branch,name,age){
        super(clgname,branch)
        this.name=name;
        this.age=age;
    }
}
let std3=new student3('pvpsit','CSE','Lokesh','21')
console.log(std3)
//using the prototype
class College {
    constructor(clgname, branch) {
        this.clgname = clgname;
        this.branch = branch;
    }
}

class Student3 {
    constructor(clgname, branch, name, age) {
        this.clgname = clgname;
        this.branch = branch;
        this.name = name;
        this.age = age;
    }
}
    
// Create an instance of College
const collegePrototype = new College();

// Create an instance of Student13
let std13 = new Student3('pvpsit', 'CSE', 'Lokesh', '21');

// Set the prototype of std13 to collegePrototype
Object.setPrototypeOf(std13, collegePrototype);

// Now std13 has access to properties and methods of the College class
console.log(std13);




