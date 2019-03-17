let questionCounter = 0
let correctlyAnswered = 0
let incorrectlyAnswered = 0

// eventlisteners to listen for:
document.addEventListener('click', e => {
  // user clicks play/ready button
  if (e.target.id = 'readyButton') {
    console.log('ready button clicked')
  }
  // user clicks on an option in a question
  else if (e.target.id = 'questionOption') {
    console.log('questionOption')
  }
  // user clicks on the reset button to play again
  else if (e.target.id = 'reset') {
    console.log('reset button clicked')
  }
})

const hereWeGo = _ => {
  // page with question populates once the play/ready button is pressed OR when the next question should be displayed
  // gives question from array at index questionCounter with 4 answers, each of them clickable (refer to eventlistener above) -- need to make buttons!!
  // eval if the answer was correct (check to see if question[questionCounter].correct was clicked????)
  // if correct, display something about answer being right, correctlyAnswered++
  // is wrong, display something about the answer being wrong, incorrectlyAnswered++
  // if not answered, display correct answer and also something about failing (don't be Dan?)
  console.log('here we go')
  let timeleft = 30
  const questionTimer = setInterval(function () {
    document.querySelector('#timer').innerHTML = '00:' + timeleft
    timeleft -= 1
    if ((timeleft < 10) && (timeleft > 0)) {
      document.querySelector('#timer').innerHTML = '00:0' + timeleft
    } else if (timeleft <= 0) {
      clearInterval(questionTimer)
      document.querySelector('#timer').innerHTML = '00:00'
      // let timeleft = 30 when you go to a new question
    }
  }, 1000)
}


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
    wrong1: '3',
    wrong2: '11',
    wrong3: '1',
    correct: '2',
    wrongtext: 'Nope, 1 + 1 = 2.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: `Right! 1 + 1 = 2!`,
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 2 = ?',
    wrong1: '4',
    wrong2: '11',
    wrong3: '1',
    correct: '3',
    wrongtext: 'Nope, 1 + 2 = 3.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 3 = ?',
    wrong1: '3',
    wrong2: '11',
    wrong3: '1',
    correct: '4',
    wrongtext: 'Nope, 1 + 3 = 4.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 4 = ?',
    wrong1: '3',
    wrong2: '11',
    wrong3: '1',
    correct: '5',
    wrongtext: 'Nope, 1 + 4 = 5.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 5 = ?',
    wrong1: '3',
    wrong2: '11',
    wrong3: '1',
    correct: '6',
    wrongtext: 'Nope, 1 + 5 = 6.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 6 = ?',
    wrong1: '3',
    wrong2: '11',
    wrong3: '1',
    correct: '7',
    wrongtext: 'Nope, 1 + 6 = 7.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 7 = ?',
    wrong1: '3',
    wrong2: '11',
    wrong3: '1',
    correct: '8',
    wrongtext: 'Nope, 1 + 7 = 8.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 8 = ?',
    wrong1: '3',
    wrong2: '11',
    wrong3: '1',
    correct: '9',
    wrongtext: 'Nope, 1 + 8 = 9.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 9 = ?',
    wrong1: '3',
    wrong2: '11',
    wrong3: '1',
    correct: '10',
    wrongtext: 'Nope, 1 + 9 = 10.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  },
  {
    question: '1 + 10 = ?',
    wrong1: '3',
    wrong2: '9',
    wrong3: '1',
    correct: '11',
    wrongtext: 'Nope, 1 + 10 = 11.',
    wrongimage: './assets/images/wrong.jpg',
    correcttext: 'Right! 1 + 1 = 2!',
    correctimage: './assets/images/correct.jpg'
  }
]
