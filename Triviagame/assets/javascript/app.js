// we first needs variables for questions, WrongAnswer, CorrectAnswer, ComputerScore, PlayerScore

var PlayerScore = 0;
var ComputerScore = 0;

var ListOfQuestions = {
    Question: "How are you doing?",
    Answer1: "Super",
    Answer2:  "Fine",
    Answer3: "Well",
    Answer4: "Not So Good",
    Answer5: "Awfull",
    FullQuestion: function(){
        return this.Question + "<br> <ul> <li>" + this.Answer1 + "</li><li>    " + this.Answer2 + "</li><li>  " + this.Answer3 + " </li><li>  " + this.Answer4 + "</li><li>   " + this.Answer5 + "</li></u>";
    }
};

// We need a function to read and display the question and the answers in a card, b
// 
 console.log(ListOfQuestions.Question);
 console.log(ListOfQuestions.CorrectAnswer);
 console.log(ListOfQuestions.FullQuestion);
 document.getElementById("FullQuestion").innerHTML = ListOfQuestions.FullQuestion();

 //We need an array of questions which includes all question from 1 to n
 //We need a loop that move from questions to questions and change page, and record the right answer
 //We need a counter score on the right column.  Computer Score and Player Score.