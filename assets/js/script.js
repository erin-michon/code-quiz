//define the variables and html elements that we will manipulate
var timerEl = document.querySelector("#timer");
var questionsEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var startBtn = document.querySelector("#start-button");

// define a timer


// define the different questions and answers/options for the quiz
let myQuizQuestions = [
    {
        question: "Do you know the answer?",
        answers: {
            a: "wrong",
            b: "wrong",
            c: "right"
        },
        correctAnswer: "c"
    },
    {
        question: "Do you know the answer?",
        answers: {
            a: "wrong",
            b: "wrong",
            c: "right"
        },
        correctAnswer: "c"
    },
    {
        question: "Do you know the answer?",
        answers: {
            a: "wrong",
            b: "wrong",
            c: "right"
        },
        correctAnswer: "c"
    },
    {
        question: "Do you know the answer?",
        answers: {
            a: "wrong",
            b: "wrong",
            c: "right"
        },
        correctAnswer: "c"
    },
    {
        question: "Do you know the answer?",
        answers: {
            a: "wrong",
            b: "wrong",
            c: "right"
        },
        correctAnswer: "c"
    },
];

//the eventhandler for the start button click
let showQuestions = function (event) {
    event.preventDefault();
    console.log("The start button was clicked");

    //change the DOM object to show the text/options from the first question
    //present the first question
    questionsEl.textContent = myQuizQuestions[0].question;

    //create buttons for each answer
    var optionBtn = document.createElement("button");
    optionBtn.innerHTML=myQuizQuestions[0].answers.a;
    answersEl.appendChild(optionBtn);

    var optionBtn = document.createElement("button");
    optionBtn.innerHTML=myQuizQuestions[0].answers.b;
    answersEl.appendChild(optionBtn);

    var optionBtn = document.createElement("button");
    optionBtn.innerHTML=myQuizQuestions[0].answers.c;
    answersEl.appendChild(optionBtn);

};






// listen for the click of the start button
startBtn.addEventListener("click", showQuestions);


 
    //listen for a click on any button
        //if false = subtract time
        //if true = next question
        //continue while there are still questions?
    //high score = timer count when done with questions?
    //store high score and initials from user input in localStorage
//call a function to load the high scores from localStorage at end of script file