let questions = [
    {
        question: "What is the Capital of Gujarat?",
        answers: [
            { text: "Gandhinagar", correct: true },
            { text: "Delhi", correct: false },
            { text: "Mumbai", correct: false },
            { text: "Ahmedabad", correct: false }
        ]
    },
    {
        question: "What is the Biggest city of Gujarat?",
        answers: [
            { text: "Gandhinagar", correct: false },
            { text: "Delhi", correct: false },
            { text: "Mumbai", correct: false },
            { text: "Ahmedabad", correct: true }
        ]
    },
    {
        question: "Which river is known as the 'Lifeline of Gujarat'?",
        answers: [
            { text: "Sabarmati", correct: false },
            { text: "Narmada", correct: true },
            { text: "Tapi", correct: false },
            { text: "Mahi", correct: false }
        ]
    },
    {
        question: "Which city is famous for its Patola sarees?",
        answers: [
            { text: "Surat", correct: false },
            { text: "Ahmedabad", correct: false },
            { text: "Patan", correct: true },
            { text: "Rajkot", correct: false }
        ]
    },
    {
        question: "Which city is known as the 'Diamond City of India'?",
        answers: [
            { text: "Surat", correct: true },
            { text: "Ahmedabad", correct: false },
            { text: "Vadodara", correct: false },
            { text: "Rajkot", correct: false }
        ]
    },
    {
        question: "Which famous folk dance of Gujarat?",
        answers: [
            { text: "Bhangra", correct: false },
            { text: "Kathak", correct: false },
            { text: "Odissi", correct: false },
            { text: "Garba", correct: true }
        ]
    },
    {
        question: "Which is a famous wildlife sanctuary in Gujarat?",
        answers: [
            { text: "Gir National Park", correct: true },
            { text: "Kaziranga", correct: false },
            { text: "Sundarbans", correct: false },
            { text: "Jim Corbett", correct: false }
        ]
    },
    {
        question: "Which port is known as the largest in Gujarat?",
        answers: [
            { text: "Mundra Port", correct: true },
            { text: "Kandla Port", correct: false },
            { text: "Okha Port", correct: false },
            { text: "Porbandar Port", correct: false }
        ]
    },
    {
        question: "Which is the official language of Gujarat?",
        answers: [
            { text: "Gujarati", correct: true },
            { text: "Hindi", correct: false },
            { text: "Marathi", correct: false },
            { text: "English", correct: false }
        ]
    },
    {
        question: "Which city is associated with the Indus Valley Civilization in Gujarat?",
        answers: [
            { text: "Lothal", correct: true },
            { text: "Dholavira", correct: false },
            { text: "Mohenjo-Daro", correct: false },
            { text: "Harappa", correct: false }
        ]
    }
];


const nameInputScreen = document.getElementById("name-input-screen");
const welcomeScreen = document.getElementById("welcome-screen");
const quizAppScreen = document.getElementById("quiz-app-screen");

const usernameInput = document.getElementById("username-input");
const submitNameBtn = document.getElementById("submit-name-btn");
const welcomeMessage = document.getElementById("welcome-message");
const startQuizBtn = document.getElementById("start-quiz-btn");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("ans-btn");
const nextButton = document.getElementById("nextbtn");
const progressBar = document.getElementById("progress-bar");
const questionCounter = document.getElementById("question-counter");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 35;
let timerInterval;
let userName = "";

function showScreen(screenToShow) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(screen => screen.classList.remove("active"));
    screenToShow.classList.add("active");
}

submitNameBtn.addEventListener("click", () => {
    

    userName = usernameInput.value.trim();
    if (userName) {
        welcomeMessage.innerHTML = `Hello, <strong>${userName}</strong>!`;
        showScreen(welcomeScreen);
         submitNameBtn.disabled = true;
    } else {
        alert("Please enter your name!");
        usernameInput.focus();
       
    }
});

startQuizBtn.addEventListener("click", () => {
    showScreen(quizAppScreen);
    startQuiz();
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    progressBar.style.width = "0%";
    document.getElementById("progress-label").innerText = "0%";
    questionCounter.style.display = "block";
    document.getElementById("time").innerText = "35";
    questions = questions.sort(() => Math.random() - 0.5).slice(0, 10);

    showQuestion();
}

function startTimer() {
    timeLeft = 35;
    document.getElementById("time").innerText = timeLeft;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            autoSkip();
        }
    }, 1000);
}

function autoSkip() {
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });
    clearInterval(timerInterval);
    nextButton.style.display = "block";
}

function updateProgressBar() {
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    document.getElementById("progress-label").innerText = `${Math.round(progressPercentage)}%`;
}

function showQuestion() {
    resetState();
    document.getElementById("timer").style.display = "block";
    startTimer();

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    questionCounter.innerText = `Question: ${currentQuestionIndex + 1} of ${questions.length}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });

    updateProgressBar();
}

function resetState() {
    clearInterval(timerInterval);
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    clearInterval(timerInterval);
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
        score++;
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("incorrect");
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
    document.getElementById("timer").style.display = "none";
    questionCounter.style.display = "none";
questionElement.innerHTML = `🎉 Great job, <strong>${userName}</strong>! You scored <strong>${score}</strong> out of <strong>${questions.length}</strong>`;
localStorage.setItem("lastScore", `${score}/${questions.length}`);

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    progressBar.style.width = "100%";
    document.getElementById("progress-label").innerText = "100%";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
usernameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        submitNameBtn.click();
    }
});

nextButton.addEventListener("click", () => {
    if (nextButton.innerHTML === "Play Again") {
        showScreen(nameInputScreen);
        usernameInput.value = "";
    } else {
        handleNextButton();
    }
});

showScreen(nameInputScreen);
