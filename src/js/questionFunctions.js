import { DOMSelectors } from "./DOM";
import { questionsList } from "./questions.js";
import { pickBackgroundImage } from "./home.js";

const question1 = function () {
  DOMSelectors.gameBox.innerHTML = "";
  DOMSelectors.gameBox.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="question">${questionsList[0].question}</h2>'
      
      '<div class="choice-container">
          <p class="choice-prefix">A</p>
          <p class="choice-text choice-text-one choice1-1" id="choice1-1"  data-number="2">${questionsList[0].choice1.text}</p>
      </div>
      
      <div class="choice-container">
          <p class="choice-prefix">B</p>
          <p class="choice-text choice-text-one choice1-2" id="choice1-2"  data-number="3">${questionsList[0].choice2.text}</p>
      </div>
  
      <div class="choice-container">
              <p class="choice-prefix">C</p>
              <p class="choice-text choice-text-one choice1-3" id="choice1-3"  data-number="4">${questionsList[0].choice3.text}</p>
      </div>
      
      <div class="choice-container">
              <p class="choice-prefix">D</p>
              <p class="choice-text choice-text-one choice1-4" id="choice1-4"  data-number="5">${questionsList[0].choice4.text}</p>
      </div>
      
      <div class="choice-container">
              <p class="choice-prefix">E</p>
              <p class="choice-text choice-text-one choice1-5" id="choice1-5"  data-number="6">${questionsList[0].choice5.text}</p>
      </div>
      
      <div class="choice-container">
              <p class="choice-prefix">F</p>
              <p class="choice-text choice-text-one choice1-6" id="choice1-6"  data-number="6">${questionsList[0].choice6.text}</p>
      </div>
      
      <!-- <div class="choice-container">
              <p class="choice-prefix">G</p>
              <p class="choice-text choice-text-one choice1-7" id="choice1-7"  data-number="6">${questionsList[0].choice7.text}</p>
      </div> -->
      
      <button id="nextButton">Next</button>`
  );
};

const question2 = function () {
  DOMSelectors.gameBox.innerHTML = "";
  DOMSelectors.gameBox.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="question">${questionsList[1].question}</h2>'
        
        '<div class="choice-container">
            <p class="choice-prefix">A</p>
            <p class="choice-text choice-text-one question-2-to-5" id="choice-2-1" data-number="6">${questionsList[1].choice1.text}</p>
        </div>
    
        <div class="choice-container">
            <p class="choice-prefix">B</p>
            <p class="choice-text choice-text-one question-2-to-5" id="choice-2-2" data-number="6">${questionsList[1].choice2.text}</p>
        </div>
    
        <div class="choice-container">
                <p class="choice-prefix">C</p>
                <p class="choice-text choice-text-one question-2-to-5" id="choice-2-3" data-number="6">${questionsList[1].choice3.text}</p>
        </div>  

        <button id="nextButton">Next</button>`
  );
};

const question3 = function () {
  DOMSelectors.gameBox.innerHTML = "";
  DOMSelectors.gameBox.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="question">${questionsList[2].question}</h2>'
          
          '<div class="choice-container">
              <p class="choice-prefix">A</p>
              <p class="choice-text choice-text-one question-2-to-5" id="choice-3-1" data-number="6">${questionsList[2].choice1.text}</p>
          </div>
      
          <div class="choice-container">
              <p class="choice-prefix">B</p>
              <p class="choice-text choice-text-one question-2-to-5" id="choice-3-2" data-number="6">${questionsList[2].choice2.text}</p>
          </div>
      
          <div class="choice-container">
                  <p class="choice-prefix">C</p>
                  <p class="choice-text choice-text-one question-2-to-5" id="choice-3-3" data-number="6">${questionsList[2].choice3.text}</p>
          </div>
          
          <div class="choice-container">
          <p class="choice-prefix">D</p>
          <p class="choice-text choice-text-one question-2-to-5" id="choice-3-4" data-number="6">${questionsList[2].choice4.text}</p>
          </div>
          
          <button id="nextButton">Next</button>`
  );
};

const question4 = function () {
  DOMSelectors.gameBox.innerHTML = "";
  DOMSelectors.gameBox.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="question">${questionsList[3].question}</h2>'
          
          '<div class="choice-container">
              <p class="choice-prefix">A</p>
              <p class="choice-text choice-text-one question-2-to-5" id="choice-4-1" data-number="6">${questionsList[3].choice1.text}</p>
          </div>
      
          <div class="choice-container">
              <p class="choice-prefix">B</p>
              <p class="choice-text choice-text-one question-2-to-5" id="choice-4-2" data-number="6">${questionsList[3].choice2.text}</p>
          </div>
      
          <div class="choice-container">
                  <p class="choice-prefix">C</p>
                  <p class="choice-text choice-text-one question-2-to-5" id="choice-4-3" data-number="6">${questionsList[3].choice3.text}</p>
          </div>
                
      <button id="nextButton">Next</button>`
  );
};

