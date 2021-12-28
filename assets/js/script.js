// **  START PAGE VARIABLES **
// HTML ELEMENT VARIABLES
let headerEl = document.querySelector("#header");
let timerEl = document.querySelector("#timer");
let containerEl = document.querySelector("#container");
let startBtn = document.querySelector("#start-button");
let scoreBtn = document.querySelector("#score-button");
let answerEl = document.querySelector(".answer");
let userInitals = document.querySelector("#initials");
let responseEl = document.querySelector("#response-container");
let highscoreEl = document.querySelector("#highscores");
let mainEl = document.querySelector("#page");

// let highScoreArr = [];

// QUIZ QUESTIONS AND ANSWERS
let myQuizQuestions = [
    {
        question: "What can be passed into a function?", 
        A: "Arguments",
        B: "Comments",
        C: "Bananas",
    },
    {
        question: "Which option below is an example of camel-casing?",
        A: "camel-walk",
        B: "CamelWalk",
        C: "camelWalk",
    },
    {
        question: "Which of the following is NOT a control flow statement?",
        A: "An if statement",
        B: "A for loop",
        C: "A while loop",
    },
    {
        question: "What does '===' mean when placed between two variables?",
        A: "The variables are equal in type and value",
        B: "The variables are equal in type",
        C: "The variables are equal in value",
    },
    {   
        question: "Which of the follow is used to denote comments in javaScript?",
        A: " // ",
        B: " << ",
        C: " COMMENT: ",
    },
];
let myQuizAnswers = ['Arguments', 'camelWalk', 'An if statement','The variables are equal in type and value', ' // '];

//QUESTION INDEX VARIABLES
let lastQuestionIndex = myQuizQuestions.length - 1;
let currentQuestionIndex = 0;


// **  END PAGE VARIABLES **


// ** START TIMER **
// Start the timer at 100 seconds (or 100 points for high score)
let time = 100;

// TIMER FUNCTION: START AND DISPLAY CURRENT TIME
function startTime() {
    countdown = setInterval(function() {
        timerEl.textContent = time;
        time--;
        if (time <= 0) {
            clearInterval(countdown);
            timerEl.textContent = "You have run out of time and did not complete the quiz!  GAME OVER!"
            endGame();
        } else if (time > 0 && currentQuestionIndex >= myQuizQuestions.length) {
            timerEl.textContent = "You have completed the quiz!"
            endGame();
        }
    }, 1000);
};

function removeText() {
    responseEl.textContent="";    
}

// ** END TIMER **



// ** QUESTION CREATION AND DISPLAY

// Create and display initial question
let showQuestions = function(event) {
    //hide the start button after it is pushed
    document.getElementById("start-button").style.display = "none"

    //change the DOM object to show the text/options from the question
    let currentQ = myQuizQuestions[currentQuestionIndex];

    if (currentQuestionIndex === myQuizQuestions.length) {

        endGame();

    } else {
 
        //display the questions/answer options
        let questionEl = document.createElement("div")
        questionEl.innerHTML = "<h2 class='question'>" + currentQ.question + "</h2>";
        questionEl.className ="question";
        document.getElementById("container").appendChild(questionEl); 
        
        let answersBtnA = document.createElement("button")
        answersBtnA.innerHTML = "<h3 class='answer'>" + currentQ.A + "</h3>";
        answersBtnA.className ="answer";
        containerEl.appendChild(answersBtnA);

        let answersBtnB = document.createElement("button")
        answersBtnB.innerHTML = "<h3 class='answer'>" + currentQ.B + "</h3>";
        answersBtnB.className ="answer";
        containerEl.appendChild(answersBtnB); 

        let answersBtnC = document.createElement("button")
        answersBtnC.innerHTML = "<h3 class='answer'>" + currentQ.C + "</h3>";
        answersBtnC.className ="answer";
        containerEl.appendChild(answersBtnC);

        //increase the current question index by one for the next question
        currentQuestionIndex++;
    
    }

};

// Reactions to the question being answered
let nextQuestion = function(event) {
    event.preventDefault();

    let userAnswer = (event.target.textContent);
      
    if (myQuizAnswers.includes(userAnswer)) {

        // If the answer does match move to next question
        responseEl.textContent="Correct Answer!";
        setTimeout(removeText, 1000);
        containerEl.innerHTML="";
        showQuestions();
        return;

    } else {

        // If the answer doesn't match, subtract 10 from current time (If)
        responseEl.textContent="Sorry, Wrong Answer!"
        setTimeout(removeText, 1000);
        time = time - 10;
        timerEl.innerHTML = time

        containerEl.innerHTML="";
        showQuestions();
        
    };       
    
};

//Ending the Game/Showing High Scores
let endGame = function() {
    score = time;
    clearInterval(countdown);
    headerEl.textContent = "You have finished the Code Quiz - See Your Score Below!"
    timerEl.innerHTML = "Score: " + score;
    containerEl.innerHTML="";
        
    document.getElementById("scores-container").style.display = "block"
  
};

let submitScore = function() {

    document.getElementById("page").interHTML = "";

    let highscore = {
        user: userInitals.value,
        score: score
    };

    localStorage.setItem("highscore", JSON.stringify(highscore));
   
    headerEl.textContent = "High Scores";
    timerEl.innerHTML = "";
    mainEl.innerHTML = "";


    var allHighScores = JSON.parse(localStorage.getItem("highscore"));
    highscoreEl.innerHTML = "<h3>" + allHighScores.user + "  " + allHighScores.score + "</h3>";
};


// ** EVENT LISTENERS **
startBtn.addEventListener("click", showQuestions);
startBtn.addEventListener("click", startTime);
containerEl.addEventListener("click", nextQuestion);
scoreBtn.addEventListener("click", submitScore);


