var obj = {
    std1: {
        id: ["222", "333"],
        sName: ["ahmer", "ahsan"],
        class: "web"

    }
}


function searchId() {
    var StdId = document.getElementById("searchBar").value;
    var tableData = document.getElementById("tableData");
    for (var i = 0; i < obj.std1.id.length; i++) {
        if (StdId == obj.std1.id[i]) {
            console.log("yes u right " + obj.std1.id[i] +" "+ obj.std1.sName[i]+" " +obj.std1.class)
        tableData.innerHTML = obj.std1.id[i]
        }
    }
}