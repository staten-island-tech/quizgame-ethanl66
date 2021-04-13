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
        filterQuestionOne;
        goToNextQuestion();
      },
      question2: function () {
        question2();
        nonChecklistColorApplication();
        filterQuestionTwo();
        goToNextQuestion();
      },
      question3: function () {
        question3();
        nonChecklistColorApplication();
        filterQuestionThree();
        goToNextQuestion();
      },
      question4: function () {
        question4();
        nonChecklistColorApplication();
        filterQuestionFour();
        goToNextQuestion();
      },
      question5: function () {
        question5();
        nonChecklistColorApplication();
        filterQuestionFive();
        goToNextQuestion();
      },
      question6: function () {
        question6();
        checklistColorApplication();
        filterQuestionSix();
        goToNextQuestion();
      },
      question7: function () {
        question7();
        checklistColorApplication();
        filterQuestionSeven();
        goToNextQuestion();
      },
      question8: function () {
        question8();
        checklistColorApplication();
        //goToNextQuestion();
      },
      question9: function () {
        question9();
        nonChecklistColorApplication();
        filterQuestionNine();
        goToNextQuestion();
      },
      question10: function () {
        question10();
        nonChecklistColorApplication();
        filterQuestionTen();
        //goToNextQuestion();
      },
    };
    questionFunctions["question" + selectedChoiceDataNumber]();
  });
};

//
// FILTERING--------------------------------------------------
//

const filterQuestionOne = function () {
  document.getElementById("nextButton").addEventListener("click", function () {
    //choice1-1 filter
    if (document.getElementById("choice1-1").classList.contains("correct")) {
      filtered1 = animes.filter(
        (anime) =>
          anime.genre.includes("Comedy") ||
          anime.genre.includes("Drama") ||
          anime.genre.includes("Music") ||
          anime.genre.includes("Romance") ||
          anime.genre.includes("Slice of Life")
      );
      console.log(filtered1);
    }
    //choice1-2 filter
    if (document.getElementById("choice1-2").classList.contains("correct")) {
      filtered1 = animes.filter(
        (anime) =>
          anime.genre.includes("Action") ||
          anime.genre.includes("Comedy") ||
          anime.genre.includes("Drama") ||
          anime.genre.includes("Horror") ||
          anime.genre.includes("Mystery") ||
          anime.genre.includes("Sports")
      );
      console.log(filtered1);
    }
    //choice1-3 filter
    if (document.getElementById("choice1-3").classList.contains("correct")) {
      filtered1 = animes.filter(
        (anime) =>
          anime.genre.includes("Comedy") ||
          anime.genre.includes("Drama") ||
          anime.genre.includes("Music") ||
          anime.genre.includes("Romance") ||
          anime.genre.includes("Slice of Life")
      );
      console.log(filtered1);
    }
    //choice1-4 filter
    if (document.getElementById("choice1-4").classList.contains("correct")) {
      filtered1 = animes.filter(
        (anime) =>
          anime.genre.includes("Action") ||
          anime.genre.includes("Comedy") ||
          anime.genre.includes("Drama") ||
          anime.genre.includes("Horror") ||
          anime.genre.includes("Mystery") ||
          anime.genre.includes("Sports")
      );
      console.log(filtered1);
    }
    //choice1-5 filter
    if (document.getElementById("choice1-5").classList.contains("correct")) {
      filtered1 = animes.filter(
        (anime) =>
          anime.genre.includes("Comedy") ||
          anime.genre.includes("Music") ||
          anime.genre.includes("Slice of Life")
      );
      console.log(filtered1);
    }
    //choice1-6 filter
    if (document.getElementById("choice1-6").classList.contains("correct")) {
      filtered1 = animes.filter(
        (anime) =>
          anime.genre.includes("Action") ||
          anime.genre.includes("Comedy") ||
          anime.genre.includes("Sports")
      );
      console.log(filtered1);
    }
  });
};

nonChecklistColorApplication();
filterQuestionOne();
goToNextQuestion();

const filterQuestionTwo = function () {
  document.getElementById("nextButton").addEventListener("click", function () {
    //choice2-1 filter - must have mystery
    if (document.getElementById("choice-2-1").classList.contains("correct")) {
      filtered2 = filtered1.filter((anime) => anime.genre.includes("Mystery"));
      console.log(filtered2);
    }
    //choice2-2 filter - must not have mystery
    if (document.getElementById("choice-2-2").classList.contains("correct")) {
      filtered2 = filtered1.filter(
        (anime) => anime.genre.includes("Mystery") === false
      );
      console.log(filtered2);
    }
    if (document.getElementById("choice-2-3").classList.contains("correct")) {
      filtered2 = filtered1;
      console.log(filtered2);
    }
  });
};

