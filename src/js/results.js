import { DOMSelectors } from "./DOM";
import { finalArrayExport } from "./game";

//HEIGHT OF BACKGROUND IMAGE SAME AS #HOME
const resultsHome = document.getElementById("results-home");
console.log(resultsHome);
const resultsHomeHeight = resultsHome.offsetHeight;
console.log(resultsHomeHeight);

const backgroundImage = document.getElementById("bg-image");
backgroundImage.style.height = resultsHomeHeight + 175 + "px";
backgroundImage.style.minHeight = "100%";

//DISPLAY RESULTS
displayResults = function () {
  //DOMSelectors.card.innerHTML = "";
  DOMSelectors.resultsBox.insertAdjacentHTML(
    "afterbegin",
    `<div class="card" id="card">
    <h3 class="title-name">${finalArrayExport[0].title}</h3>
    <div class="card-data">
        <div class="anime-data-div">
            <p class="synopsis anime-data">${finalArrayExport[0].synopsis}</p><br>
            <a target="_blank" rel="noopener noreferrer" href="${finalArrayExport[0].link}" class="mal-link anime-data">Link to MAL</a> 
        </div>
        <div class="anime-img-div">
            <img src="${finalArrayExport[0].img_url}" alt="${finalArrayExport[0].title} cover art"
                class="anime-img">
            <p class="genre anime-data">Genres: ${finalArrayExport[0].genre}</p>
            <p class="air-date anime-data">Air date: ${finalArrayExport[0].aired}</p>
            <p class="episodes anime-data">Episodes: ${finalArrayExport[0].episodes}</p>
            <p class="mal-score anime-data">MAL Score: ${finalArrayExport[0].score}</p>
        </div>
    </div>
</div>`
  );
};
