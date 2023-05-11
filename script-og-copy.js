// Things todo:
// Start Button -> Timer Starts; Presented with a question
// answer a question -> presented another question
// answer a question incorrectly -> time is subtracted from the clock
// all questions answered or timer reaches 0 -> game is over
// game is over -> Save my initials and score
// use mini-challenge code as reference

var answers = document.querySelector("#answers");
var questionList = document.createElement("ul")
var questionOne = document.createElement("li");
var questionTwo = document.createElement("li");
var questionThree = document.createElement("li");
var questionFour = document.createElement("li");

var startBtn = document.querySelector("#generate");
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    timeScore();
    pageOne();    
}

var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var timerInterval;


function timeScore() {
    timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " Time & Score";
      
    if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        finalScore();
    }
  }, 1000);
}

function pageOne () {
    document.getElementById('questions').innerHTML="Commonly used data types Do Not Include:";

    questionOne.textContent = "1. strings"
    questionTwo.textContent = "2. booleans"
    questionThree.textContent = "3. alerts"
    questionFour.textContent = "4. numbers"

    document.getElementById('answers').innerHTML= ""

    answers.appendChild(questionList);
    questionList.appendChild(questionOne);
    questionList.appendChild(questionTwo);
    questionList.appendChild(questionThree);
    questionList.appendChild(questionFour);

    startBtn.style.visibility = "hidden";

    questionOne.addEventListener("click", function(event) {
        event.stopPropagation();
        secondsLeft--;
        pageTwo();
    });
    questionTwo.addEventListener("click", function(event) {
        event.stopPropagation();
        pageTwo();
    });
    questionThree.addEventListener("click", function(event) {
        event.stopPropagation();
        secondsLeft--;
        pageTwo();
    });
    questionFour.addEventListener("click", function(event) {
        event.stopPropagation();
        secondsLeft--;
        pageTwo();
    });
}

function pageTwo () {
    document.getElementById('questions').innerHTML="The condition in an if / else statment is enclosed with ____.";

    questionOne.textContent = "1. quotes"
    questionTwo.textContent = "2. curly brackets"
    questionThree.textContent = "3. parenthesis"
    questionFour.textContent = "4. square brackets"

    document.getElementById('answers').innerHTML= ""

    answers.appendChild(questionList);
    questionList.appendChild(questionOne);
    questionList.appendChild(questionTwo);
    questionList.appendChild(questionThree);
    questionList.appendChild(questionFour);

    questionOne.addEventListener("click", function(event) {
        event.stopPropagation();
        secondsLeft--;
        pageThree();
    });
    questionTwo.addEventListener("click", function(event) {
        event.stopPropagation();
        secondsLeft--;
        pageThree();
    });
    questionThree.addEventListener("click", function(event) {
        event.stopPropagation();
        pageThree();
    });
    questionFour.addEventListener("click", function(event) {
        event.stopPropagation();
        secondsLeft--;
        pageThree();
    });
}

function pageThree () {
    document.getElementById('questions').innerHTML="Arrays in JavaScript can be used to store ____.";

    questionOne.textContent = "1. numbers and strings"
    questionTwo.textContent = "2. other arrays"
    questionThree.textContent = "3. booleans"
    questionFour.textContent = "4. all of the above"

    document.getElementById('answers').innerHTML= ""

    answers.appendChild(questionList);
    questionList.appendChild(questionOne);
    questionList.appendChild(questionTwo);
    questionList.appendChild(questionThree);
    questionList.appendChild(questionFour);

    questionOne.addEventListener("click", function(event) {
        event.stopPropagation();
        secondsLeft--;
        pageFour();
    });
    questionTwo.addEventListener("click", function(event) {
        event.stopPropagation();
        secondsLeft--;
        pageFour();
    });
    questionThree.addEventListener("click", function(event) {
        event.stopPropagation();
        secondsLeft--;
        pageFour();
    });
    questionFour.addEventListener("click", function(event) {
        event.stopPropagation();
        pageFour();
    });
}

