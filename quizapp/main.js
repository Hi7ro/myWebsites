"use strict"

let questions = [

  {
    "question": "Welchen der folgenden Programiersprachen-Typen gibt es NICHT?",
    "answer_1": "Interaktive-Sprachen",
    "answer_2": "Interpreter-Sprache",
    "answer_3": "Objekorientierte Programmiersprache",
    "answer_4": "Compiler-Sprache",
    "right_answer": 1
  },

  {
    "question": "Welche der folgenden Sprachen wird vor der Ausführung kompiliert?",
    "answer_1": "Batch",
    "answer_2": "Python",
    "answer_3": "JavaScript",
    "answer_4": "C++",
    "right_answer": 4
  },

  {
    "question": "Eine \"switch case\"-Sruktur ist im Verwendungszweck am ehesten verwandt mit...",
    "answer_1": "If/else",
    "answer_2": "Class",
    "answer_3": "Foreach",
    "answer_4": "While",
    "right_answer": 1
  },

  {
    "question": "Ein Semikolon (;) ist in vielen Programmiersprachen wichtig um eine Zeile/Anweisung abzuschließen. Nicht jedoch in...",
    "answer_1": "JavaScript",
    "answer_2": "Python",
    "answer_3": "C++",
    "answer_4": "Java",
    "right_answer": 0
  },

  {
    "question": "Die meisten diser Begriffe stehen in direkter Verbindung zu Funktionen. Welcher Nicht?",
    "answer_1": "Rückgabewert",
    "answer_2": "Public/private",
    "answer_3": "Argument",
    "answer_4": "Destruktor",
    "right_answer": 4
  }
];
let currentQuestion = 0;

function $(id) {
  return document.getElementById(id);
}

function init() {
  $('questionsStart').innerHTML;
  $('questionsEnd').innerHTML = questions.length;

  showQuestion();
}

function showQuestion() {
  let question = questions[currentQuestion];
  $('question').innerHTML = question['question'];
  $('answer_1').innerHTML = question['answer_1'];
  $('answer_2').innerHTML = question['answer_2'];
  $('answer_3').innerHTML = question['answer_3'];
  $('answer_4').innerHTML = question['answer_4'];
}

function answer() {

}

function nextQuestion() {

}