const filterQuestionThree = function () {
  document.getElementById("nextButton").addEventListener("click", function () {
    //Choice-3-1 must be funny
    if (document.getElementById("choice-3-1").classList.contains("correct")) {
      filtered2 = filtered1.filter((anime) => anime.genre.includes("Comedy"));
      console.log(filtered2);
    }
    //choice-3-2 must be dark
    if (document.getElementById("choice-3-2").classList.contains("correct")) {
      filtered2 = filtered1.filter((anime) => anime.genre.includes("Horror"));
      console.log(filtered2);
    }

    if (document.getElementById("choice-3-3").classList.contains("correct")) {
      filtered2 = filtered1.filter(
        (anime) =>
          anime.genre.includes("Comedy") && anime.genre.includes("Horror")
      );
      console.log(filtered2);
    }
    if (document.getElementById("choice-3-4").classList.contains("correct")) {
      filtered2 = filtered1;
      console.log(filtered2);
    }
  });
};

const filterQuestionFour = function () {
  document.getElementById("nextButton").addEventListener("click", function () {
    if (document.getElementById("choice-4-1").classList.contains("correct")) {
      filtered2 = filtered1.filter(
        (anime) => anime.genre.includes("Drama") === false
      );
      console.log(filtered2);
    }
    if (document.getElementById("choice-4-2").classList.contains("correct")) {
      filtered2 = filtered1.filter((anime) => anime.genre.includes("Drama"));
      console.log(filtered2);
    }
    if (document.getElementById("choice-4-3").classList.contains("correct")) {
      filtered2 = filtered1;
      console.log(filtered2);
    }
  });
};

const filterQuestionFive = function () {
  document.getElementById("nextButton").addEventListener("click", function () {
    if (document.getElementById("choice-5-1").classList.contains("correct")) {
      filtered2 = filtered1.filter((anime) => anime.genre.includes("Horror"));
      console.log(filtered2);
    }
    if (document.getElementById("choice-5-2").classList.contains("correct")) {
      filtered2 = filtered1.filter(
        (anime) => anime.genre.includes("Horror") === false
      );
      console.log(filtered2);
    }
    if (document.getElementById("choice-5-3").classList.contains("correct")) {
      filtered2 = filtered1;
      console.log(filtered2);
    }
  });
};

//QUESTION SIX
const filterQuestionSix = function () {
  document.getElementById("nextButton").addEventListener("click", function () {
    const selections = [];

    if (document.getElementById("choice-6-1").classList.contains("correct")) {
      selections.push("Ecchi");
    }
    if (document.getElementById("choice-6-2").classList.contains("correct")) {
      selections.push("Magic");
    }
    if (document.getElementById("choice-6-3").classList.contains("correct")) {
      selections.push("Psychological");
    }
    if (document.getElementById("choice-6-4").classList.contains("correct")) {
      selections.push("School");
    }
    if (document.getElementById("choice-6-5").classList.contains("correct")) {
      selections.push("Sci-fi");
    }
    if (document.getElementById("choice-6-6").classList.contains("correct")) {
      selections.push("Supernatural");
    }
    if (document.getElementById("choice-6-7").classList.contains("correct")) {
      selections.push("Thriller");
    }
    if (document.getElementById("choice-6-8").classList.contains("correct")) {
      selections.push("Vampires");
    }
    //FINAL QUESTION SIX ARRAY
    console.log(selections);
    filtered6 = filtered2.filter(
      (anime) =>
        anime.genre.includes(selections[0]) ||
        anime.genre.includes(selections[1]) ||
        anime.genre.includes(selections[2]) ||
        anime.genre.includes(selections[3]) ||
        anime.genre.includes(selections[4]) ||
        anime.genre.includes(selections[5]) ||
        anime.genre.includes(selections[6]) ||
        anime.genre.includes(selections[7]) ||
        anime.genre.includes(selections[8])
    );
    console.log(filtered6);

    if (document.getElementById("choice-6-9").classList.contains("correct")) {
      filtered6 = filtered2.filter(
        (anime) =>
          anime.genre.includes("Ecchi") === false &&
          anime.genre.includes("Magic") === false &&
          anime.genre.includes("Psychological") &&
          anime.genre.includes("School") === false &&
          anime.genre.includes("Sci-fi") === false &&
          anime.genre.includes("Supernatural") === false &&
          anime.genre.includes("Thriller") === false &&
          anime.genre.includes("Vampires") === false
      );
      console.log(filtered6);
    }
  });
};

