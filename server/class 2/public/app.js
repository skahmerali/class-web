function singup(){
    var obj ={
        email:document.getElementById("email").value
    }
    const url = "http://localhost:3000"
    const Http = new XMLHttpRequest();

    Http.open("POST", url + "/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));
    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {
            
}

}
}