function pageFour () {
    document.getElementById('questions').innerHTML="String values must be encolsed within ____ when being assigned to variables.";

    questionOne.textContent = "1. commas"
    questionTwo.textContent = "2. curly brackets"
    questionThree.textContent = "3. quotes"
    questionFour.textContent = "4. parenthesis"

    document.getElementById('answers').innerHTML= ""

    answers.appendChild(questionList);
    questionList.appendChild(questionOne);
    questionList.appendChild(questionTwo);
    questionList.appendChild(questionThree);
    questionList.appendChild(questionFour);

    questionOne.addEventListener("click", function(event) {
        event.stopPropagation();
        secondsLeft--;
        pageFive();
    });
    questionTwo.addEventListener("click", function(event) {
        event.stopPropagation();
        pageFive();
    });
    questionThree.addEventListener("click", function(event) {
        event.stopPropagation();
        secondsLeft--;
        pageFive();
    });
    questionFour.addEventListener("click", function(event) {
        event.stopPropagation();
        secondsLeft--;
        pageFive();
    });
}

function pageFive () {
    document.getElementById('questions').innerHTML="A very useful tool used during development and debugging for pringting content to the debugger is:";

    questionOne.textContent = "1. JavaScript"
    questionTwo.textContent = "2. terminal/bash"
    questionThree.textContent = "3. for loops"
    questionFour.textContent = "4. console.log"

    document.getElementById('answers').innerHTML= ""

    answers.appendChild(questionList);
    questionList.appendChild(questionOne);
    questionList.appendChild(questionTwo);
    questionList.appendChild(questionThree);
    questionList.appendChild(questionFour);

    questionOne.addEventListener("click", function(event) {
        event.stopPropagation();
        secondsLeft--;
        finalScore();
    });
    questionTwo.addEventListener("click", function(event) {
        event.stopPropagation();
        secondsLeft--;
        finalScore();
    });
    questionThree.addEventListener("click", function(event) {
        event.stopPropagation();
        finalScore();
    });
    questionFour.addEventListener("click", function(event) {
        event.stopPropagation();
        secondsLeft--;
        finalScore();
    });
}



function finalScore () {
    // add stop timer and collect value 
    clearInterval(timerInterval);

    document.querySelector(".time").innerHTML="All Done!"
    document.querySelector("#questions").innerHTML="Your final score is " + secondsLeft ;
    document.querySelector("#answers").innerHTML= "Enter your initials:" ;

    const button = document.createElement('button')
    button.innerText = 'Submit'
    button.id = 'submit'
    button.addEventListener('click', () => {
        highScore()
    })
    document.getElementById("answers").appendChild(button)
  
}

function highScore() {
    document.querySelector("#questions").innerHTML="High Scores";

    submit.style.visibility = "hidden";

    const button = document.createElement('button')
    button.innerText = 'Go back'
    button.id = 'back'
    button.addEventListener('click', () => {
        finalScore()
    })
    document.getElementById("answers").appendChild(button)

}






questionOne.setAttribute("style", " border: none; background-color: blue; border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%); font-size: 22px; line-height: 22px; margin: 16px 16px 16px 20px; padding: 14px 34px; text-align: center; cursor: pointer;");
questionTwo.setAttribute("style", " border: none; background-color: blue; border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%); font-size: 22px; line-height: 22px; margin: 16px 16px 16px 20px; padding: 14px 34px; text-align: center; cursor: pointer;");
questionThree.setAttribute("style", " border: none; background-color: blue; border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%); font-size: 22px; line-height: 22px; margin: 16px 16px 16px 20px; padding: 14px 34px; text-align: center; cursor: pointer;");
questionFour.setAttribute("style", " border: none; background-color: blue; border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px; color: hsl(0, 0%, 100%); font-size: 22px; line-height: 22px; margin: 16px 16px 16px 20px; padding: 14px 34px; text-align: center; cursor: pointer;");
