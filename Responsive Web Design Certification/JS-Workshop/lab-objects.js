//Build a Quiz Game
const questions = [
  {
    category: "HTML",
    question: "Which HTML tag is used to define the largest heading?",
    choices: ["<header>", "<h6>", "<h1>"],
    answer: "<h1>"
  },
  {
    category: "CSS",
    question: "Which CSS property controls the text size?",
    choices: ["text-style", "font-size", "text-size"],
    answer: "font-size"
  },
  {
    category: "CSS",
    question: "Which property is used to change the background color of an element?",
    choices: ["color", "background-style", "background-color"],
    answer: "background-color"
  },
  {
    category: "JavaScript",
    question: "How do you write 'Hello World' in an alert box?",
    choices: ["alert('Hello World');", "msg('Hello World');", "print('Hello World');"],
    answer: "alert('Hello World');"
  },
  {
    category: "JavaScript",
    question: "How do you call a function named 'myFunction'?",
    choices: ["myFunction();", "call myFunction();", "read myFunction();"],
    answer: "myFunction();"
  }
];

function getRandomQuestion(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function getRandomComputerChoice(choices) {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return "The computer's choice is wrong. The correct answer is: " + questionObject.answer;
  }
}

const currentQuestion = getRandomQuestion(questions);
const resultComputer = getRandomComputerChoice(currentQuestion.choices);
console.log(getResults(currentQuestion, resultComputer));

