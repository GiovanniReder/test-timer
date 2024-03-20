const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How can i create a checkbox in HTML?",
    correct_answer: '&lt;input type="checkbox"&gt;',
    incorrect_answers: [
      '&lt;input type="check"&gt;',
      "&lt;checkbox&gt;",
      '&lt;input type="button"&gt;',
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What amount of bits commonly equals one byte",
    correct_answer: "8",
    incorrect_answers: ["1", "2", "64"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "How long is anIPv6 address?",
    correct_answer: "128",
    incorrect_answers: ["8", "32", "64"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const startButton = document.getElementById("startBtn");
const mainContainer = document.querySelector("main");
const correctAnswers = [];
const container = document.getElementById("clock-container");

startButton.addEventListener("click", () => {
  let circularProgress = document.querySelector(".circular-progress");
  let progressValue = document.querySelector(".progress-value");
  let progressStartValue = 5;
  let progressEndValue = 0;
  let speed = 1000;
  let degreesPerUnit = 360 / (progressStartValue - progressEndValue);
  let progress;

  progress = setInterval(() => {
    progressStartValue--;
    progressValue.textContent = `${progressStartValue}`;

    let angle = (progressStartValue - progressEndValue) * degreesPerUnit;
    angle = angle < 0 ? angle + 360 : angle;

    circularProgress.style.background = `conic-gradient(#00ffff ${angle}deg, #827f7f47 0deg)`;

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
      let index = questions.length;
      const nextIndex = index + 1;
      if (nextIndex < questions.length) {
        clearPage();
        displayQuestion(nextIndex);
        progressStartValue = 60;
        progressEndValue = 0;

        progress = setInterval(() => {
          progressStartValue--;
          progressValue.textContent = `${progressStartValue}`;
          let angle = (progressStartValue - progressEndValue) * degreesPerUnit;
          angle = angle < 0 ? angle + 360 : angle;
          circularProgress.style.background = `conic-gradient(#00ffff ${angle}deg, #827f7f47 0deg)`;
          if (progressStartValue == progressEndValue) {
            clearInterval(progress);
          }
        }, speed);
      } else {
        console.log("End of questions.");
        redirectToResultPage();
      }
    }
  }, speed);

  clearPage();
  displayQuestion(0);
  container.classList.remove("invisibile");
});

const clearPage = () => {
  mainContainer.innerHTML = "";
};

const displayQuestion = (index) => {
  const totalScore = questions.length;

  const correctAnswersLen = correctAnswers.length;
  const currentQuest = questions[index];

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question-title-container");
  mainContainer.appendChild(questionDiv);

  const questionTitle = document.createElement("h1");
  questionTitle.classList.add("question-title");
  questionTitle.innerText = currentQuest.question;
  questionDiv.appendChild(questionTitle);

  const answers = currentQuest.incorrect_answers.concat(
    currentQuest.correct_answer
  );

  const answerDiv = document.createElement("div");
  answerDiv.classList.add("question-container");
  mainContainer.appendChild(answerDiv);

  answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("questionBtn");
    button.innerText = answer;
    button.addEventListener("click", () => {
      if (answer === currentQuest.correct_answer) {
        correctAnswers.push(currentQuest.correct_answer);
        console.log("Correct!");
      } else {
        console.log("Incorrect!");
      }

      button.classList.add("clickedBtn");
      const nextIndex = index + 1;
      if (nextIndex < questions.length) {
        clearPage();
        displayQuestion(nextIndex);
      } else {
        console.log("End of questions.");
        redirectToResultPage();
      }
    });
    answerDiv.appendChild(button);

    console.log(correctAnswersLen);
  });
};

const redirectToResultPage = () => (window.location.href = "results.html");
