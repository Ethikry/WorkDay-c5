//Page reference variables
var homePage = document.querySelector("#home_page");
var questionsPage = document.querySelector("#questions_page");
var submitPage = document.querySelector("#submit_page");
var hiScorePage = document.querySelector("#hiscore_page");

//Button reference variables
var startBtn = document.querySelector("#start_btn");
var answerBtns = document.querySelectorAll(".answer_btns");
var radioBtns = document.querySelectorAll('input[name="answer_radio"]');
var answerBtn0 = document.querySelector("#answer_btn0");
var answerBtn1 = document.querySelector("#answer_btn1");
var answerBtn2 = document.querySelector("#answer_btn2");
var answerBtn3 = document.querySelector("#answer_btn3");
var nextQuestionBtn = document.querySelector("#next_question_btn");
var submitBtn = document.querySelector("#submit_btn");
var homeBtn = document.querySelector("#home_btn");
var clearScoresBtn = document.querySelector("#clear_scores_btn");
var checkHiScores = document.querySelector("#hiscores_btn");

//Answer logic references
var checkAnswer = document.querySelector("#check_answer");
var score = document.querySelector("#score");
var initials = document.querySelector("#initials");

//Other reference variables
var questionText = document.querySelector("#question_text");
var record = document.querySelector("#record");
var endQuiz = document.querySelector("#end_quiz");
var timer = document.querySelector("#timer");

//Set variables
var userScore = 0;
var questionNumber = 0;
var seconds = 60;
var questionsAsked = 1;
var interval;

//Questions
var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["A. <scripting>", "B. <js>", "C. <script>", "D. <javascript>"],
    answer: "c",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: [
      "A. <javascript name='xxx.js'>",
      "B. <script href='xxx.js'>",
      "C.  <script src='xxx.js'>",
      "D. <javascript href='xxx.js'>",
    ],
    answer: "c",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    choices: [
      "A. msg('Hello World');",
      "B. msgBox('Hello World');",
      "C. alert('Hello World');",
      "D. alertBox('Hello World');",
    ],
    answer: "c",
  },
  {
    question: "How do you create a function in JavaScript?",
    choices: [
      "A. function = myFunction()",
      "B. function myFunction()",
      "C. function:myFunction()",
      "D. def myFunction():",
    ],
    answer: "b",
  },
  {
    question: "How do you call a function named 'myFunction'?",
    choices: [
      "A. call function myFunction()",
      "B. call myFunction()",
      "C. myFunction()",
      "D. myFunction",
    ],
    answer: "c",
  },
  {
    question: "How do you write an IF statement in JavaScript?",
    choices: ["A. if i=5 then", "B. if i==5 then", "C. if i=5", "D. if (i==5)"],
    answer: "d",
  },
  {
    question: "What does CSS stand for?",
    choices: [
      "A. Creative Style Sheets",
      "B. Cascading Skaters Skating",
      "C. Crew Style Socks",
      "D. Cascading Style Sheets",
    ],
    answer: "d",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    choices: ["A. style", "B. font", "C. styles", "D. class"],
    answer: "a",
  },
  {
    question: "What does HTML stand for?",
    choices: [
      "A. Hotdog Trading Market Leader",
      "B. Hyper Text Markup Language",
      "C. Haitch Tee eM eL",
      "D. Home Tool Markup Language",
    ],
    answer: "b",
  },
  {
    question: "Who is making the Web standards?",
    choices: [
      "A. Microsoft",
      "B. The United States of America",
      "C. The World Wide Web Consortium",
      "D. God",
    ],
    answer: "c",
  },
];

//Functions
function displayQuestions() {
  if (questionNumber < 10) {
    questionText.innerText = questions[questionNumber].question;
    for (var i = 0; i < 4; i += 1) {
      var label = document.getElementsByTagName("label")[i];
      label.innerText = questions[questionNumber].choices[i];
    }
    questionNumber++;
  } else {
    clearInterval(interval);
    quizStop();
  }
}

function answerLogic() {
  nextQuestionBtn.onclick = function () {
    let selectedAnswer;
    for (const radioBtn of radioBtns) {
      if (radioBtn.checked) {
        selectedAnswer = radioBtn.value;
        if (selectedAnswer == questions[questionNumber - 2].answer) {
          userScore += 10;
          checkAnswer.innerText = "Correct!";
          checkAnswer.style.display = "block";
        } else {
          seconds -= 5;
          checkAnswer.innerText =
            "Incorrect. The right answer was " +
            questions[questionNumber - 2].answer;
          checkAnswer.style.display = "block";
        }
        break;
      }
    }
  };
}

function quizStart() {
  homePage.style.display = "none";
  questionsPage.style.display = "block";
  questionNumber = 0;
  seconds = 60;
  userScore = 0;
  countdown();
  displayQuestions();
  answerLogic();
}

function countdown() {
  clearInterval(interval);
  interval = setInterval(function () {
    seconds -= 1;
    timer.innerHTML = seconds;
    if (seconds == 0) {
      clearInterval(interval);
      quizStop();
    }
  }, 1000);
}

function quizStop() {
  questionsPage.style.display = "none";
  submitPage.style.display = "block";
  userScore += seconds;
  score.innerText = userScore;
}

function displayScore() {
  displayInitials = document.querySelector("#display_initials");
  displayNum = document.querySelector("#display_num");
  submitPage.style.display = "none";
  hiScorePage.style.display = "block";
  displayInitials.innerText = initials.value;
  displayNum.innerText = userScore;
}

function displayHome() {
  hiScorePage.style.display = "none";
  homePage.style.display = "block";
  seconds = 60;
  timer.innerHTML = seconds;
}
//Event listeners
startBtn.addEventListener("click", quizStart);
nextQuestionBtn.addEventListener("click", displayQuestions);
submitBtn.addEventListener("click", displayScore);
homeBtn.addEventListener("click", displayHome);