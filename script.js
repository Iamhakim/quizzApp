'use district';

const quizData = [
  {
    Question: 'which language runs in the browser ?',
    a: 'java',
    b: 'c',
    d: 'python',
    correct: 'd',
  },
  {
    Question: 'what does CSS stand for ?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];
const quizz = document.getElementById('quizz');
const answerEls = document.querySelectorAll(.'answer');
const questionEl =document.getElementById('question')
const a_Text = document.getElementById('a_text')
const b_Text = document.getElementById('b_text')
const c_Text = document.getElementById('c_text')
const d_Text = document.getElementById('d_text')
