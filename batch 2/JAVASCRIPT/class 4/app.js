function submit(){
    var inputAnswer = document.getElementById("input-answer").value;
    var score = 0 ;
    
    if(inputAnswer==="karachi"){
        score = score+5;
        console.log(score)
    }else{
        console.log(score)
    }
}