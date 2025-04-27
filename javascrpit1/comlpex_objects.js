//let define one complex objects like student details

let student= {
    name:'lokesh',
    class:"2nd btech",
    roll:226933030,
    //above are primitive datatypes

    marks:[10,20,30,60],
    address:{
        street:'Gandhi bomma',
        district:'krishna',
        city:"vijayawada"
    },
    getaverage:function(){
        console.log("roll number is ",this.roll)
        //this keyword vadaka pothe adhe student ane object lo chudadhu dhani bayata search chesidhe so use this keyword
    }

}
console.log(student.name)
console.log(student.marks)
console.log(student.marks[3])
//accesing the function
student.getaverage()
//primitive +non-primitive=complex objects



































