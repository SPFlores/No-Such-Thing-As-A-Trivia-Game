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
  // REMEMBER TO FIX INTERVAL
  // REMEMBER TO FIX INTERVAL
  // REMEMBER TO FIX INTERVAL
  // REMEMBER TO FIX INTERVAL
}

const correctAnswerChosen = _ => {
  clearInterval(questionTimer)
  document.querySelector('#timer').innerHTML = ''
  correctAnswerPage()
  setTimeout(hereWeGo, 5000)
  // REMEMBER TO FIX INTERVAL
  // REMEMBER TO FIX INTERVAL
  // REMEMBER TO FIX INTERVAL
  // REMEMBER TO FIX INTERVAL
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
        document.querySelector('#timer').innerHTML = `<h5>You have ${(Math.ceil(timeleft / 10))} seconds left to answer</h5>`
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
    question: `Which of these is <b>NOT</b> the name of a Japanese rock band?`,
    options: [`Abingdon Boys School`, `Mass of the Fermenting Dregs`, `Seagull Screaming Kiss Her Kiss Her`, `The String Cheese Incident`],
    correct: `The String Cheese Incident`,
    wrongtext: `The only one of these that is wrong is 'The String Cheese Incident.' The rest are actual band names in Japan, though 'The String Cheese Incident' is an actual band from Colorado. You can find more strange Japanese band names <a href="https://en.wikipedia.org/wiki/List_of_musical_artists_from_Japan" target="_blank">here</a>.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `Correct, 'The String Cheese Incident' is actually from Colorado. If you want to learn more about strange Japanese band names, check out <a href="https://en.wikipedia.org/wiki/List_of_musical_artists_from_Japan" target="_blank">this</a> list.`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `Which of these is a species of the <i>Pieza</i> genus of fly?`,
    options: [`Pieza lunulata`, `Pieza pi`, `Pieza rudis`, `Pieza tabanidae`],
    correct: `Pieza pi`,
    wrongtext: `Actually, that's not true. <i>Pieza kake</i>, <i>Pieza pi</i>, <i>Pieza rhea</i>, and <i>Pieza deresistans</i> are all species of the <i>Pieza</i> genus. Some funny names, right? Check them all out <a href="https://en.wikipedia.org/wiki/Pieza" target="_blank">here</a>.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `<i>Pieza kake</i>, <i>Pieza pi</i>, <i>Pieza rhea</i>, and <i>Pieza deresistans</i> are all species of the <i>Pieza</i> genus of fly. That's science humor for you. Check them all out <a href="https://en.wikipedia.org/wiki/Pieza" target="_blank">here</a>.`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `What country has the highest density of metal bands in the world?`,
    options: [`Finland`, `England`, `Russia`, `Ireland`],
    correct: `Finland`,
    wrongtext: `Believe it or not, it's Finland! Check out a <a href="https://www.gislounge.com/map-of-heavy-metal-bands-by-country-per-capita/" target="_blank">map</a> calculated per 1000,000 people in countries around the world.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `Finland actually has the most when compared against a country’s total population. There's even a <a href="https://www.gislounge.com/map-of-heavy-metal-bands-by-country-per-capita/" target="_blank">map</a> color-coded to show where the most bands are located.`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `Shuttlecocks used in professional badminton are made of feathers from what part of a goose?`,
    options: [`neck`, `left wing`, `right wing`, `chest`],
    correct: `left wing`,
    wrongtext: `Professional badminton shuttlecocks are made only from the feathers from the left wing of geese. When feathers from the right wing are used, the shuttlecock spins counterclockwise, and that simply won't do where professionals are concerned. You can find out more about the aerodynamics and process <a href="https://www.inverse.com/article/19768-2016-rio-olympics-goose-geese-left-wing-badminton-shuttlecock" target="_blank">here</a>.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `Only left wing feathers will do for professional shuttlecocks. When made using these feathers, a clockwise spin is produced, but feathers from the right wing produce a counterclockwise spin. Who knew physics was for the birds? More info on this topic <a href="https://www.inverse.com/article/19768-2016-rio-olympics-goose-geese-left-wing-badminton-shuttlecock" target="_blank">here</a>.`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `Restaurants in 1950s Vietnam used to do what to their spoons to stop people from stealing them?`,
    options: [`put holes in them`, `made them really small`, `used sporks instead`, `made them flat`],
    correct: `put holes in them`,
    wrongtext: `Actually, they put holes in them! As counterintuitive as it sounds, it worked. People didn't like the way the spoons worked and stopped stealing them. You can find out more about this and the history of Pho <a href="https://www.vietworldkitchen.com/blog/2018/03/the-history-of-pho.html" target="_blank">here</a>.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `They put holes in them! As weird and crazy as it sounds, it worked for a while. People stopped stealing them becuase they didn't work well. You can find out more about this and the history of Pho <a href="https://www.vietworldkitchen.com/blog/2018/03/the-history-of-pho.html" target="_blank">here</a>.`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `What font was the discovery of the Higgs boson announced in?`,
    options: [`Comic Sans`, `Times New Roman`, `Arial`, `Helvetica`],
    correct: `Comic Sans`,
    wrongtext: `To the horror of designers everywhere, it was released in Comic Sans. Even Comic Sans designer Vincent Connare said that it probably wasn't the best choice for this historic occasion. CERN even <a href="https://www.vietworldkitchen.com/blog/2018/03/the-history-of-pho.html" target="_blank">switched all of their communications</a> to the font for a while after the presentation.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `It was released in Comic Sans, unfortunately. Even the designer of the font, Vincent Connare, said that it wasn't the best choice for the historic occasion. CERN <a href="https://www.vietworldkitchen.com/blog/2018/03/the-history-of-pho.html" target="_blank">switched all of their communications</a> to the font for a while after the presentation, though it was later revealed to be a prank.`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `Aproximately how many rounds of golf did Woodrow Wilson play while in office?`,
    options: [`1200`, `200`, `10`, `700`],
    correct: `1200`,
    wrongtext: `Actually, Wilson was an avid golfer. He's reported to be the most prolific presidential golfer with around 1200 games played while in office. There's ben a lot of presidents interested in playing golf, as <a href="https://www.golfchannel.com/article/golf-central-blog/obamas-final-tally-333-rounds-golf-potus" target="_blank">this</a> article points out.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `Wilson really, really loved playing golf. Even more than our last <a href="https://www.golfchannel.com/article/golf-central-blog/obamas-final-tally-333-rounds-golf-potus" target="_blank">few presidents</a>. No one else has come even close to his record of 1200 rounds of golf during his tenure.`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `What are Dutch trains fitted with to get rid of leaves on the line?`,
    options: [`lasers`, `plows`, `compressed air`, `brooms`],
    correct: `lasers`,
    wrongtext: `No, it's so much cooler than that, it's <a href="https://spectrum.ieee.org/tech-talk/transportation/safety/dutch-trains-prove-that-everything-is-better-with-lasers" target="_blank">FREAKING LASERS</a>! In a move straight out of science fiction, Dutch trains have been equipped wiht lasers that can vaporize any leaves on the track. Leaves that have been run over can form hard crusts on tracks or wheels, causing delays up to 4.5 million hours a year.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `It's so cool, it's lasers! Run over leaves have caused up to 4.5 million hours of delays on Dutch railways in past years so recently trains were outfitted with lasers to <a href="https://spectrum.ieee.org/tech-talk/transportation/safety/dutch-trains-prove-that-everything-is-better-with-lasers" target="_blank">vaporize organic material</a> on the tracks. Science fiction meets science fact!`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `In Wales, what used to determine the amount of land you could claim around your house?`,
    options: [`how far you could throw an axe`, `how far you could run in 5 seconds`, `30 paces from the walls of your house`, `how many people you had in your family`],
    correct: `how far you could throw an axe`,
    wrongtext: `Nah, it was so hardcore--it was how far you could throw an axe! This came after you had built the house on that land in one day, of course. If you could do <a href="http://naturalhomes.org/the-ugly-house.htm" target="_blank">this</a> though then you could throw an axe from each corner of the house to claim it as your own.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `Hardcore axe throwing! After you had built a house in one day and sent smoke up the chimney, you could <a href="http://naturalhomes.org/the-ugly-house.htm" target="_blank">throw an axe</a> from each corner of the house to claim the land as your own. Bet that made for some interesting neighborhoods, huh?`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: `Officials have seen up to 30% of cocaine in the United States being smuggled into the country by what vehicle?`,
    options: [`submarine`, `tank`, `airplane`, `car`],
    correct: `submarine`,
    wrongtext: `Submarines have started to become a huge part of the narative when talking about how drugs enter the United States, especially cocaine. So called <a href="https://www.usatoday.com/story/news/nation-now/2017/12/11/u-s-coast-guard-intercepts-semi-submersible-vessel-packed-3-800-pounds-cocaine/939668001/" target="_blank">"narco subs"</a> have been seen more and more frequently in waters around the US, and multiple have been intercepted by the Coast Guard.`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `Many homemade submarine-like vehicles are now bringing cocaine and other drugs into the United States. These <a href="https://www.usatoday.com/story/news/nation-now/2017/12/11/u-s-coast-guard-intercepts-semi-submersible-vessel-packed-3-800-pounds-cocaine/939668001/" target="_blank">"narco subs"</a>, as they are called, have been found with thousands of pounds of cacaine in them floating through America's border waters.`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: ``,
    options: [``, ``, ``, ``],
    correct: ``,
    wrongtext: `<a href="" target="_blank"></a>`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `<a href="" target="_blank"></a>`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: ``,
    options: [``, ``, ``, ``],
    correct: ``,
    wrongtext: `<a href="" target="_blank"></a>`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `<a href="" target="_blank"></a>`,
    correctimage: `./assets/images/correct.gif`
  },
  {
    question: ``,
    options: [``, ``, ``, ``],
    correct: ``,
    wrongtext: `<a href="" target="_blank"></a>`,
    wrongimage: `./assets/images/wrong.gif`,
    correcttext: `<a href="" target="_blank"></a>`,
    correctimage: `./assets/images/correct.gif`
  }
]
