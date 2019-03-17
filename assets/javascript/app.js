let questionCounter = 0
let correctlyAnswered = 0
let incorrectlyAnswered = 0
let timeleft
let questionTimer

document.addEventListener('click', e => {
  if (e.target.id === 'questionOption') {
    result(e.target.innerHTML)
    // console.log('will run result check function')
  } else if (e.target.id === 'reset') {
    console.log('reset button clicked')
    init()
  }
})

// page with question populates once the play/ready button is pressed OR when the next question should be displayed
const hereWeGo = _ => {
  // console.log('here we go')
  let timeleft = 30
  questionTimer = setInterval(function () {
    if ((timeleft >= 10)) {
      document.querySelector('#timer').innerHTML = '00:' + timeleft
    } else if ((timeleft < 10) && (timeleft > 0)) {
      document.querySelector('#timer').innerHTML = '00:0' + timeleft
    } else if (timeleft <= 0) {
      clearInterval(questionTimer)
      document.querySelector('#timer').innerHTML = '00:00'
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

const incorrectAnswerChosen = _ => {
  clearInterval(questionTimer)
  
  // show incorrect answer page
  // incorrectlyAnswered++
  questionCounter++
  console.log(questionCounter)
  document.querySelector('#answerChoices').innerHTML = ''
  // timeleft = 30
  // hereWeGo()
}

const correctAnswerChosen = _ => {
  clearInterval(questionTimer)
  
  // show correct answer page
  // correctlyAnswered++
  questionCounter++
  console.log(questionCounter)
  document.querySelector('#answerChoices').innerHTML = ''
  // timeleft = 30
  hereWeGo()
}

const result = (clickedAnswer) => {
  if (clickedAnswer === `${questions[questionCounter].correct}`) {
    console.log('correct')
    correctAnswerChosen()
  } else {
    console.log('incorrect')
    incorrectAnswerChosen()
  }
}

// eval if the answer was correct (check to see if question[questionCounter].correct was clicked????)
// if correct, display something about answer being right, correctlyAnswered++, back to hereWeGo
// if wrong, display something about the answer being wrong, incorrectlyAnswered++, setInterval() to go back to hereWeGo
// if not answered, display correct answer and also something about failing (don't be Dan?), setInterval() back to hereWeGo
// let timeleft = 30 when you go to a new question

// whenever we click on a choice: set the clicked one to look different, set the rest to look default, modify question object to have value for wheter they answered right or wrong

// [
//  { questionid, isCorrect}
// ]

// when the last question is answered OR when the time runs out for the last question
// itterate over questions, count isCorrect, display scores

// either way: move on to next question wihout user input (setInterval/setTimeout?)

// add up number questions answered, number right, number wrong, ((how long it took??))

// reset/play again button
const init = _ => {
  console.log('init func')
}

// object of all the questions, wrong choices, correct choice, wrong text, wrong img, correct text, correct image

init()

const questions = [
  {
    question: '1 + 1 = ?',
    options: ['3', '11', '1', '2'],
    correct: '2',
    wrongtext: 'Nope, 1 + 1 = 2.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: `Right! 1 + 1 = 2!`,
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 2 = ?',
    options: ['3', '11', '1', '2'],
    correct: '3',
    wrongtext: 'Nope, 1 + 2 = 3.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 3 = ?',
    options: ['3', '11', '4', '2'],
    correct: '4',
    wrongtext: 'Nope, 1 + 3 = 4.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 4 = ?',
    options: ['3', '11', '1', '5'],
    correct: '5',
    wrongtext: 'Nope, 1 + 4 = 5.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 5 = ?',
    options: ['3', '6', '1', '2'],
    correct: '6',
    wrongtext: 'Nope, 1 + 5 = 6.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 6 = ?',
    options: ['7', '11', '1', '2'],
    correct: '7',
    wrongtext: 'Nope, 1 + 6 = 7.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 7 = ?',
    options: ['3', '8', '1', '2'],
    correct: '8',
    wrongtext: 'Nope, 1 + 7 = 8.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 8 = ?',
    options: ['3', '11', '1', '9'],
    correct: '9',
    wrongtext: 'Nope, 1 + 8 = 9.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 9 = ?',
    options: ['3', '10', '1', '2'],
    correct: '10',
    wrongtext: 'Nope, 1 + 9 = 10.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 10 = ?',
    options: ['3', '11', '1', '2'],
    correct: '11',
    wrongtext: 'Nope, 1 + 10 = 11.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  }
]