//QUESTION SEVEN
const filterQuestionSeven = function () {
  document.getElementById("nextButton").addEventListener("click", function () {
    const selections = [];

    if (document.getElementById("choice-7-1").classList.contains("correct")) {
      selections.push("Dementia");
    }
    if (document.getElementById("choice-7-2").classList.contains("correct")) {
      selections.push("Demons");
    }
    if (document.getElementById("choice-7-3").classList.contains("correct")) {
      selections.push("Game");
    }
    if (document.getElementById("choice-7-4").classList.contains("correct")) {
      selections.push("Harem");
    }
    if (document.getElementById("choice-7-5").classList.contains("correct")) {
      selections.push("Historical");
    }
    if (document.getElementById("choice-7-6").classList.contains("correct")) {
      selections.push("Mecha");
    }
    if (document.getElementById("choice-7-7").classList.contains("correct")) {
      selections.push("Military");
    }
    if (document.getElementById("choice-7-8").classList.contains("correct")) {
      selections.push("Parodies");
    }
    if (document.getElementById("choice-7-9").classList.contains("correct")) {
      selections.push("Samurai");
    }
    if (document.getElementById("choice-7-10").classList.contains("correct")) {
      selections.push("Space");
    }
    if (document.getElementById("choice-7-11").classList.contains("correct")) {
      selections.push("Superpowers");
    }

    //FINAL QUESTION SEVEN ARRAY
    console.log(selections);
    filtered7 = filtered6.filter(
      (anime) =>
        anime.genre.includes(selections[0]) ||
        anime.genre.includes(selections[1]) ||
        anime.genre.includes(selections[2]) ||
        anime.genre.includes(selections[3]) ||
        anime.genre.includes(selections[4]) ||
        anime.genre.includes(selections[5]) ||
        anime.genre.includes(selections[6]) ||
        anime.genre.includes(selections[7]) ||
        anime.genre.includes(selections[8]) ||
        anime.genre.includes(selections[9]) ||
        anime.genre.includes(selections[10]) ||
        anime.genre.includes(selections[11])
    );
    console.log(filtered7);

    if (document.getElementById("choice-7-12").classList.contains("correct")) {
      filtered7 = filtered6;
      console.log(filtered7);
    }
  });
};

//QUESTION EIGHT
/* const filterQuestionEight = function () {
  document.getElementById("nextButton").addEventListener("click", function () {
    const selections = [];

    if (document.getElementById("choice-8-1").classList.contains("correct")) {
      selections.push("Ecchi");
    }
    if (document.getElementById("choice-8-2").classList.contains("correct")) {
      selections.push("Magic");
    }
    if (document.getElementById("choice-8-3").classList.contains("correct")) {
      selections.push("Psychological");
    }
    if (document.getElementById("choice-8-4").classList.contains("correct")) {
      selections.push("School");
    }
    
    //FINAL QUESTION SIX ARRAY
    console.log(selections);
    filtered6 = filtered2.filter(
      (anime) =>
        anime.genre.includes(selections[0]) ||
        anime.genre.includes(selections[1]) ||
        anime.genre.includes(selections[2]) ||
        anime.genre.includes(selections[3]) ||
        anime.genre.includes(selections[4]) ||
        anime.genre.includes(selections[5]) ||
        anime.genre.includes(selections[6]) ||
        anime.genre.includes(selections[7]) ||
        anime.genre.includes(selections[8])
    );
    console.log(filtered6);

    if (document.getElementById("choice-6-9").classList.contains("correct")) {
      filtered6 = filtered2.filter(
        (anime) =>
          anime.genre.includes("Ecchi") === false &&
          anime.genre.includes("Magic") === false &&
          anime.genre.includes("Psychological") &&
          anime.genre.includes("School") === false &&
          anime.genre.includes("Sci-fi") === false &&
          anime.genre.includes("Supernatural") === false &&
          anime.genre.includes("Thriller") === false &&
          anime.genre.includes("Vampires") === false
      );
      console.log(filtered6);
    }
  });
}; */