const question5 = function () {
  DOMSelectors.gameBox.innerHTML = "";
  DOMSelectors.gameBox.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="question">${questionsList[4].question}</h2>'
            
            '<div class="choice-container">
                <p class="choice-prefix">A</p>
                <p class="choice-text choice-text-one question-2-to-5" id="choice-5-1" data-number="6">${questionsList[4].choice1.text}</p>
            </div>
        
            <div class="choice-container">
                <p class="choice-prefix">B</p>
                <p class="choice-text choice-text-one question-2-to-5" id="choice-5-2" data-number="6">${questionsList[4].choice2.text}</p>
            </div>
        
            <div class="choice-container">
                    <p class="choice-prefix">C</p>
                    <p class="choice-text choice-text-one question-2-to-5" id="choice-5-3" data-number="6">${questionsList[4].choice3.text}</p>
            </div>
                  
      <button id="nextButton">Next</button>`
  );
};

const question6 = function () {
  DOMSelectors.gameBox.innerHTML = "";
  DOMSelectors.gameBox.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="question">${questionsList[5].question}</h2>'
        
        '<div class="choice-container">
            <p class="choice-prefix">A</p>
            <p class="choice-text choice-text-checkbox question-6" id="choice-6-1" data-number="7">${questionsList[5].choice1.text}</p>
        </div>
    
        <div class="choice-container">
            <p class="choice-prefix">B</p>
            <p class="choice-text choice-text-checkbox question-6" id="choice-6-2" data-number="7">${questionsList[5].choice2.text}</p>
        </div>
    
        <div class="choice-container">
                <p class="choice-prefix">C</p>
                <p class="choice-text choice-text-checkbox question-6" id="choice-6-3" data-number="7">${questionsList[5].choice3.text}</p>
        </div>
        
        <div class="choice-container">
                <p class="choice-prefix">D</p>
                <p class="choice-text choice-text-checkbox question-6" id="choice-6-4" data-number="7">${questionsList[5].choice4.text}</p>
        </div>
        
        <div class="choice-container">
                <p class="choice-prefix">E</p>
                <p class="choice-text choice-text-checkbox question-6" id="choice-6-5" data-number="7">${questionsList[5].choice5.text}</p>
        </div>
        
        <div class="choice-container">
                <p class="choice-prefix">F</p>
                <p class="choice-text choice-text-checkbox question-6" id="choice-6-6" data-number="7">${questionsList[5].choice6.text}</p>
        </div>
        
        <div class="choice-container">
                <p class="choice-prefix">G</p>
                <p class="choice-text choice-text-checkbox question-6" id="choice-6-7" data-number="7">${questionsList[5].choice7.text}</p>
        </div>
        
        <div class="choice-container">
        <p class="choice-prefix">H</p>
        <p class="choice-text choice-text-checkbox question-6" id="choice-6-8" data-number="7">${questionsList[5].choice8.text}</p>
        </div>
  
        <div class="choice-container">
        <p class="choice-prefix">I</p>
        <p class="choice-text choice-text-checkbox question-6 none-of-these" id="choice-6-9" data-number="7">${questionsList[5].choice9.text}</p>
        </div>
              
      <button id="nextButton">Next</button>`
  );
};

