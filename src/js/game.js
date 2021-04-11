import { DOMSelectors } from "./DOM";
import { questionsList } from "./questions.js";
import { animes } from "./data";
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

question1();

const nonChecklistColorApplication = function () {
  const allChoices = Array.from(document.querySelectorAll("p.choice-text-one"));
  //console.log(allChoices);

  //GENERIC NON-CHECKLIST COLOR FUNCTION
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
    });
  });
};

const checklistColorApplication = function () {
  //GENERIC CHECKLIST COLOR FUNCTION
  const allChoicesCheckbox = Array.from(
    document.querySelectorAll("p.choice-text-checkbox")
  );
  //console.log(allChoicesCheckbox);

  allChoicesCheckbox.forEach(function (choice) {
    choice.addEventListener("click", function (choice) {
      const target = choice.target;
      //Remove green if already green
      if (target.classList.contains("correct")) {
        console.log("Already correct");
        target.classList.remove("correct");
      }
      //Add green
      else {
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
  });
};

nonChecklistColorApplication();
//goToNextQuestion();

//
// FILTERING--------------------------------------------------
//

const filter = function () {
  document.getElementById("nextButton").addEventListener("click", function () {
    //choice1-1 filter
    if (document.getElementById("choice1-1").classList.contains("correct")) {
      const filtered1 = animes.filter((anime) =>
        anime.genre.includes(
          "Comedy" ||
            "Drama" ||
            "Music" ||
            "Mystery" ||
            "Romance" ||
            "Slife of Life"
        )
      );
      console.log(filtered1);
    }
    //choice1-2 filter
    if (document.getElementById("choice1-2").classList.contains("correct")) {
      const filtered1 = animes.filter((anime) =>
        anime.genre.includes(
          "Action" || "Comedy" || "Drama" || "Horror" || "Mystery" || "Sports"
        )
      );
      console.log(filtered1);
    }
    //choice1-3 filter
    if (document.getElementById("choice1-3").classList.contains("correct")) {
      const filtered1 = animes.filter((anime) =>
        anime.genre.includes(
          "Comedy" || "Drama" || "Music" || "Romance" || "Slice of Life"
        )
      );
      console.log(filtered1);
    }
    //choice1-4 filter
    if (document.getElementById("choice1-4").classList.contains("correct")) {
      const filtered1 = animes.filter((anime) =>
        anime.genre.includes(
          "Action" || "Comedy" || "Drama" || "Horror" || "Mystery" || "Sports"
        )
      );
      console.log(filtered1);
    }
    //choice1-5 filter
    if (document.getElementById("choice1-5").classList.contains("correct")) {
      const filtered1 = animes.filter((anime) =>
        anime.genre.includes("Comedy" || "Music" || "Slice of Life")
      );
      console.log(filtered1);
    }
    //choice1-6 filter
    if (document.getElementById("choice1-6").classList.contains("correct")) {
      const filtered1 = animes.filter((anime) =>
        anime.genre.includes("Action" || "Comedy" || "Sports")
      );
      console.log(filtered1);
    }
  });
};
filter();

//ssss
