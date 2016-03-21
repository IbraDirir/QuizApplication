//quiz begins no answers correct
var correct = 0;
//ask questions
var answer1 = prompt("Name a programming language that's also a gem");
    if(answer1.toUpperCase() === "RUBY"){
    correct += 1;
}

var answer2 = prompt("Name a programming language that's also a snake");
    if(answer2.toUpperCase() === "PYTHON"){
        correct += 1;
    }

var answer3 = prompt("what langauge is used to style web pages?");
if(answer3.toUpperCase() === "CSS"){
    correct += 1;
}
var answer4 = prompt("what language do you use to add interactivity to a web page")
    if(answer4.toUpperCase() === "JAVASCRIPT"){
    correct += 1;    
    }

var answer5 = prompt("Which langauge is used to add mark up to the web pages?")
    if(answer5.toUpperCase() === "HTML"){
        correct += 1;
    }

//output results
document.write("<p>You got " + correct + " out of 5 questions correct</p>");
//output rank
if( correct === 5 ){
    document.write("<p><strong>You earned a gold crown</strong></p>")
}else if (correct >= 3){
    document.write("<p><strong>You earned a silver crown</strong></p>")
}else if (correct >=1 ){
    document.write("<p><strong>You earned a bronze crown</strong></p>")
}




