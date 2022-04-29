const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
   {
       question: "What country has the highest life expectancy?",
       choice1: 'Japan',
       choice2: 'Singapore',
       choice3: 'China',
       choice4: 'Switzerland',
       answer:3,
    },
   {
    question: "Which language has the more native speakers after chinese?",
    choice1: 'English',
    choice2: 'Spanish',
    choice3: 'French',
    choice4: 'Hindi',
    answer:2,
   },
   {
    question: "Who has won the most total Academy Awards?",
    choice1: 'Walt Disney',
    choice2: 'Katharine Hepburn',
    choice3: 'Meryl Streep',
    choice4: 'John Ford',
    answer:1,
   },
   {
    question: "What country drinks the most coffee per capita?",
    choice1: 'Finland',
    choice2: 'Colombia',
    choice3: 'United States',
    choice4: 'Ireland',
    answer:1,
   },
   {
    question: "What is a group of pandas known as?",
    choice1: 'a band',
    choice2: 'a business',
    choice3: 'an embarrassment',
    choice4: ' a wisdom',
    answer:3,
   },
   {
    question: "How many bones do we have in an ear?",
    choice1: '0',
    choice2: '1',
    choice3: '2',
    choice4: '3',
    answer:4,
   },
{
    question: "What Netflix show had the most streaming views in 2021?",
       choice1: 'Squid Game',
       choice2: 'Lupin part one',
       choice3: 'Money Heist season five',
       choice4: 'Maid',
       answer:1,
},
{
    question: "What is the world\'s fastest bird?",
       choice1: 'Golden eagle',
       choice2: 'Anna\'s hummingbird',
       choice3: 'Grey-headed albatross',
       choice4: 'The Peregrine Falcon',
       answer:4,
},
{
    question: "In what country is the Chernobyl nuclear plant located?",
       choice1: 'Ukraine',
       choice2: 'Singapore',
       choice3: 'China',
       choice4: 'Switzerland',
       answer:1,
},
{
    question: "What company was initially know as Blue Ribbon Sports?",
       choice1: 'Adidas',
       choice2: 'Nike',
       choice3: 'Reebook',
       choice4: 'New Balance',
       answer:2,
   }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
   questionCounter = 0
   score = 0
   availableQuestions = [...questions]
   getNewQuestion()
}

getNewQuestion = () => {
   if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
      localStorage.setItem('mostRecentScore', score);

      return window.location.assign('/end.html')
   }
   
   questionCounter++
   progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
   progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

   const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
   currentQuestion = availableQuestions[questionsIndex]
   question.innerText = currentQuestion.question


   choices.forEach(choice => {
      const number = choice.dataset['number']
      choice.innerText = currentQuestion['choice' + number]
   })

   availableQuestions.splice(questionsIndex, 1)

   acceptingAnswers = true
}

choices.forEach(choice => {
   choice.addEventListener('click', e => {
      if(!acceptingAnswers) return

      acceptingAnswers = false
      const selectedChoice = e.target
      const selectedAnswer = selectedChoice.dataset['number']
   
      let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

      if(classToApply === 'correct') {
         incrementScore(SCORE_POINTS)
      }


      selectedChoice.parentElement.classList.add(classToApply)

      setTimeout(() => {
         selectedChoice.parentElement.classList.remove(classToApply)
         getNewQuestion()
      }, 1000)
   })
})

incrementScore = num => {
   score +=num
   scoreText.innerText = score
}

startGame()