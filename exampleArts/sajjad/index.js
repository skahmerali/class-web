var arrays = []
function abc(){
    var firstName=document.getElementById("firstName").value

    var cba=document.getElementById("selectOne").value
    console.log(firstName)
    console.log(cba)
    document.getElementById("p").innerText=firstName;
    document.getElementById("newOne").innerHTML=firstName.value;
     arrays.push(firstName.value)
     localStorage.setItem("newValue",arrays)
     arrays.push(localStorage.getItem("newValue"))
     console.log(arrays);
    document.getElementById("p").innerHTML=`
    <li >${firstName} <button href="javascript:void(0)" onclick="ahmer('${firstName}')">Edit</button></li>
    `

    }
    function ahmer(_firstName){
        console.log(_firstName)
        var newP=document.getElementById("p") 
        newP.innerHTML= `
        <div id="${newId}">
       <input type="text" value='${_firstName}' id="updated"/>
         <button onclick="update('${newId}')">OnClick</button>
         </div>` 
        arrays.push(newP)
        // document.getElementById("updated").innerText=newP
    }
    function update(_updated){
        console.log(_updated)
        document.getElementById("p").innerHTML=_updated
    }