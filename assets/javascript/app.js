let questionCounter = 0
let correctlyAnswered = 0
let incorrectlyAnswered = 0
let timeTaken = 0
let timeleft,
  questionTimer

document.addEventListener('click', e => {
  if (e.target.classList.contains('questionOption')) {
    result(e.target.innerHTML)
  }
})

const shuffleQuestions = (a) => {
  for (let i = (a.length - 1); i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  hereWeGo()
}

const shuffle = (a) => {
  for (let i = (a.length - 1); i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let x = a[i]
    a[i] = a[j]
    a[j] = x
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

const clearAnswerChoices = _ => {
  document.querySelector('#answerChoices').innerHTML = ''
}

const incorrectAnswerPage = _ => {
  document.querySelector('#question').innerHTML = `
  ${questions[questionCounter].wrongtext}
  `
  document.querySelector('#answerChoices').innerHTML = `
  <img src="${questions[questionCounter].wrongimage}" alt="incorrect answer picture" class="questionImage">
  `
  incorrectlyAnswered++
  questionCounter++
}

const correctAnswerPage = _ => {
  document.querySelector('#question').innerHTML = `
  ${questions[questionCounter].correcttext}
  `
  document.querySelector('#answerChoices').innerHTML = `
  <img src="${questions[questionCounter].correctimage}" alt="correct answer image" class="questionImage">
  `
  correctlyAnswered++
  questionCounter++
}

const noAnswerPage = _ => {
  document.querySelector('#question').innerHTML = `You didn't answer this one! Couldn't make up your mind? That's alright! ${questions[questionCounter].correcttext}`
  document.querySelector('#answerChoices').innerHTML = `
  <img src="${questions[questionCounter].wrongimage}" alt="no answer image" class="questionImage">
  `
}

const finalPage = _ => {
  document.querySelector('#timer').style.display = 'none'
  document.querySelector('#questionRow').style.display = 'none'
  document.querySelector('#answersRow').style.display = 'none'
  document.querySelector('#resultsRow').style.display = 'inline'
  document.querySelector('#results').innerHTML = `
  <h4>Questions correct: ${correctlyAnswered}</h4>
  <h4>Questions wrong: ${incorrectlyAnswered}</h4>
  <h4>You took ${timeTaken / 10} seconds to complete this quiz.</h4>
  <h3>Play again?</h3>
  `
  document.querySelector('#reset').style.display = 'inline'
  document.querySelector('#moreInfoRow').style.display = 'inline'
}

const incorrectAnswerChosen = _ => {
  clearInterval(questionTimer)
  document.querySelector('#timer').innerHTML = ''
  incorrectAnswerPage()
  setTimeout(hereWeGo, 5000)
}

const correctAnswerChosen = _ => {
  clearInterval(questionTimer)
  document.querySelector('#timer').innerHTML = ''
  correctAnswerPage()
  setTimeout(hereWeGo, 5000)
}

const result = (clickedAnswer) => {
  if (clickedAnswer === `${questions[questionCounter].correct}`) {
    correctAnswerChosen()
  } else {
    incorrectAnswerChosen()
  }
}

const hereWeGo = _ => {
  if (questionCounter < questions.length) {
    timeleft = 300
    questionTimer = setInterval(function () {
      if ((timeleft > 0)) {
        document.querySelector('#timer').innerHTML = `<h4>You have ${(Math.ceil(timeleft / 10))} seconds left to answer`
      } else if (timeleft === 0) {
        clearInterval(questionTimer)
        document.querySelector('#answerChoices').innerHTML = ''
        noAnswerPage()
      }
      timeleft -= 1
      timeTaken += 1
    }, 100)
    hideInstructions()
    showQuestionArea()
    clearAnswerChoices()
    document.querySelector('#question').textContent = questions[questionCounter].question
    shuffle(questions[questionCounter].options)
    for (let i = 0; i <= 3; i++) {
      let button = document.createElement('button')
      button.className = 'yellow accent-2 btn-large black-text z-depth-3 questionOption flow-text'
      button.innerHTML = `${questions[questionCounter].options[i]}`
      document.querySelector('#answerChoices').append(button)
    }
  } else if (questionCounter === questions.length) {
    finalPage()
  }
}

const reset = _ => {
  document.querySelector('#timer').style.display = 'inline'
  document.querySelector('#resultsRow').style.display = 'none'
  document.querySelector('#results').innerHTML = ''
  document.querySelector('#reset').style.display = 'none'
  questionCounter = 0
  correctlyAnswered = 0
  incorrectlyAnswered = 0
  timeTaken = 0
  shuffleQuestions(questions)
}

const questions = [
  {
    question: `In 1998, Singapore held a beauty contest where a portion of the judging was based on how good a contestants website was. What percentage of the total points did this account for?`,
    options: [`60%`, `90%`, `10%`, `40%`],
    correct: `60%`,
    wrongtext: `60% of marks were awarded for having a good website. Stella Tan, 23, was eventually named Singapore's first Miss Internet in a brains-and-beauty pageant that put high importance on technological knowledge. A new article about the competition can be found <a href="http://news.bbc.co.uk/2/hi/science/nature/156900.stm" target="_blank">here</a>.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `Correct! 60% of the judging marks were awarded for Internet knowledge, 20% for confidence and interview skills, and 20% for looks and appearance. 23 year old Stella Tan, a master's student in Genetic Engineering, was eventually crowned the winner in Singapore's first ever Miss Internet competition. Go <a href="http://news.bbc.co.uk/2/hi/science/nature/156900.stm" target="_blank">here</a> to learn more.`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `Which of these is NOT the name of a Japanese rock band?`,
    options: [`Abingdon Boys School`, `Mass of the Fermenting Dregs`, `Seagull Screaming Kiss Her Kiss Her`, `The String Cheese Incident`],
    correct: `The String Cheese Incident`,
    wrongtext: `The only one of these that is wrong is 'The String Cheese Incident.' The rest are actual band names in Japan, though 'THe String CHeese INcident' is an actual band from Colorado. You can find more strange Japanese band names <a href="https://en.wikipedia.org/wiki/List_of_musical_artists_from_Japan" target="_blank">here</a>.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `Correct, 'The String Cheese Incident' is actually from Colorado. If you want to learn more about strange Japanese band names, check out <a href="https://en.wikipedia.org/wiki/List_of_musical_artists_from_Japan" target="_blank">this</a> list.`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `1 + 3 = ?`,
    options: [`3`, `11`, `4`, `2`],
    correct: `4`,
    wrongtext: `Nope, 1 + 3 = 4.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `Right! 1 + 3 = 4!`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `1 + 4 = ?`,
    options: [`3`, `11`, `1`, `5`],
    correct: `5`,
    wrongtext: `Nope, 1 + 4 = 5.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `Right! 1 + 4 = 5!`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `1 + 5 = ?`,
    options: [`3`, `6`, `1`, `2`],
    correct: `6`,
    wrongtext: `Nope, 1 + 5 = 6.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `Right! 1 + 5 = 6!`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `1 + 6 = ?`,
    options: [`7`, `11`, `1`, `2`],
    correct: `7`,
    wrongtext: `Nope, 1 + 6 = 7.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `Right! 1 + 6 = 7!`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `1 + 7 = ?`,
    options: [`3`, `8`, `1`, `2`],
    correct: `8`,
    wrongtext: `Nope, 1 + 7 = 8.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `Right! 1 + 7 = 8!`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `1 + 8 = ?`,
    options: [`3`, `11`, `1`, `9`],
    correct: `9`,
    wrongtext: `Nope, 1 + 8 = 9.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `Right! 1 + 8 = 9!`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `1 + 9 = ?`,
    options: [`3`, `10`, `1`, `2`],
    correct: `10`,
    wrongtext: `Nope, 1 + 9 = 10.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `Right! 1 + 9 = 10!`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `1 + 10 = ?`,
    options: [`3`, `11`, `1`, `2`],
    correct: `11`,
    wrongtext: `Nope, 1 + 10 = 11.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `Right! 1 + 10 = 11!`,
    correctimage: `./assets/images/correct.gif`
  }
]
