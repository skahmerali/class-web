// var std3=prompt("enter ur name ")
// var std4=prompt("enter ur name ")
// var students = [
//     "ahsan", "aneeq" , std3 , std4
// ]
// document.write(students);
// console.log(students);
// students.pop()
// console.log(students);
// students.push("ahmer")
// console.log(students);
// students.splice(0,2)
// console.log(students);
// var table = prompt("Enter a Table number :")
// for (var i = 1 ; i<=10; i++){
// document.write(table + "*" + i + "=" + table*i +"<br />")
// }
var column = Number(prompt("how many columns do u need for ur star pattern "))
var stars = "*"
for (var i = 1; i <= column; i++) {
    document.write("<br />")
    for (var j = 1; j <= i; j++) {
        document.write("*");

        //     // document.write(stars.push("*"))
    }
    // console.log("*")
    // document.write(i + "<br />")
}