//QUESTION NINE
const filterQuestionNine = function () {
  document.getElementById("nextButton").addEventListener("click", function () {
    if (document.getElementById("choice-9-1").classList.contains("correct")) {
      filtered9 = filtered7.filter((anime) => anime.episodes <= 13);
      console.log(filtered9);
    }
    if (document.getElementById("choice-9-2").classList.contains("correct")) {
      filtered9 = filtered7.filter(
        (anime) => anime.episodes > 13 && anime.episodes <= 26
      );
      console.log(filtered9);
    }
    if (document.getElementById("choice-9-3").classList.contains("correct")) {
      filtered9 = filtered7.filter((anime) => anime.episodes < 26);
      console.log(filtered9);
    }
    if (document.getElementById("choice-9-4").classList.contains("correct")) {
      filtered9 = filtered7.filter((anime) => anime.episodes > 26);
      console.log(filtered9);
    }
  });
};

//QUESTION TEN
const filterQuestionTen = function () {
  document.getElementById("nextButton").addEventListener("click", function () {
    if (document.getElementById("choice-10-1").classList.contains("correct")) {
      //Rank by popularity
      byPopularityRank = filtered9.slice(0).sort(function (a, b) {
        return a.popularity - b.popularity;
      });

      //Remove first 30
      byPopularityRankFirstRemoved = byPopularityRank.splice(0, 30);
      //console.log(byPopularityRankFirstRemoved);
      console.log(byPopularityRank);

      //Sort by rank
      finalByRank = byPopularityRank.sort(function (a, b) {
        return a.Rank - b.Rank;
      });
      console.log(finalByRank);

      //Final cleaned array
      finalTopFive = finalByRank.slice(0, 3);
      console.log(finalTopFive);

      const bottomFiveNumbers = [];
      while (bottomFiveNumbers.length < 12) {
        const r = Math.floor(Math.random() * 100) + 1;
        if (bottomFiveNumbers.indexOf(r) === -1) bottomFiveNumbers.push(r);
      }
      console.log(bottomFiveNumbers);

      finalBottomFive = [
        finalByRank[bottomFiveNumbers[0]],
        finalByRank[bottomFiveNumbers[1]],
        finalByRank[bottomFiveNumbers[2]],
        finalByRank[bottomFiveNumbers[3]],
        finalByRank[bottomFiveNumbers[4]],
        finalByRank[bottomFiveNumbers[5]],
        finalByRank[bottomFiveNumbers[6]],
        finalByRank[bottomFiveNumbers[7]],
        finalByRank[bottomFiveNumbers[8]],
        finalByRank[bottomFiveNumbers[9]],
        finalByRank[bottomFiveNumbers[10]],
        finalByRank[bottomFiveNumbers[11]],
      ];
      console.log(finalBottomFive);

      const finalArray = finalTopFive.concat(finalBottomFive);
      console.log(finalArray);
    }

    if (document.getElementById("choice-10-2").classList.contains("correct")) {
      //Rank by popularity
      byPopularityRank = filtered9.slice(0).sort(function (a, b) {
        return a.popularity - b.popularity;
      });

      //Remove first 8
      byPopularityRankFirstRemovedFew = byPopularityRank.splice(0, 8);
      console.log(byPopularityRank);

      //Sort by rank
      finalByRank = byPopularityRank.sort(function (a, b) {
        return a.Rank - b.Rank;
      });
      console.log(finalByRank);

      //Final cleaned array
      finalTopFive = finalByRank.slice(0, 3);
      console.log(finalTopFive);

      const bottomFiveNumbers = [];
      while (bottomFiveNumbers.length < 12) {
        const r = Math.floor(Math.random() * 100) + 1;
        if (bottomFiveNumbers.indexOf(r) === -1) bottomFiveNumbers.push(r);
      }
      console.log(bottomFiveNumbers);

      finalBottomFive = [
        finalByRank[bottomFiveNumbers[0]],
        finalByRank[bottomFiveNumbers[1]],
        finalByRank[bottomFiveNumbers[2]],
        finalByRank[bottomFiveNumbers[3]],
        finalByRank[bottomFiveNumbers[4]],
        finalByRank[bottomFiveNumbers[5]],
        finalByRank[bottomFiveNumbers[6]],
        finalByRank[bottomFiveNumbers[7]],
        finalByRank[bottomFiveNumbers[8]],
        finalByRank[bottomFiveNumbers[9]],
        finalByRank[bottomFiveNumbers[10]],
        finalByRank[bottomFiveNumbers[11]],
      ];
      console.log(finalBottomFive);

      const finalArray = finalTopFive.concat(finalBottomFive);
      console.log(finalArray);
    }

    if (document.getElementById("choice-10-3").classList.contains("correct")) {
      finalByRank = filtered9;
      console.log(finalByRank);
      finalArray = finalByRank.slice(0, 15);
      console.log(finalArray);
    }
  });
};

const finalArrayExport = finalArray;

export { finalArrayExport };

console.log(finalArrayExport);
//ssss
