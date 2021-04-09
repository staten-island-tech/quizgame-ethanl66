import { DOMSelectors } from "./DOM";
import { questionsList } from "./questions.js";
import { question1 } from "./questionFunctions.js";
import { question2 } from "./questionFunctions.js";
import { question3 } from "./questionFunctions.js";
import { question4 } from "./questionFunctions.js";
import { question5 } from "./questionFunctions.js";
import { question6 } from "./questionFunctions.js";
import { question7 } from "./questionFunctions.js";
import { question8 } from "./questionFunctions.js";
import { question9 } from "./questionFunctions.js";
import { question10 } from "./questionFunctions.js";

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

//NEXT: GET IT TO GO TO THE RIGHT QUESTIONS
