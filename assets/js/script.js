/* ACCEPTANCE CRITERIA
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score */

// **  PAGE VARIABLES **
// Define the variables and html elements that we will turn into objects and manipulate
let headerEl = document.querySelector("#header");
let timerEl = document.querySelector("#timer");
let containerEl = document.querySelector("#container");
let startBtn = document.querySelector("#start-button");
let answerEl = document.querySelector(".answer");

// Define the different questions and answers/options for the quiz - Currently all correct answers are answerA 
let myQuizQuestions = [
    {
        question: "What can be passed into a function?", 
        answerA: "Arguements",
        answerB: "Comments",
        answerC: "Bananas",
    },
    {
        question: "Which option below is an example of camel-casing?",
        answerA: "camel-walk",
        answerB: "CamelWalk",
        answerC: "camelWalk",
    },
    {
        question: "Which of the following is NOT a control flow statement?",
        answerA: "An if statement",
        answerB: "A for loop",
        answerC: "A while loop",
    },
    {
        question: "What does '===' mean when placed between two variables?",
        answerA: "The variables are equal in type and value ",
        answerB: "The variables are equal in type",
        answerC: "The variables are equal in value",
    },
    {   
        question: "Which of the follow is used to denote comments in javaScript?",
        answerA: " // ",
        answerB: " << ",
        answerC: " COMMENT: ",
    },
];

//variables to obtain the index of a given question
let lastQuestionIndex = myQuizQuestions.length - 1;
let currentQuestionIndex = 0;

// ** TIMER **

// Start the timer at 100 seconds (or 100 points for high score)
let time = 100

// Create a function that starts displays the remaining time
let countdown = function() {
    time--;
    if (time < 0) {
        clearInterval(countdown);
        return;
    };

    timerEl.innerHTML = time;
    
    // When the timer reaches zero, the timer reads game over
    if (time == 0) {
    timerEl.innerHTML = "You have run out of time!  GAME OVER!";

    //call function that allow for user to input their initials and view high-score

    };
};

// Create a function that starts the countdown (in seconds)
let counter = function () {
    setInterval(countdown, 1000);
};


// ** QUESTION CREATION AND DISPLAY

// Create and display initial question
let showQuestions = function(event) {
    //prevent the browser from preforming any default actions
    event.preventDefault();

    //hide the start button after it is pushed
    document.getElementById("start-button").style.display = "none"

    //change the DOM object to show the text/options from the first question
    //present the first question
    let currentQ = myQuizQuestions[currentQuestionIndex];
    console.log(currentQ);

    let questionEl = document.createElement("div")
    questionEl.innerHTML = "<h2 class='question'>" + currentQ.question + "</h2>";
    questionEl.className ="question";
    document.getElementById("container").appendChild(questionEl); 
    
    let answersBtnA = document.createElement("button")
    answersBtnA.innerHTML = "<h3 class='answer'>" + currentQ.answerA + "</h3>";
    answersBtnA.className ="answer";
    containerEl.appendChild(answersBtnA);

    let answersBtnB = document.createElement("button")
    answersBtnB.innerHTML = "<h3 class='answer'>" + currentQ.answerB + "</h3>";
    answersBtnB.className ="answer";
    containerEl.appendChild(answersBtnB); 

    let answersBtnC = document.createElement("button")
    answersBtnC.innerHTML = "<h3 class='answer'>" + currentQ.answerC + "</h3>";
    answersBtnC.className ="answer";
    containerEl.appendChild(answersBtnC);

    //increase the current index by one for the next question
    currentQuestionIndex++;
};

// Reactions to the question being answered
let nextQuestion = function(event) {
    event.preventDefault();
    
    let userAnswer = $(event.target);
    console.log(userAnswer);

    // Check to see if the answer was correct
    // If the answer was incorrect, subtrack 5 from current time (If)
    // If the answer was correcct, do nothing  (Else If)
    // Present the next set of questions
    // Repeat until last question (While Loop)
    
}


// ** EVENT LISTENERS **
startBtn.addEventListener("click", showQuestions);
startBtn.addEventListener("click", counter);
containerEl.addEventListener("click", nextQuestion);


//Additional Pseudocode to review/conquer:
    //high score = timer count when done with questions
    //store high score and initials from user input in localStorage
    //call a function to load the high scores from localStorage at end of script file
    

