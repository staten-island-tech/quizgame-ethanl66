import { DOMSelectors } from "./DOM";
import { questionsList } from "./questions.js";

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
                    
           <a class="btn finish-button" id="nextButton" href="results.html">Get Results</a>`
  );
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
};

//ssssss
