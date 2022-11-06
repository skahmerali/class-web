// propertyExists = "market" in deal3;

// propertyExists = "asdas" 





// var obj = {
//     stdRollNum: [1, 2, 3],
//     stdName: ["ahsan Mushtaq", "aneeq", "Hamza"],
//     stdFatherName: ["mushtaq", "hussain", "akbar"],
//     stdSubjects: ["computer"]
// }
// function getData(){

//     var stdQuerry = document.getElementById("stdQuerry").value;
//     for(var i = 0 ; i<obj.stdRollNum.length ; i++){
//         if(obj.stdRollNum[i]==stdQuerry){
//             console.log(obj.stdRollNum[i] , obj.stdName[i]  , obj.stdFatherName[i] , obj.stdSubjects)
//         }
//     }
// }








// ahsan table data 



var stdData = {
    stdId:[1,2,3,4,5,6,7,8,9,10],
    stdName:["ahsan", "hammad" ,"aneeq" , "hamza" ,"behroz" ,
             "abdullah" , "saad" , "shafeeq" , "sharjeel" , "anas"],
    stdFatherName:["mushtaq", "azhar" , "aftab" , "akber"  ,"feroz" ,
                   "mehboob" , "zaheer" , "mukhtar" , "noor" , "shamim"],

    stdSkillAvg:["80%" , "60%" , "70%" ,"67%" , "77%" , "56%" , "66%" , "76%" ,
                 "66%" ,"48%"]
}

function getData() {
    var students = document.getElementById("students").value;

    for(var i = 0; i < stdData.stdId.length; i++){
        if(stdData.stdId[i] == students){
            // console.table(stdData.stdId[i] , stdData.stdName[i] , stdData.stdFatherName[i] , stdData.stdSkillAvg[i])
        
                        
            var tableRow = document.createElement("tr");
            var tableData = document.createElement("td");
            var txt = document.createTextNode(stdData.stdName[i]) 
            var box =tableData.appendChild(txt)
        
            tableData.appendChild(tableRow);
            console.log(box)

            // console.log(stdData)
        }


    }
}