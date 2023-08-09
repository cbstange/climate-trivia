const questions = [
    {
        question: " The animal agriculture industry uses what percent of the global available freshwater?",
        answers: [
            { text: "70%", correct: true },
            { text: "20%", correct: false },
            { text: "5%", correct: false },
            { text: "50%", correct: false },
        ],
    },
    {
        question: " which is largest desert?",
        answers: [
            { text: "kalh", correct: false },
            { text: "gobi ", correct: false },
            { text: "sahara", correct: false },
            { text: "north pole", correct: true },
        ],
    },
    {
        question: " which is smallest continent?",
        answers: [
            { text: "asia", correct: false },
            { text: "austria", correct: true },
            { text: "africa", correct: false },
            { text: "arctoc", correct: false },
        ],
    },
];

// CONSTANTS 

const questionElement = document.getElementById("question");
const learnMore = document.getElementById("learn-more");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    learnMore.innerHTML = `To learn more about what you can do to lessen your impact, click here.`;
    learnMore.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

