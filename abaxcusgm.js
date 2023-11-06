// Create an array of math problems
const problems = [
    { question: "2 + 3", answer: "5" },
    { question: "6 - 4", answer: "2" },
    { question: "5 * 2", answer: "10" },
    { question: "8 / 4", answer: "2" },
        { question: "2 + 4", answer: "5" },
        { question: "6 - 3", answer: "2" },
        { question: "5 * 8", answer: "10" },
        { question: "4 / 2", answer: "2" },
        { question: "12 + 7", answer: "19" },
        { question: "15 - 9", answer: "6" },
        // Add more problems here
      ];
  
  const abacusElement = document.getElementById('abacus');
  const problemElement = document.getElementById('problem');
  const answerElement = document.getElementById('answer');
  const resultElement = document.getElementById('result');
  let currentProblemIndex = 0;
  
  function displayProblem() {
    const currentProblem = problems[currentProblemIndex];
    problemElement.textContent = currentProblem.question;
  }
  
  function checkAnswer() {
    const currentProblem = problems[currentProblemIndex];
    const userAnswer = answerElement.value;
    if (userAnswer === currentProblem.answer) {
      resultElement.textContent = "Correct! ";
    } else {
      resultElement.textContent = "Incorrect. Try again!";
    }
    // Move to the next problem
    currentProblemIndex++;
    // Reset the answer input
    answerElement.value = '';
    // Display the next problem or show the final result
    if (currentProblemIndex < problems.length) {
      displayProblem();
    } else {
      problemElement.textContent = "You completed all the problems!";
    }
  }
  
  // Call the displayProblem function to start the game
  displayProblem();