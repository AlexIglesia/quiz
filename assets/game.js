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
       question: What country has the highest life expectancy?,
       choice1: 'Japan',
       choice2: 'Singapore',
       choice3: 'China',
       choice4: 'Switzerland'
    },
   {
    question: What country has the highest life expectancy?,
    choice1: 'Japan',
    choice2: 'Singapore',
    choice3: 'China',
    choice4: 'Switzerland' 
   },
   {
    question: What country has the highest life expectancy?,
    choice1: 'Japan',
    choice2: 'Singapore',
    choice3: 'China',
    choice4: 'Switzerland'
   },
   {
    question: What country has the highest life expectancy?,
    choice1: 'Japan',
    choice2: 'Singapore',
    choice3: 'China',
    choice4: 'Switzerland'
   },
   {
    question: What country has the highest life expectancy?,
    choice1: 'Japan',
    choice2: 'Singapore',
    choice3: 'China',
    choice4: 'Switzerland'
   },
   {
    question: What country has the highest life expectancy?,
    choice1: 'Japan',
    choice2: 'Singapore',
    choice3: 'China',
    choice4: 'Switzerland'
   },
{
    question: What country has the highest life expectancy?,
       choice1: 'Japan',
       choice2: 'Singapore',
       choice3: 'China',
       choice4: 'Switzerland'
},
{
    question: What country has the highest life expectancy?,
       choice1: 'Japan',
       choice2: 'Singapore',
       choice3: 'China',
       choice4: 'Switzerland'
},
{
    question: What country has the highest life expectancy?,
       choice1: 'Japan',
       choice2: 'Singapore',
       choice3: 'China',
       choice4: 'Switzerland'
},
{
    question: What country has the highest life expectancy?,
       choice1: 'Japan',
       choice2: 'Singapore',
       choice3: 'China',
       choice4: 'Switzerland'
},
{
    question: What country has the highest life expectancy?,
       choice1: 'Japan',
       choice2: 'Singapore',
       choice3: 'China',
       choice4: 'Switzerland'
}
]