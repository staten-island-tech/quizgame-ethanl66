//HEIGHT OF BACKGROUND IMAGE SAME AS #HOME
const resultsHome = document.getElementById("results-home");
console.log(resultsHome);
const resultsHomeHeight = resultsHome.offsetHeight;
console.log(resultsHomeHeight);

const backgroundImage = document.getElementById("bg-image");
backgroundImage.style.height = resultsHomeHeight + 175 + "px";
backgroundImage.style.minHeight = "100%";