const question7 = function () {
  DOMSelectors.gameBox.innerHTML = "";
  DOMSelectors.gameBox.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="question">${questionsList[6].question}</h2>'
          
          '<div class="choice-container">
              <p class="choice-prefix">A</p>
              <p class="choice-text choice-text-checkbox question-7" id="choice-7-1" data-number="9">${questionsList[6].choice1.text}</p>
          </div>
      
          <div class="choice-container">
              <p class="choice-prefix">B</p>
              <p class="choice-text choice-text-checkbox question-7" id="choice-7-2" data-number="9">${questionsList[6].choice2.text}</p>
          </div>
      
          <div class="choice-container">
                  <p class="choice-prefix">C</p>
                  <p class="choice-text choice-text-checkbox question-7" id="choice-7-3" data-number="9">${questionsList[6].choice3.text}</p>
          </div>
          
          <div class="choice-container">
                  <p class="choice-prefix">D</p>
                  <p class="choice-text choice-text-checkbox question-7" id="choice-7-4" data-number="9">${questionsList[6].choice4.text}</p>
          </div>
          
          <div class="choice-container">
                  <p class="choice-prefix">E</p>
                  <p class="choice-text choice-text-checkbox question-7" id="choice-7-5" data-number="9">${questionsList[6].choice5.text}</p>
          </div>
          
          <div class="choice-container">
                  <p class="choice-prefix">F</p>
                  <p class="choice-text choice-text-checkbox question-7" id="choice-7-6" data-number="9">${questionsList[6].choice6.text}</p>
          </div>
          
          <div class="choice-container">
                  <p class="choice-prefix">G</p>
                  <p class="choice-text choice-text-checkbox question-7" id="choice-7-7" data-number="9">${questionsList[6].choice7.text}</p>
          </div>
          
          <div class="choice-container">
          <p class="choice-prefix">H</p>
          <p class="choice-text choice-text-checkbox question-7" id="choice-7-8" data-number="9">${questionsList[6].choice8.text}</p>
          </div>
    
          <div class="choice-container">
          <p class="choice-prefix">I</p>
          <p class="choice-text choice-text-checkbox question-7" id="choice-7-9" data-number="9">${questionsList[6].choice9.text}</p>
          </div>
          
          <div class="choice-container">
          <p class="choice-prefix">J</p>
          <p class="choice-text choice-text-checkbox question-7" id="choice-7-10" data-number="9">${questionsList[6].choice10.text}</p>
          </div>
          
          <div class="choice-container">
          <p class="choice-prefix">K</p>
          <p class="choice-text choice-text-checkbox question-7" id="choice-7-11" data-number="9">${questionsList[6].choice11.text}</p>
          </div>
          
          <div class="choice-container">
          <p class="choice-prefix">L</p>
          <p class="choice-text choice-text-checkbox question-7 none-of-these" id="choice-7-12" data-number="9">${questionsList[6].choice12.text}</p>
          </div>      

          <button id="nextButton">Next</button>`
  );
};

const question8 = function () {
  DOMSelectors.gameBox.innerHTML = "";
  DOMSelectors.gameBox.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="question">${questionsList[7].question}</h2>'
              
              '<div class="choice-container">
                  <p class="choice-prefix">A</p>
                  <p class="choice-text choice-text-checkbox choice-text-one question-8" id="choice-8-1" data-number="9">${questionsList[7].choice1.text}</p>
              </div>
          
              <div class="choice-container">
                  <p class="choice-prefix">B</p>
                  <p class="choice-text choice-text-checkbox choice-text-one question-8" id="choice-8-2" data-number="9">${questionsList[7].choice2.text}</p>
              </div>
          
              <div class="choice-container">
                      <p class="choice-prefix">C</p>
                      <p class="choice-text choice-text-checkbox choice-text-one question-8" id="choice-8-3" data-number="9">${questionsList[7].choice3.text}</p>
              </div>
              
              <div class="choice-container">
              <p class="choice-prefix">B</p>
              <p class="choice-text choice-text-checkbox choice-text-one question-8" id="choice-8-4" data-number="9">${questionsList[7].choice4.text}</p>
              </div>      

      <button id="nextButton">Next</button>`
  );
};

