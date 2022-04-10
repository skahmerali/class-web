var table = prompt("Enter a digit to print a table ");
console.log(table)
// table*1
// table*2
// table*3
// table*4
for (var i = 1; i <= 10; i++) {
    document.write(table + " * " + i + " = " + table * i + "<br />");

}

var firstName = ["ahmer", "ahsan", "hamza"];
var lastName = ["ali", "sheikh"];
var fullName = [];
for (var i = 0; i < firstName.length; i++) {
    for (var j = 0; j < lastName.length; j++) {
        fullName.push(firstName[i]+" " + lastName[j])
    }
}
console.log(fullName)