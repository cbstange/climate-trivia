//HARD COADED QUESTIONS ARRAY

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
        question: " Since first recording global temperatures in 1880, how many degrees celcius has earth warmed?",
        answers: [
            { text: "5", correct: false },
            { text: "1.1 ", correct: true },
            { text: "Temperature has not risen.", correct: false },
            { text: "10", correct: false },
        ],
    },
    {
        question: " Which is the single largest cause of deforestation?",
        answers: [
            { text: "Paper products", correct: false },
            { text: "Palm Oil production ", correct: false },
            { text: "Urbanization", correct: false },
            { text: "Meat production", correct: true },
        ],
    },
    {
        question: " What are the effects that increase the global temperature?",
        answers: [
            { text: "Rising sea levels", correct: false },
            { text: "Extreme and more frequent hurricanes ", correct: false },
            { text: "Increased wildfires", correct: false },
            { text: "All of the above.", correct: true },
        ],
    },
    {
        question: " Approximately how many centimeters has the sea level risen since 1880?",
        answers: [
            { text: "50cm", correct: false },
            { text: "10cm ", correct: false },
            { text: "22cm", correct: true },
            { text: "Level unchanged", correct: false },
        ],
    },
    {
        question: " What is the leading cause of ocean pollution?",
        answers: [
            { text: "Commercial fishing", correct: true },
            { text: "Single-use plastics ", correct: false },
            { text: "Textile waste", correct: false },
            { text: "Oil refineries", correct: false },
        ],
    },
    {
        question: " Since 1990, global forests have shrunk by how many hectares?",
        answers: [
            { text: "200 million", correct: false },
            { text: "Forrest size has increased ", correct: false },
            { text: "900 thousand", correct: false },
            { text: "80 million", correct: true },
        ],
    }, {
        question: " Which of the following countries emit the most carbon dioxide?",
        answers: [
            { text: "USA", correct: false },
            { text: "Russia ", correct: false },
            { text: "China", correct: true },
            { text: "India", correct: false },
        ],
    }, {
        question: " What percentage of the global greenhouse gas emissions does the transportation sector emit?",
        answers: [
            { text: "17%", correct: true },
            { text: "70% ", correct: false },
            { text: "1%", correct: false },
            { text: "10%", correct: false },
        ],
    },
    {
        question: " How does the fashion industry contribute to environmental degradation?",
        answers: [
            { text: "Deforestation", correct: false },
            { text: "Loss of biodiversity", correct: false },
            { text: "Soil degradation", correct: false },
            { text: "All of the above.", correct: true },
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

//CREDIT TO "GREATSTACK" TUTORIAL - LINK FOUND IN README

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
    questionElement.innerHTML = `You answered ${score} out of ${questions.length} questions correctly!`;
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

