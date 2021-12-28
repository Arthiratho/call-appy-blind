
// find average
// using reverse method
const nums =[80,60,20,100];
const output = nums.reduce((sum, curr)=>sum+curr, 0);


console.log(output/4);

//expected out 65
//finally got a  answer

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//task
//call, blind, apply

//Call invokes the function and allows you to pass in arguments one by one.
//Apply invokes the function and allows you to pass in arguments as an array.
//Bind returns a new function, allowing you to pass in a this array and any number of arguments.
var student=function(){
    firstName: "arthi",
    lastName: "akshaya",
    fullName : student.fullName
};
console.log(student.fullName());
console.log(student.fullNamme.call(student));
console.log(student.fullName.blind(student));
console.log(student.fullName.apply(student));

//JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not provide a class implementation per se (the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).
