var questions = 5;
var questionsLeft;
var question1 = prompt("Who was the first president of kenya?");
var answer = false;

questionsLeft = questions - 1;
if(question1.toUpperCase() === "JOMO KENYATA"){

answer = true;

} else if(!answer) {  

alert ("That was not the write answer try again, You're left with " + questionsLeft + " questions");

}

var question2 = prompt("what is the capital city of kenya?");
     questionsLeft = questionsLeft - 1;
    if(question2 === "Nairobi"){
        answer = true;
} else if(!answer) {  
alert ("That was not the write answer try again, You're left with " + questionsLeft + " questions");
}

if(answer){
 alert(" That's correct and You're left with " + questionsLeft + " questions");
}



   