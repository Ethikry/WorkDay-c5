//Page reference variables
var homePage = document.querySelector("#home_page");
var questionsPage = document.querySelector("#questions_page");
var scoreBoard = document.querySelector("#submit_page");
var hiScorePage = document.querySelector("#hiscore_page");

//Button reference variables
var startBtn = document.querySelector("#start_btn");
var answerBtns = document.querySelectorAll(".choice_btn");
var answerBtn1 = document.querySelector("#answer_btn1");
var answerBtn2 = document.querySelector("#answer_btn2");
var answerBtn3 = document.querySelector("#answer_btn3");
var answerBtn4 = document.querySelector("#answer_btn4");
var submitBtn = document.querySelector("#submit_btn");
var homeBtn = document.querySelector("#home_btn");
var clearScoresBtn = document.querySelector("#clear_scores_btn");
var checkHiScores = document.querySelector("#hiscores_btn")

//Answer logic references
var checkAnswer = document.querySelector("#check_answer");
var score = document.querySelector("#score");
var initials = document.querySelector("#initials");

//Other reference variables
var record = document.querySelector("#record");
var endQuiz = document.querySelector("#end_quiz");
var timer = document.querySelector("#timer");

//Set variables
var userScore = 0;
var questionNumber = 0;
var seconds = 60;
var questionsAsked = 1;

//Questions
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["A. <scripting>", "B. <js>", "C. <script>", "D. <javascript>"],
        answer: "C, <script>"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choices: ["A. <javascript name='xxx.js'>", "B. <script href='xxx.js'>", "<script src='xxx.js'>", "D. <javascript href='xxx.js'>"],
        answer: "C, <script src='xxx.js'>",
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["A. msg('Hello World');", "B. msgBox('Hello World');", "C. alert('Hello World');", "D. alertBox('Hello World');"]                 ,
        answer: "C, alert('Hello World');",
    },
    {
        question: "How do you create a function in JavaScript?",
        choices: ["A. function = myFunction()", "B. function myFunction()", "C. function:myFunction()", "D. def myFunction():"],
        answer: "B, function myFunction()",
    },
    {
        question: "How do you call a function named 'myFunction'?",
        choices: ["A. call function myFunction()", "B. call myFunction()", "C. myFunction()", "D. myFunction"],
        answer: "C, myFunction()",
    },
    {
        question: "How do you write an IF statement in JavaScript?",
        choices: ["A. if i=5 then", "B. if i==5 then", "C. if i=5", "D. if (i==5)"],
        answer: "D, if (i==5)",
    },
    {
        question: "What does CSS stand for?",
        choices: ["A. Creative Style Sheets", "B. Cascading Skaters Skating", "C. Crew Style Socks", "D. Cascading Style Sheets"],
        answer: "D, Cascading Style Sheets",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        choices: ["A. style", "B. font", "C. styles", "D. class"],
        answer: "A, style",
    },
    {
        question: "What does HTML stand for?",
        choices: ["A. Hotdog Trading Market Leader", "B. Hyper Text Markup Language", "C. Haitch Tee eM eL", "D. Home Tool Markup Language"],
        answer: "B, Hyper Text Markup Language",
    },
    {
        question: "Who is making the Web standards?",
        choices: ["A. Microsoft", "B. The United States of America", "C. The World Wide Web Consortium", "D. God"],
        answer: "C, The World Wide Web Consortium",
    },
]

//Functions
function quizStart () {
    homePage.style.display = "none";
}

function timerCountdown() {

}

//Event listeners
startBtn.addEventListener("click", quizStart);
