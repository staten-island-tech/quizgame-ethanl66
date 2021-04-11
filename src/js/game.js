import { DOMSelectors } from "./DOM";
import { questionsList } from "./questions.js";
import {
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
} from "./questionFunctions.js";

/* document.getElementById("choice1").addEventListener("click", function () {
  //Remove existing green ones
  let correct = document.getElementsByClassName("correct");
  //console.log(correct);
  if (correct.length > 0) {
    correct[0].classList.remove("correct");
  }
  //Add green
  let addGreen = document.getElementById("choice1");
  addGreen.classList.add("correct");

  let selectedChoice = 1;
  //Go to question 2 when next button is clicked
  document.getElementById("nextButton").addEventListener("click", function () {
    question2();
  });
});
 */

question1();

const nonChecklistColorApplication = function () {
  const allChoices = Array.from(document.querySelectorAll("p.choice-text-one"));
  console.log(allChoices);

  //GENERIC NON-CHECKLIST COLORS
  allChoices.forEach(function (choice) {
    choice.addEventListener("click", function (choice) {
      //Remove existing green
      let correct = document.getElementsByClassName("correct");
      //console.log(correct);
      if (correct.length > 0) {
        correct[0].classList.remove("correct");
      }

      //Add green, GET ID
      const target = choice.target;
      if (target.matches("p")) {
        target.classList.add("correct");
      }

      //add event listener to all choice-text-one elements, on click get id, add correct class to that id
      /*   allChoices.forEach(function () {
    addEventListener("click", getelementid);
  }); */
    });
  });
};

const checklistColorApplication = function () {
  //GENERIC CHECKLIST COLORS
  const allChoicesCheckbox = Array.from(
    document.querySelectorAll("p.choice-text-checkbox")
  );
  console.log(allChoicesCheckbox);

  allChoicesCheckbox.forEach(function (choice) {
    choice.addEventListener("click", function (choice) {
      //Add green
      const target = choice.target;
      if (target.matches("p")) {
        target.classList.add("correct");
        document.querySelector("p.none-of-these").classList.remove("correct");
      }
      if (target.matches("p.none-of-these")) {
        allChoicesCheckbox.forEach(function (choice) {
          choice.classList.remove("correct");
          // choice.classList.add("correct"); MAKES EVERYTHING GREEN
          document.querySelector("p.none-of-these").classList.add("correct");
        });
      }
    });
  });
};

const goToNextQuestion = function () {
  document.getElementById("nextButton").addEventListener("click", function () {
    //QUESTION 1 NEXT QUESTIONS
    const selectedChoiceDataNumber = document.querySelector("p.correct").dataset
      .number;
    /*  console.log(
    "The data-number attribute of your selection is " + selectedChoiceDataNumber
  ); */

    const questionFunctions = {
      question1: function () {
        question1();
        nonChecklistColorApplication();
        goToNextQuestion();
      },
      question2: function () {
        question2();
        nonChecklistColorApplication();
        goToNextQuestion();
      },
      question3: function () {
        question3();
        nonChecklistColorApplication();
        goToNextQuestion();
      },
      question4: function () {
        question4();
        nonChecklistColorApplication();
        goToNextQuestion();
      },
      question5: function () {
        question5();
        nonChecklistColorApplication();
        goToNextQuestion();
      },
      question6: function () {
        question6();
        checklistColorApplication();
        goToNextQuestion();
      },
      question7: function () {
        question7();
        checklistColorApplication();
        goToNextQuestion();
      },
      question8: function () {
        question8();
        nonChecklistColorApplication();
        goToNextQuestion();
      },
      question9: function () {
        question9();
        nonChecklistColorApplication();
        goToNextQuestion();
      },
      question10: function () {
        question10();
        nonChecklistColorApplication();
        goToNextQuestion();
      },
    };
    questionFunctions["question" + selectedChoiceDataNumber]();

    /* BAD CODE  
  
  if (selectedChoiceID === "choice1-1") {
    question2();
    nonChecklistColorApplication();
  }
  if (selectedChoiceID === "choice1-2") {
    question3();
    nonChecklistColorApplication();
  }
  if (selectedChoiceID === "choice1-3") {
    question4();
    nonChecklistColorApplication();
  }
  if (selectedChoiceID === "choice1-4") {
    question5();
    nonChecklistColorApplication();
  }
  if (selectedChoiceID === "choice1-5") {
    question6();
    checklistColorApplication();
  }
  if (selectedChoiceID === "choice1-6") {
    question6();
    checklistColorApplication();
  }
  if (selectedChoiceID === "choice1-7") {
    question6();
    checklistColorApplication();
  } */

    //QUESTIONS 2-5 NEXT QUESTION
    //const selectedChoiceClass = document.querySelectorAll("p.correct").className;
    //console.log(selectedChoiceClass);
  });
};

//question1();
nonChecklistColorApplication();
goToNextQuestion();

//NEXT: GET IT TO GO TO THE RIGHT QUESTIONS
//Find which choice has class of "correct", get ID of the choice that has class of "correct",

//NEXT QUESTION

//sss