const question9 = function () {
  DOMSelectors.gameBox.innerHTML = "";
  DOMSelectors.gameBox.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="question">${questionsList[8].question}</h2>'
                
                '<div class="choice-container">
                    <p class="choice-prefix">A</p>
                    <p class="choice-text choice-text-one question-9" id="choice-9-1" data-number="10">${questionsList[8].choice1.text}</p>
                </div>
            
                <div class="choice-container">
                    <p class="choice-prefix">B</p>
                    <p class="choice-text choice-text-one question-9" id="choice-9-2" data-number="10">${questionsList[8].choice2.text}</p>
                </div>
            
                <div class="choice-container">
                        <p class="choice-prefix">C</p>
                        <p class="choice-text choice-text-one question-9" id="choice-9-3" data-number="10">${questionsList[8].choice3.text}</p>
                </div>
                
                <div class="choice-container">
                <p class="choice-prefix">B</p>
                <p class="choice-text choice-text-one question-9" id="choice-9-4" data-number="10">${questionsList[8].choice4.text}</p>
                </div>
                      
      <button id="nextButton">Next</button>`
  );
};

const question10 = function () {
  DOMSelectors.gameBox.innerHTML = "";
  DOMSelectors.gameBox.insertAdjacentHTML(
    "afterbegin",
    `<h2 id="question">${questionsList[9].question}</h2>'
              
              '<div class="choice-container">
                  <p class="choice-prefix">A</p>
                  <p class="choice-text choice-text-one" id="choice-10-1">${questionsList[9].choice1.text}</p>
              </div>
          
              <div class="choice-container">
                  <p class="choice-prefix">B</p>
                  <p class="choice-text choice-text-one" id="choice-10-2">${questionsList[9].choice2.text}</p>
              </div>
          
              <div class="choice-container">
                      <p class="choice-prefix">C</p>
                      <p class="choice-text choice-text-one" id="choice-10-3">${questionsList[9].choice3.text}</p>
              </div>
                    
           <a class="btn finish-button" id="nextButton" >Get Results</a>`
  );
};

//DISPLAY RESULTS
const displayResults = function () {
  DOMSelectors.displayContainer.innerHTML = "";

  DOMSelectors.displayContainer.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="results-container">
    
            <div id="results-home" class="results-home">
                <h1 class="rec-title">Your Recommendations</h1>

                <!--Result 1-->
        <div class="card" id="card">
          <h3 class="title-name">${finalArray[0].title}</h3>
          <div class="card-data">
            <div class="anime-data-div">
              <p class="synopsis anime-data">${finalArray[0].synopsis}</p><br>
              <a target="_blank" rel="noopener noreferrer" href="${finalArray[0].link}" class="mal-link anime-data">Link to MAL</a> 
            </div>
            <div class="anime-img-div">
              <img src="${finalArray[0].img_url}" alt="${finalArray[0].title} cover art"
                class="anime-img">
              <p class="genre anime-data">Genres: ${finalArray[0].genre}</p>
              <p class="air-date anime-data">Air date: ${finalArray[0].aired}</p>
              <p class="episodes anime-data">Episodes: ${finalArray[0].episodes}</p>
              <p class="mal-score anime-data">MAL Score: ${finalArray[0].score}</p>
            </div>
          </div>
        </div>

        <!--Result 2-->
        <div class="card" id="card">
        <h3 class="title-name">${finalArray[2].title}</h3>
        <div class="card-data">
          <div class="anime-data-div">
            <p class="synopsis anime-data">${finalArray[2].synopsis}</p><br>
            <a target="_blank" rel="noopener noreferrer" href="${finalArray[2].link}" class="mal-link anime-data">Link to MAL</a> 
          </div>
          <div class="anime-img-div">
            <img src="${finalArray[2].img_url}" alt="${finalArray[2].title} cover art"
              class="anime-img">
            <p class="genre anime-data">Genres: ${finalArray[2].genre}</p>
            <p class="air-date anime-data">Air date: ${finalArray[2].aired}</p>
            <p class="episodes anime-data">Episodes: ${finalArray[2].episodes}</p>
            <p class="mal-score anime-data">MAL Score: ${finalArray[2].score}</p>
          </div>
        </div>
      </div>

      <!--Result 3-->
        <div class="card" id="card">
        <h3 class="title-name">${finalArray[2].title}</h3>
        <div class="card-data">
          <div class="anime-data-div">
            <p class="synopsis anime-data">${finalArray[2].synopsis}</p><br>
            <a target="_blank" rel="noopener noreferrer" href="${finalArray[2].link}" class="mal-link anime-data">Link to MAL</a> 
          </div>
          <div class="anime-img-div">
            <img src="${finalArray[2].img_url}" alt="${finalArray[2].title} cover art"
              class="anime-img">
            <p class="genre anime-data">Genres: ${finalArray[2].genre}</p>
            <p class="air-date anime-data">Air date: ${finalArray[2].aired}</p>
            <p class="episodes anime-data">Episodes: ${finalArray[2].episodes}</p>
            <p class="mal-score anime-data">MAL Score: ${finalArray[2].score}</p>
          </div>
        </div>
      </div>

      <!--Result 4-->
        <div class="card" id="card">
        <h3 class="title-name">${finalArray[3].title}</h3>
        <div class="card-data">
          <div class="anime-data-div">
            <p class="synopsis anime-data">${finalArray[3].synopsis}</p><br>
            <a target="_blank" rel="noopener noreferrer" href="${finalArray[3].link}" class="mal-link anime-data">Link to MAL</a> 
          </div>
          <div class="anime-img-div">
            <img src="${finalArray[3].img_url}" alt="${finalArray[3].title} cover art"
              class="anime-img">
            <p class="genre anime-data">Genres: ${finalArray[3].genre}</p>
            <p class="air-date anime-data">Air date: ${finalArray[3].aired}</p>
            <p class="episodes anime-data">Episodes: ${finalArray[3].episodes}</p>
            <p class="mal-score anime-data">MAL Score: ${finalArray[3].score}</p>
          </div>
        </div>
      </div>

      <!--Result 5-->
        <div class="card" id="card">
        <h3 class="title-name">${finalArray[4].title}</h3>
        <div class="card-data">
          <div class="anime-data-div">
            <p class="synopsis anime-data">${finalArray[4].synopsis}</p><br>
            <a target="_blank" rel="noopener noreferrer" href="${finalArray[4].link}" class="mal-link anime-data">Link to MAL</a> 
          </div>
          <div class="anime-img-div">
            <img src="${finalArray[4].img_url}" alt="${finalArray[4].title} cover art"
              class="anime-img">
            <p class="genre anime-data">Genres: ${finalArray[4].genre}</p>
            <p class="air-date anime-data">Air date: ${finalArray[4].aired}</p>
            <p class="episodes anime-data">Episodes: ${finalArray[4].episodes}</p>
            <p class="mal-score anime-data">MAL Score: ${finalArray[4].score}</p>
          </div>
        </div>
      </div>

      <!--Result 6-->
        <div class="card" id="card">
        <h3 class="title-name">${finalArray[5].title}</h3>
        <div class="card-data">
          <div class="anime-data-div">
            <p class="synopsis anime-data">${finalArray[5].synopsis}</p><br>
            <a target="_blank" rel="noopener noreferrer" href="${finalArray[5].link}" class="mal-link anime-data">Link to MAL</a> 
          </div>
          <div class="anime-img-div">
            <img src="${finalArray[5].img_url}" alt="${finalArray[5].title} cover art"
              class="anime-img">
            <p class="genre anime-data">Genres: ${finalArray[5].genre}</p>
            <p class="air-date anime-data">Air date: ${finalArray[5].aired}</p>
            <p class="episodes anime-data">Episodes: ${finalArray[5].episodes}</p>
            <p class="mal-score anime-data">MAL Score: ${finalArray[5].score}</p>
          </div>
        </div>
      </div>

      <!--Result 7-->
        <div class="card" id="card">
        <h3 class="title-name">${finalArray[6].title}</h3>
        <div class="card-data">
          <div class="anime-data-div">
            <p class="synopsis anime-data">${finalArray[6].synopsis}</p><br>
            <a target="_blank" rel="noopener noreferrer" href="${finalArray[6].link}" class="mal-link anime-data">Link to MAL</a> 
          </div>
          <div class="anime-img-div">
            <img src="${finalArray[6].img_url}" alt="${finalArray[6].title} cover art"
              class="anime-img">
            <p class="genre anime-data">Genres: ${finalArray[6].genre}</p>
            <p class="air-date anime-data">Air date: ${finalArray[6].aired}</p>
            <p class="episodes anime-data">Episodes: ${finalArray[6].episodes}</p>
            <p class="mal-score anime-data">MAL Score: ${finalArray[6].score}</p>
          </div>
        </div>
      </div>

      <!--Result 8-->
        <div class="card" id="card">
        <h3 class="title-name">${finalArray[7].title}</h3>
        <div class="card-data">
          <div class="anime-data-div">
            <p class="synopsis anime-data">${finalArray[7].synopsis}</p><br>
            <a target="_blank" rel="noopener noreferrer" href="${finalArray[7].link}" class="mal-link anime-data">Link to MAL</a> 
          </div>
          <div class="anime-img-div">
            <img src="${finalArray[7].img_url}" alt="${finalArray[7].title} cover art"
              class="anime-img">
            <p class="genre anime-data">Genres: ${finalArray[7].genre}</p>
            <p class="air-date anime-data">Air date: ${finalArray[7].aired}</p>
            <p class="episodes anime-data">Episodes: ${finalArray[7].episodes}</p>
            <p class="mal-score anime-data">MAL Score: ${finalArray[7].score}</p>
          </div>
        </div>
      </div>

      <!--Result 9-->
        <div class="card" id="card">
        <h3 class="title-name">${finalArray[8].title}</h3>
        <div class="card-data">
          <div class="anime-data-div">
            <p class="synopsis anime-data">${finalArray[8].synopsis}</p><br>
            <a target="_blank" rel="noopener noreferrer" href="${finalArray[8].link}" class="mal-link anime-data">Link to MAL</a> 
          </div>
          <div class="anime-img-div">
            <img src="${finalArray[8].img_url}" alt="${finalArray[8].title} cover art"
              class="anime-img">
            <p class="genre anime-data">Genres: ${finalArray[8].genre}</p>
            <p class="air-date anime-data">Air date: ${finalArray[8].aired}</p>
            <p class="episodes anime-data">Episodes: ${finalArray[8].episodes}</p>
            <p class="mal-score anime-data">MAL Score: ${finalArray[8].score}</p>
          </div>
        </div>
      </div>

      <!--Result 10-->
        <div class="card" id="card">
        <h3 class="title-name">${finalArray[9].title}</h3>
        <div class="card-data">
          <div class="anime-data-div">
            <p class="synopsis anime-data">${finalArray[9].synopsis}</p><br>
            <a target="_blank" rel="noopener noreferrer" href="${finalArray[9].link}" class="mal-link anime-data">Link to MAL</a> 
          </div>
          <div class="anime-img-div">
            <img src="${finalArray[9].img_url}" alt="${finalArray[9].title} cover art"
              class="anime-img">
            <p class="genre anime-data">Genres: ${finalArray[9].genre}</p>
            <p class="air-date anime-data">Air date: ${finalArray[9].aired}</p>
            <p class="episodes anime-data">Episodes: ${finalArray[9].episodes}</p>
            <p class="mal-score anime-data">MAL Score: ${finalArray[9].score}</p>
          </div>
        </div>
      </div>

      <!--Result 11-->
        <div class="card" id="card">
        <h3 class="title-name">${finalArray[10].title}</h3>
        <div class="card-data">
          <div class="anime-data-div">
            <p class="synopsis anime-data">${finalArray[10].synopsis}</p><br>
            <a target="_blank" rel="noopener noreferrer" href="${finalArray[10].link}" class="mal-link anime-data">Link to MAL</a> 
          </div>
          <div class="anime-img-div">
            <img src="${finalArray[10].img_url}" alt="${finalArray[10].title} cover art"
              class="anime-img">
            <p class="genre anime-data">Genres: ${finalArray[10].genre}</p>
            <p class="air-date anime-data">Air date: ${finalArray[10].aired}</p>
            <p class="episodes anime-data">Episodes: ${finalArray[10].episodes}</p>
            <p class="mal-score anime-data">MAL Score: ${finalArray[10].score}</p>
          </div>
        </div>
      </div>

      <!--Result 12-->
        <div class="card" id="card">
        <h3 class="title-name">${finalArray[11].title}</h3>
        <div class="card-data">
          <div class="anime-data-div">
            <p class="synopsis anime-data">${finalArray[11].synopsis}</p><br>
            <a target="_blank" rel="noopener noreferrer" href="${finalArray[11].link}" class="mal-link anime-data">Link to MAL</a> 
          </div>
          <div class="anime-img-div">
            <img src="${finalArray[11].img_url}" alt="${finalArray[11].title} cover art"
              class="anime-img">
            <p class="genre anime-data">Genres: ${finalArray[11].genre}</p>
            <p class="air-date anime-data">Air date: ${finalArray[11].aired}</p>
            <p class="episodes anime-data">Episodes: ${finalArray[11].episodes}</p>
            <p class="mal-score anime-data">MAL Score: ${finalArray[11].score}</p>
          </div>
        </div>
      </div>

      <!--Result 13-->
        <div class="card" id="card">
        <h3 class="title-name">${finalArray[12].title}</h3>
        <div class="card-data">
          <div class="anime-data-div">
            <p class="synopsis anime-data">${finalArray[12].synopsis}</p><br>
            <a target="_blank" rel="noopener noreferrer" href="${finalArray[12].link}" class="mal-link anime-data">Link to MAL</a> 
          </div>
          <div class="anime-img-div">
            <img src="${finalArray[12].img_url}" alt="${finalArray[12].title} cover art"
              class="anime-img">
            <p class="genre anime-data">Genres: ${finalArray[12].genre}</p>
            <p class="air-date anime-data">Air date: ${finalArray[12].aired}</p>
            <p class="episodes anime-data">Episodes: ${finalArray[12].episodes}</p>
            <p class="mal-score anime-data">MAL Score: ${finalArray[12].score}</p>
          </div>
        </div>
      </div>

      <!--Result 14-->
        <div class="card" id="card">
        <h3 class="title-name">${finalArray[13].title}</h3>
        <div class="card-data">
          <div class="anime-data-div">
            <p class="synopsis anime-data">${finalArray[13].synopsis}</p><br>
            <a target="_blank" rel="noopener noreferrer" href="${finalArray[13].link}" class="mal-link anime-data">Link to MAL</a> 
          </div>
          <div class="anime-img-div">
            <img src="${finalArray[13].img_url}" alt="${finalArray[13].title} cover art"
              class="anime-img">
            <p class="genre anime-data">Genres: ${finalArray[13].genre}</p>
            <p class="air-date anime-data">Air date: ${finalArray[13].aired}</p>
            <p class="episodes anime-data">Episodes: ${finalArray[13].episodes}</p>
            <p class="mal-score anime-data">MAL Score: ${finalArray[13].score}</p>
          </div>
        </div>
      </div>

      <!--Result 15-->
        <div class="card" id="card">
        <h3 class="title-name">${finalArray[14].title}</h3>
        <div class="card-data">
          <div class="anime-data-div">
            <p class="synopsis anime-data">${finalArray[14].synopsis}</p><br>
            <a target="_blank" rel="noopener noreferrer" href="${finalArray[14].link}" class="mal-link anime-data">Link to MAL</a> 
          </div>
          <div class="anime-img-div">
            <img src="${finalArray[14].img_url}" alt="${finalArray[14].title} cover art"
              class="anime-img">
            <p class="genre anime-data">Genres: ${finalArray[14].genre}</p>
            <p class="air-date anime-data">Air date: ${finalArray[14].aired}</p>
            <p class="episodes anime-data">Episodes: ${finalArray[14].episodes}</p>
            <p class="mal-score anime-data">MAL Score: ${finalArray[14].score}</p>
          </div>
        </div>
      </div>

        <a href="/src/index.html" class="retake-quiz-btn anime-data">Retake Quiz</a> <!-- OPEN IN NEW TAB -->

        </div>
    </div>`
  );

  pickBackgroundImage();
  //HEIGHT OF BACKGROUND
  const resultsBox = document.getElementById("results-home");
  console.log(resultsBox);
  const resultsBoxHeight = resultsBox.offsetHeight;
  console.log(resultsBoxHeight);

  const backgroundImage = document.getElementById("bg-image");
  backgroundImage.style.height = resultsBoxHeight + 175 + "px";
  backgroundImage.style.minHeight = "100%";

  DOMSelectors.displayContainer.style.justifyContent = "initial";
};

export {
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
  displayResults,
};

//sssssssss
