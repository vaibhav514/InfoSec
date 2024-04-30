let score = 0;
let result = false;
let timeLeft = 180;
let lock = false;

const countdownElem = document.getElementById('countdown');
  const questionElem = document.getElementById('question');
  const options = document.querySelectorAll('ul li');
  const nextBtn = document.getElementById('nextBtn');

  const updateTimer = () => {
      countdownElem.textContent = timeLeft;
      if (timeLeft <= 15) {
          document.querySelector('.timer').classList.add('warning');
      }
      if (timeLeft === 0) {
          console.log("Time Over");
          result = true;
      }
  };

  const checkAnswer = (e) => {
      if (!lock) {
          const selectedOption = parseInt(e.target.dataset.option);
          const correctAnswer = data[index].ans;
          if (selectedOption === correctAnswer) {
              e.target.classList.add('correct');
              score++;
          } else {
              e.target.classList.add('wrong');
              options[correctAnswer - 1].classList.add('correct');
          }
          lock = true;
      }
  };

  const nextQuestion = () => {
      if (lock) {
          index++;
          if (index === data.length) {
              result = true;
          } else {
              questionElem.textContent = `${index + 1}. ${data[index].question}`;
              options.forEach(option => option.classList.remove('wrong', 'correct'));
              lock = false;
          }
      }
  };

  const resetQuiz = () => {
      index = 0;
      score = 0;
      result = false;
      lock = false;
      timeLeft = 180;
      countdownElem.textContent = timeLeft;
      document.querySelector('.timer').classList.remove('warning');
      questionElem.textContent = `${index + 1}. ${data[index].question}`;
      options.forEach(option => option.classList.remove('wrong', 'correct'));
  };

  const updateIndexDisplay = () => {
      document.querySelector('.index').textContent = `${index + 1} out of ${data.length} questions`;
  };

  setInterval(() => {
      if (!result) {
          timeLeft = Math.max(0, timeLeft - 1);
          updateTimer();
      }
  }, 1000);

  options.forEach(option => {
      option.addEventListener('click', (e) => {
          checkAnswer(e);
      });
  });

  nextBtn.addEventListener('click', () => {
      nextQuestion();
      updateIndexDisplay();
  });

  // Initialize first question
  questionElem.textContent = `${index + 1}. ${data[index].question}`;
  updateIndexDisplay();

let index = 0;