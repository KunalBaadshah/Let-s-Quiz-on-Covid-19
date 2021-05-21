var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What is your name?");

const log = console.log;

log("Welcome!! " + userName + ", Lets measure your awareness on COVID-19");


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    log("Right!");
    score = score + 1;
  }
  else {
    log("Wrong**");
    score = score - 1;
  }

  log("Current Score is:", score);
  log("//////////////");
}

var questions = [{
  question: "Which virus causes Covid-19?",
  answer: "SARS-CoV-2"
},
{
  question: "Is COVID-19 caused by a virus or by bacteria??",
  answer: "Virus"
},
{
  question: "It is safer to frequently clean your hands and not wear gloves?(Yes or No)",
  answer: "Yes"
},
{
  question: "Does Vitamin and mineral supplements cure COVID-19?(Yes or No)",
  answer: "No"
},
{
  question: "Does drinking alcohol protect you against COVID-19?(Yes or No)",
  answer: "No"
},
{
  question: "Can antibiotics prevent or treat COVID-19?(Yes or No)",
  answer: "No"
},
{
  question: "Name the Indian homegrown vaccine",
  answer: "Covaxin"
},
{
  question: "Name the vaccine that requires only one dose",
  answer: "Johnson & Johnson"
}
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

log("OK!! Your total score is: ", score);
log("Don't worry, this shall pass too!");