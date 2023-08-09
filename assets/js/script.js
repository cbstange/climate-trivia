const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCountValue = document.getElementById("questionCount");
const scoreValue = document.getElementById("score");


let score = 0;
let currentQuestion = {};
let questionCounter = 0;
let availableQuestions = [];

// QUESTIONS ARRAY

let questions = [
    {
        question: "The animal agriculture industy uses what percent of the global available freshwater?",
        choice1: "70%",
        choice2: "20%",
        choice3: "5%",
        choice4: "50%",
        answer: 1
    },
    {
        question: "question 2",
        choice1: "samsergfdple one",
        choice2: "sampddddle two",
        choice3: "samddwetewple three",
        choice4: "sample four",
        answer: 2
    },
    {
        question: "question 3",
        choice1: "samplsergfde one",
        choice2: "sample two",
        choice3: "sample three",
        choice4: "sample four",
        answer: 3
    }
];

const MAX_QUESTIONS = 10;
const POINT_VALUE = 1;

gameStart = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        // NAVIGATE TO GAME OVER PAGE 
        return window.location.assign("/over.html");
    }

    questionCounter++;
    questionCountValue.innerText = questionCounter + "/" + MAX_QUESTIONS;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);

};

choices.forEach(choice => {
    choice.addEventListener("click", (e) => {
        const userChoice = e.target;
        const selectedAnswer = userChoice.dataset["number"];

        const applyClass =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

            if (applyClass === "correct") {
                incrementScore(POINT_VALUE);
            }

        userChoice.parentElement.classList.add(applyClass);

        setTimeout(() => {
            userChoice.parentElement.classList.remove(applyClass);
            getNewQuestion();
        }, 1500);

    });
});

incrementScore = num => {
    score =+ num;
    scoreValue.innerText = score;
};

gameStart();