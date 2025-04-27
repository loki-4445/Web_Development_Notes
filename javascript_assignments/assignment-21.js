let arr=[10,20,30,40,50,60,70,80,90,100,200]
//1. Find sum of elements of an array 
//we can use reduce method
let res1=arr.reduce((acc,ele)=>acc+ele)
console.log("The Sum of the element of the array : ",res1)


//2. Consider the following array [ 1 ,2 , 3, 4 ] Create new array by adding 10 to first element, 20 to second element , 30 to third element and so on using map() method. [1,2,3,4 ]======>[ 11,22,33,44]
let array=[20,30,40,50,60]
let test1=array.map((element,index)=>{
  return element+(index+1)*10  
});
console.log("The sum is : ",test1)

//3.
let students = [
    { name: "ravi", marks: { maths: 89, physics: 70, chemistry: 88 }},
    { name: "bhanu", marks: { maths: 98, physics: 50, chemistry: 68 }},
    { name: "kiran", marks: { maths: 50, physics: 82, chemistry: 94 }},
];

let highestMarks = { maths: { student: "", marks: 0 }, physics: { student: "", marks: 0 }, chemistry: { student: "", marks: 0 } };

students.forEach(student => {
    Object.keys(student.marks).forEach(subject => {
        if (student.marks[subject] > highestMarks[subject].marks) {
            highestMarks[subject].student = student.name;
            highestMarks[subject].marks = student.marks[subject];
        }
    });
});

console.log("Highest marks in each subject:");
console.log("Maths:", highestMarks.maths.student);
console.log("Physics:", highestMarks.physics.student);
console.log("Chemistry:", highestMarks.chemistry.student);
