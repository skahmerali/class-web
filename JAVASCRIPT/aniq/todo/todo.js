var inp = document.getElementById("inp");



function makeList(){
var list = document.getElementById("list");
    
 var inpVal = inp.value;
 var li = document.createElement("li") ;  
var liTxt = document.createTextNode(inpVal);
li.appendChild(liTxt);
list.appendChild(li);
console.log(inpVal);
 
// edit buttun
var btnEdt = document.createElement("button");
var btnAtr = btnEdt.setAttribute("onClick","editOne(this)");
var btnEdtTxt = document.createTextNode("EDIT");
btnEdt.appendChild(btnEdtTxt);
li.appendChild(btnEdt);

// del btn

var dlt = document.createElement("button");
var dltTxt = document.createTextNode("DELETE");
var dltAtr = dlt.setAttribute("onClick","delOne(this)");
dlt.appendChild(dltTxt);
li.appendChild(dlt);

inp.value =" ";

};



function delOne(ss){
    console.log(ss.parentNode)
    ss.parentNode.remove()
//    parentnode.firstChild(ss).remove();
};


// function editOne(ss){

// };

function delAll(){ 
    list.innerHTML = "";
};