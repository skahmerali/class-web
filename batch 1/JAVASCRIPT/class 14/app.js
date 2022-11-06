var arrays =[]
function abc() {
    var full = document.getElementById('full-name').value;
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    console.log("Full NAME : " + full);
    console.log(email.value);
    console.log(password);

arrays.push(full,email,password)
document.write(arrays)
}