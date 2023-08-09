const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
let finalScoreDisplay = `You answered ${mostRecentScore} out of 10 questions correctly.`;
finalScore.innerText = finalScoreDisplay;
