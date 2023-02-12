// var num1= prompt("Enter a first value !");
// var num2= prompt("Enter a second value !");

function add(){
    var num1 = Number(document.getElementById("num1").value);
    console.log(num1)
    var num2 =Number( document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result").innerText = result; 
}