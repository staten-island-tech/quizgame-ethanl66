console.log("Connected");

//Max 13 choices
let questionsList = [
  {
    questionNum: 1,
    question: "What kind of stuff do you like to watch?",
    //value: 3,
    choice1: { text: "Romance or drama", nextQuestion: 2 }, //CAN INCLUDE: Comedy, drama, music, mystery, romance, slice of life. DO YOU LIKE ELEMENTS OF MYSTERY
    choice2: { text: "Fight scenes", nextQuestion: 3 }, //Action, comedy, drama, horror, mystery, sports SOMETHING FUNNY OR SOMETHING DARK
    choice3: { text: "Everyday life", nextQuestion: 4 }, //Comedy, drama, music, romance, slice of life SOMETHING LAID BACK OR SOMETHING WITH DRAMA
    choice4: {
      text: "Something that will keep me on the edge of the chair",
      nextQuestion: 5,
    }, //Action, comedy, drama, horror, mystery, sports HORROR? OR COMPETITION?
    choice5: { text: "Someone painting or playing music", nextQuestion: 6 }, //Comedy, music, slice of life
    choice6: { text: "Youtubers playing video games", nextQuestion: 6 }, //Action, comedy, sports
    choice7: { text: "None of these", nextQuestion: 6 }, //go read a book
  },
  {
    questionNum: 2,
    question: "Do you want elements of mystery or suspense?", //IF choice1
    //value: 3,
    choice1: { text: "Yes", nextQuestion: 6 }, //Must have mystery
    choice2: { text: "No", nextQuestion: 6 }, //Must not have
    choice3: { text: "Don't care", nextQuestion: 6 }, //Can be both (no action)
  },
  {
    questionNum: 3,
    question: "Do you want something funny or something dark?", //IF choice2
    //value: 3,
    choice1: { text: "Funny", nextQuestion: 6 },
    choice2: { text: "Dark", nextQuestion: 6 },
    choice3: { text: "Both funny and dark", nextQuestion: 6 },
    choice4: { text: "Don't care", nextQuestion: 6 },
  },
  {
    questionNum: 4,
    question: "Do you want something chill or something with drama?", //IF choice3    //value: 3,
    choice1: { text: "Something chill", nextQuestion: 6 }, //Must not have drama
    choice2: { text: "Drama", nextQuestion: 6 }, //Must have drama
    choice3: { text: "Don't care", nextQuestion: 6 }, //Can be both (no action)
  },
  {
    questionNum: 5,
    question: "Do you want anything dark or scary?", //IF choice4
    //value: 3,
    choice1: { text: "Yes", nextQuestion: 6 }, //Must include horror
    choice2: { text: "No", nextQuestion: 6 }, //Must not include horror
    choice3: { text: "Don't care", nextQuestion: 6 }, //No action
  },
  /*   {
    question: "What genre are you looking for?",
    //value: 3,
    choice1: "Action",
    choice2: "Comedy",
    choice3: "Drama",
    choice4: "Horror",
    choice5: "Music",
    choice6: "Mystery",
    choice7: "Romance",
    choice8: "Slice of Life",
    choice9: "Sports",
  }, */
  {
    questionNum: 6,
    question:
      "Which of these genres do you want your recommendations to include?", //checklist
    //value: 3,
    choice1: { text: "Ecchi", nextQuestion: 7 },
    choice2: { text: "Magic", nextQuestion: 7 },
    choice3: { text: "Psychological", nextQuestion: 7 },
    choice4: { text: "School", nextQuestion: 7 },
    choice5: { text: "Sci-fi", nextQuestion: 7 },
    choice6: { text: "Supernatural", nextQuestion: 7 },
    choice7: { text: "Thriller", nextQuestion: 7 },
    choice8: { text: "Vampires", nextQuestion: 7 },
    choice9: { text: "None of these", nextQuestion: 7 },
  },
  {
    questionNum: 7,
    question: "Any of these that you want to see?", //checklist
    //value: 3,
    //choice1: "Cars",
    choice1: { text: "Mind-twisting plots", nextQuestion: 8 }, //dementia
    choice2: { text: "Demons and dark creatures", nextQuestion: 8 }, //Demons
    choice3: { text: "Video games or board games", nextQuestion: 8 }, //Game
    choice4: { text: "Harems", nextQuestion: 8 }, //Harem
    choice5: { text: "History or historical fiction", nextQuestion: 8 }, //Historical
    //choice7: "Shows for kids", //Kids
    //choice8: "Martial arts",
    choice6: { text: "Giant robots and big machines", nextQuestion: 8 }, //Mecha
    choice7: { text: "A heavy militaristic feel", nextQuestion: 8 }, //Military
    choice8: { text: "Parodies", nextQuestion: 8 }, //Parody
    //choice12: "Police",
    choice9: { text: "Samurai", nextQuestion: 8 },
    choice10: { text: "Space", nextQuestion: 8 },
    choice11: { text: "Superpowers", nextQuestion: 8 }, //Superpower
    choice12: { text: "No preference", nextQuestion: 8 },
  },
  {
    questionNum: 8,
    question: "Air date?",
    //value: 3,
    choice1: { text: "Before 1989", nextQuestion: 9 },
    choice2: { text: "1990-1999", nextQuestion: 9 },
    choice3: { text: "2000-2009", nextQuestion: 9 },
    choice4: { text: "2010-2020", nextQuestion: 9 },
  },
  {
    questionNum: 9,
    question: "How many episodes would you prefer?", //checklist
    //value: 3,
    choice1: { text: "13 or less", nextQuestion: 10 },
    choice2: { text: "13 to 26", nextQuestion: 10 },
    choice3: { text: "26 or less", nextQuestion: 10 },
    choice4: { text: "Greater than 26", nextQuestion: 10 },
  },
  {
    questionNum: 10,
    question: "How much anime have you watched?", //SORT BY POPULARITY NOT NETSCORE
    //value: 3,
    choice1: { text: "A lot" }, //Less popular
    choice2: { text: "I can count them on my fingers" }, //Not top 5
    choice3: { text: "Anime?" }, //All
  },
];

export { questionsList };

//sssssss
