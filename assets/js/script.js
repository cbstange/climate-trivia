const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice-text'));

let score = 0;
let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [];
let acceptingAnswers = true;

// QUESTIONS ARRAY

let questions = [
    {
        question: "Test question placeholder?",
        choice1: "sample one",
        choice2: "sample two",
        choice3: "sample three",
        choice4: "sample four",
        answer: 1
    },
    {
        question: "Test question placeholder?",
        choice1: "sample one",
        choice2: "sample two",
        choice3: "sample three",
        choice4: "sample four",
        answer: 2
    },
    {
        question: "Test question placeholder?",
        choice1: "sample one",
        choice2: "sample two",
        choice3: "sample three",
        choice4: "sample four",
        answer: 3
    }
]