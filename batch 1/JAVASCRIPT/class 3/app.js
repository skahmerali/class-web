var number = 81;
// number = 90
// if (number > 90) {
//     alert("number is greater than 90 ");

// } else {
//     alert("number is less than 90")
// }
// var answer = "karachi"
// var userAnswer = prompt("what is ur city name ? ")

// if (userAnswer === answer) {
//     alert("welcom to karachi");
// }
// else {
//     alert("sorry u r not in karachi ! ");
// }
var students = [1, 2, 3,"ahmer", 4, 5, 6];
console.log(students);
students.splice(2 , 5 ,"ahmer" ,"2")
console.log(students);

// console.log(students.pop());
// console.log(students);
// console.log(students.push("ahsan","Mushtaq"));
// console.log(students);

for(var i=0 ; i <= 7; i++ ){
    if(students[i]==="ahmer"){
        console.log("welcome to " , students[i])
    }
}
