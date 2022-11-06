var user = prompt("Enter a table number : ");
for (user; user > 0; user--){
    for(var i = 1; i <= 10; i++){
        document.write(user + " * " + i + " = " + i*user +"<br />")
    }
}