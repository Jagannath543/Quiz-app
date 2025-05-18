const questions = [
  { question: "1. What is the capital of France?", options: ["Paris", "London", "Berlin", "Rome"], correct: "Paris" },
  { question: "2. Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: "Mars" },
  { question: "3. What is the chemical symbol for gold?", options: ["Au", "Ag", "Cu", "Fe"], correct: "Au" },
  { question: "4. Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"], correct: "William Shakespeare" },
  { question: "5. What is the largest mammal in the world?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], correct: "Blue Whale" },
  { question: "6. What is the smallest planet in our solar system?", options: ["Mercury", "Mars", "Venus", "Earth"], correct: "Mercury" },
  { question: "7. Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correct: "Leonardo da Vinci" },
  { question: "8. What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: "Nile" },
  { question: "9. Who was the first person to walk on the moon?", options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"], correct: "Neil Armstrong" },
  { question: "10. What is the capital of Japan?", options: ["Seoul", "Beijing", "Tokyo", "Hanoi"], correct: "Tokyo" }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 100;
let timer;

const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const timerDisplay = document.getElementById('timer');
const scoreContainer = document.getElementById('score-container');
const scoreText = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  scoreContainer.classList.add('hidden');
  showQuestion();
  startTimer();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  answerButtons.innerHTML = '';
  currentQuestion.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    answerButtons.appendChild(button);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestionIndex].correct;
  if (selected === correct) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timer);
  scoreText.textContent = score;
  scoreContainer.classList.remove('hidden');
}

function exitQuiz() {
  window.close();
}

restartButton.onclick = startQuiz;

startQuiz();
