/* ACCEPTANCE CRITERIA
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score */


//define the variables and html elements that we will turn into objects and manipulate
let headerEl = document.querySelector("#header");
let timerEl = document.querySelector("#timer");
let containerEl = document.querySelector("#container");
let startBtn = document.querySelector("#start-button");

// define a timer; this will be used to keep score; a wrong answer deducts time

//Start the timer at 100 seconds (or 100 points for high score)
let time = 100

//create a function that starts displays the remaining time
let countdown = function() {
    time--;
    if (time <= 0) {
        clearInterval(countdown);
        return;
    }
    timerEl.innerHTML = time;
}

//create a function that starts the countdown (in seconds)
let counter = function () {
    setInterval(countdown, 1000);
}

// define the different questions and answers/options for the quiz
let myQuizQuestions = [
    {
        question: "What can be passed into a function?",
        answerA: "Parameters ",
        answerB: "Arguements",
        answerC: "Bananas",
        correctAnswer: "b"
    },
    {
        question: "Do you know the answer?",
        answerA: "wrong",
        answerB: "wrong",
        answerC: "right",
        correctAnswer: "c"
    },
    {
        question: "Which of the following is a control flow statement?",
        answerA: "A for Loop",
        answerB: "Using an if statement",
        answerC: "Defining the index of an array",
        correctAnswer: "a"
    },
    {
        question: "What does '===' mean when placed between two variables?",
        answerA: "The variables are equal in type",
        answerC: "The variables are equal in type and value ",
        answerC: "The variables are equal in value",
        correctAnswer: "b"
    },
    {   
        question: "Which of the follow is used to denote comments in javaScript?",
        answerA: "//",
        answerB: "<!--",
        answerC: "COMMENT:",
        correctAnswer: "a"
    },
];

//the eventhandler for the start button click
//Question Rendering
let lastQuestionIndex = myQuizQuestions.length - 1;
let currentQuestionIndex = 0;

function showQuestions (event) {
    event.preventDefault();

    document.getElementById("start-button").style.display = "none"

    //change the DOM object to show the text/options from the first question
    //present the first question
    //q is the object of the current question - as I will loop the pulling/creating of the question elements
    let currentQ = myQuizQuestions[currentQuestionIndex];
    console.log(currentQ);

    let questionEl = document.createElement("div")
    questionEl.innerHTML = "<h2 class='question'>" + currentQ.question + "</h2>";
    questionEl.className ="question";
    document.getElementById("container").appendChild(questionEl); 

    let answersElA = document.createElement("div")
    answersElA.innerHTML = "<h3 class='answer'>" + currentQ.answerA + "</h3>";
    answersElA.className ="answer";
    containerEl.appendChild(answersElA);

    let answersElB = document.createElement("div")
    answersElB.innerHTML = "<h3 class='answer'>" + currentQ.answerB + "</h3>";
    answersElB.className ="answer";
    containerEl.appendChild(answersElB);

    let answersElC = document.createElement("div")
    answersElC.innerHTML = "<h3 class='answer'>" + currentQ.answerC + "</h3>";
    answersElC.className ="answer";
    containerEl.appendChild(answersElC);

    console.log(currentQ.correctAnswer);

    //increase the current index by one for the next question
    currentQuestionIndex++;
}

//function for when answers are clicked


// listen for the click of the start button
startBtn.addEventListener("click", showQuestions);
startBtn.addEventListener("click", counter);



    //listen for a click on any button
        //if false = subtract time
        //if true = next question
        //continue while there are still questions?
    //high score = timer count when done with questions?
    //store high score and initials from user input in localStorage
//call a function to load the high scores from localStorage at end of script file
