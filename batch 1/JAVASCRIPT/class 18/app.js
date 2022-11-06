
function getValue(value) {
    //     // var quest1 = document.getElementsByClassName("chacked").value;
    
  
    
    //     // var quest2 = document.getElementById("option2").value;
    
    //     // var quest3 = document.getElementById("option3").value;
        console.log(value)
        // console.log(valueNew)
        // function abc() {
        // var valueNew = $(`input[type='radio'][name='quest1']:checked`).val();
        rightAnswers= ["hyper text markup language","hyper text mopup language"]
    //    var value= getValue(value)
    var userAnswer = []
        var number = 0;
        var isFound = false;
        // alert("your answer is right");
        for(var i = 0; i <= rightAnswers.length; i++){
            userAnswer.push(value)
            if (userAnswer[i] === rightAnswers[i]) {
                number = number + 10;
                console.log(number);
                isFound= true;

                
            } 
            if(isFound==false){
               console.log( number)
            }
            break;
        }
            //  }
        //  function abc(){
        //  document.getElementById("result").innerHTML = number

    //  };
    }