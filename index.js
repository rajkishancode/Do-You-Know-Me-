  var readlineSync = require("readline-sync");
  var score = 0;

  var userName = readlineSync.question("Whats your name? ");

  console.log("Welcome, " + userName + " Do you know Raj?");

  // play function

  function play(question, answer) {
    var userAnswer = readlineSync.question(question);

    if (userAnswer === answer) {
      console.log("right!");
      score = score + 1;

    } else {
      console.log("wrong!")
    }

    console.log("current score: ", score);
    console.log("----------------------")

  }

  // array of objects
  var questions = [{
      question: "Where do I live? ",
      answer: "Pune",
    },
    {
      question: "My Home Town? ",
      answer: "Ranchi",
    },
    {
      question: "Which month is my birthday ",
      answer: "August",
    },
    {
      question: "I like Mountains/Beaches ?",
      answer: "Beaches"
    },

    {
      question: "What's my Favourite Web Series?",
      answer: "Suits"
    },
  ];

  // loop
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }

  console.log("YAY! you SCORED:  ", score)