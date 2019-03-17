let questionCounter = 0
let correctlyAnswered = 0
let incorrectlyAnswered = 0
let timeleft,
  questionTimer

document.addEventListener('click', e => {
  if (e.target.id === 'questionOption') {
    result(e.target.innerHTML)
  } else if (e.target.id === 'reset') {
    console.log('reset button clicked')
    init()
  }
})

const hereWeGo = _ => {
  let timeleft = 30
  questionTimer = setInterval(function () {
    if ((timeleft >= 10)) {
      document.querySelector('#timer').innerHTML = '00:' + timeleft
    } else if ((timeleft < 10) && (timeleft > 0)) {
      document.querySelector('#timer').innerHTML = '00:0' + timeleft
    } else if (timeleft === 0) {
      clearInterval(questionTimer)
      document.querySelector('#answerChoices').innerHTML = ''
      // show incorrect page
    }
    timeleft -= 1
  }, 1000)
  hideInstructions()
  showQuestionArea()
  document.querySelector('#question').textContent = questions[questionCounter].question
  for (let i = 0; i <= 3; i++) {
    let button = document.createElement('button')
    button.innerHTML = `${questions[questionCounter].options[i]}`
    button.id = 'questionOption'
    document.querySelector('#answerChoices').append(button)
  }
}

const hideInstructions = _ => {
  document.querySelector('#instructions').style.display = 'none'
  document.querySelector('#readyButton').style.display = 'none'
}

const showQuestionArea = _ => {
  document.querySelector('#questionRow').style.display = 'inline'
  document.querySelector('#answersRow').style.display = 'inline'
}

const incorrectAnswerPage = _ => {
  // say "incorrect" in #question
  document.querySelector('#question').textContent = questions[questionCounter].wrongtext
  // show incorrect image in #answerChoices
  document.querySelector('#answerChoices').innerHTML = `
  <img src="${questions[questionCounter].wrongimage}" alt="incorrect answer picture">
  `
}

const correctAnswerPage = _ => {
  // show "correct" in #question
  document.querySelector('#question').textContent = questions[questionCounter].correcttext
  // show correct image in #answerChoices
  document.querySelector('#answerChoices').innerHTML = `
  <img src="${questions[questionCounter].correctimage}" alt="correct answer image">
  `
}

const incorrectAnswerChosen = _ => {
  clearInterval(questionTimer)
  document.querySelector('#timer').innerHTML = ''
  incorrectlyAnswered++
  questionCounter++
  // document.querySelector('#answerChoices').innerHTML = ''
  // show incorrect answer page
  incorrectAnswerPage()
  setTimeout(hereWeGo, 7000)
}

const correctAnswerChosen = _ => {
  clearInterval(questionTimer)
  // document.querySelector('#timer').innerHTML = ''
  correctlyAnswered++
  questionCounter++
  // show correct answer page
  correctAnswerPage()
  document.querySelector('#answerChoices').innerHTML = ''
  setTimeout(hereWeGo, 7000)
}

const result = (clickedAnswer) => {
  if (clickedAnswer === `${questions[questionCounter].correct}`) {
    // console.log('correct')
    correctAnswerChosen()
  } else {
    // console.log('incorrect')
    incorrectAnswerChosen()
  }
}

// if correct, display something about answer being right, correctlyAnswered++, back to hereWeGo
// if wrong, display something about the answer being wrong, incorrectlyAnswered++, setInterval() to go back to hereWeGo
// if not answered, display correct answer and also something about failing (don't be Dan?), setInterval() back to hereWeGo

// whenever we click on a choice: set the clicked one to look different, set the rest to look default, modify question object to have value for wheter they answered right or wrong

// when the last question is answered OR when the time runs out for the last question
// itterate over questions, count isCorrect, display scores

// either way: move on to next question wihout user input (setInterval/setTimeout?)

// add up number questions answered, number right, number wrong, ((how long it took??))

// reset/play again button
const init = _ => {
  console.log('init func')
}

init()

const questions = [
  {
    question: '1 + 1 = ?',
    options: ['3', '11', '1', '2'],
    correct: '2',
    wrongtext: 'Nope, 1 + 1 = 2.',
    wrongimage: './assets/images/wrong.gif',
    correcttext: `Right! 1 + 1 = 2!`,
    correctimage: './assets/images/correct.gif'
  },
  {
    question: '1 + 2 = ?',
    options: ['3', '11', '1', '2'],
    correct: '3',
    wrongtext: 'Nope, 1 + 2 = 3.',
    wrongimage: './assets/images/wrong.gif',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.gif'
  },
  {
    question: '1 + 3 = ?',
    options: ['3', '11', '4', '2'],
    correct: '4',
    wrongtext: 'Nope, 1 + 3 = 4.',
    wrongimage: './assets/images/wrong.gif',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.gif'
  },
  {
    question: '1 + 4 = ?',
    options: ['3', '11', '1', '5'],
    correct: '5',
    wrongtext: 'Nope, 1 + 4 = 5.',
    wrongimage: './assets/images/wrong.gif',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.gif'
  },
  {
    question: '1 + 5 = ?',
    options: ['3', '6', '1', '2'],
    correct: '6',
    wrongtext: 'Nope, 1 + 5 = 6.',
    wrongimage: './assets/images/wrong.gif',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.gif'
  },
  {
    question: '1 + 6 = ?',
    options: ['7', '11', '1', '2'],
    correct: '7',
    wrongtext: 'Nope, 1 + 6 = 7.',
    wrongimage: './assets/images/wrong.gif',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.gif'
  },
  {
    question: '1 + 7 = ?',
    options: ['3', '8', '1', '2'],
    correct: '8',
    wrongtext: 'Nope, 1 + 7 = 8.',
    wrongimage: './assets/images/wrong.gif',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.gif'
  },
  {
    question: '1 + 8 = ?',
    options: ['3', '11', '1', '9'],
    correct: '9',
    wrongtext: 'Nope, 1 + 8 = 9.',
    wrongimage: './assets/images/wrong.gif',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.gif'
  },
  {
    question: '1 + 9 = ?',
    options: ['3', '10', '1', '2'],
    correct: '10',
    wrongtext: 'Nope, 1 + 9 = 10.',
    wrongimage: './assets/images/wrong.gif',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.gif'
  },
  {
    question: '1 + 10 = ?',
    options: ['3', '11', '1', '2'],
    correct: '11',
    wrongtext: 'Nope, 1 + 10 = 11.',
    wrongimage: './assets/images/wrong.gif',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.gif'
  }
]
