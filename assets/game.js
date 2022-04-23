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
       choice4: 'Switzerland',
       answer:3,
    },
   {
    question: Which language has the more native speakers: English or Spanish?,
    choice1: 'English',
    choice2: 'Spanish',
    answer:2,
   },
   {
    question: Who has won the most total Academy Awards?,
    choice1: 'Walt Disney',
    choice2: 'Katharine Hepburn',
    choice3: 'Meryl Streep',
    choice4: 'John Ford',
    answer:1,
   },
   {
    question: What country drinks the most coffee per capita?,
    choice1: 'Finland',
    choice2: 'Colombia',
    choice3: 'United States',
    choice4: 'Ireland',
    answer:1,
   },
   {
    question: What is a group of pandas known as?,
    choice1: 'a band',
    choice2: 'a business',
    choice3: 'an embarrassment',
    choice4: ' a wisdom',
    answer:3,
   },
   {
    question: How many bones do we have in an ear?,
    choice1: '0',
    choice2: '1',
    choice3: '2',
    choice4: '3',
    answer:3,
   },
{
    question: What Netflix show had the most streaming views in 2021?,
       choice1: 'Squid Game',
       choice2: 'Lupin part one',
       choice3: 'Money Heist season five',
       choice4: 'Maid',
       answer:1,
},
{
    question: What is the world's fastest bird?,
       choice1: 'Golden eagle',
       choice2: 'Anna's hummingbird',
       choice3: 'Grey-headed albatross',
       choice4: 'The Peregrine Falcon',
       answer:4,
},
{
    question: In what country is the Chernobyl nuclear plant located?,
       choice1: 'Japan',
       choice2: 'Singapore',
       choice3: 'China',
       choice4: 'Switzerland'
},
{
    question: In what country would you find Mount Kilimanjaro?,
       choice1: 'Argentina',
       choice2: 'Mexico',
       choice3: 'Tanzania',
       choice4: 'Indonesia',
       answer:3,
},
{
    question: What company was initially know as Blue Ribbon Sports?,
       choice1: 'Adidas',
       choice2: 'Nike',
       choice3: 'Reebook',
       choice4: 'New Balance',
       answer:2,
}
]