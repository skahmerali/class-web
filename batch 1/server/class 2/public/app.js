function singup(){
    var obj ={
        email:document.getElementById("email").value
    }
    const url = "http://localhost:3000"
    const Http = new XMLHttpRequest();

    Http.open("POST", url + "/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));
    // Http.send(null)
    Http.onreadystatechange = (e) => {
        if (Http.readyState === 4) {

            // console.log(Http.responseText)
            let jsonRes = JSON.parse(Http.responseText);
           
            if (jsonRes.status === 200) {
                alert(jsonRes.message);
                window.location.href = "login.html";
            } else {
                alert(jsonRes.message);
                console.log(jsonRes)
                
            }
        }
    }
    return false;


}