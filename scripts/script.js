import { buttons } from "./data.js";
import { exeptions } from "./data.js";
import { buttonsDouble } from "./data.js";

//let buttonHTML = '';
let keyboardIds = [];
let resultId = 0;
let buttonHTMLdouble = '';

/* одиночные кнопки
buttons.forEach((button) =>{
  buttonHTML = buttonHTML +  `
  <button class="js-button-${button.buttonId}" id="${button.buttonId}">${button.buttonSymbol}</button>
  `;
  document.querySelector('.js-keyboard-main').innerHTML = buttonHTML
  resultId ++;
  keyboardIds.push(resultId);
  
});
console.log(keyboardIds)
*/

//кнопки с двойным регистром 
buttonsDouble.forEach((button) => {
  buttonHTMLdouble = buttonHTMLdouble +  `
  <div>
    <button class="js-button-${button.buttonId} button-stock" id="${button.buttonId}">
      <p class="js-button-en-${button.buttonId}">${button.buttonSymbolEn}</p>
      <p class="js-button-ru-${button.buttonId}">${button.buttonSymbolRu}</p>
    </button>
  </div>
  `;
  document.querySelector('.js-keyboard-double-main').innerHTML = buttonHTMLdouble;
  resultId ++;
  keyboardIds.push(resultId);
});

console.log(keyboardIds)

//генерация вводимого текста 

let inputResult = [];
document.body.addEventListener('keydown', (event) => {
  let input = '';
  input = event.key;
  keyPressed (input);
    if (input === 'Backspace') {
      inputRemove();
    } else if (exeptions[input] === undefined) {
      inputFieldgen(input);
    } 
  });
  document.body.addEventListener('keyup', (event) => {
    let input = '';
    input = event.key;
    keyNotPressed (input);
  });

    
  
//генерация текста 
function inputFieldgen (input) {
  inputResult.push(input);
      document.querySelector('.js-input-field').innerHTML = '';
    for (let i=0; i < inputResult.length; i++) {
      document.querySelector('.js-input-field').innerHTML += inputResult[i];       
    };
  console.log(inputResult)
}

//удаление
function inputRemove () {
  inputResult.splice(inputResult.length-1);
      document.querySelector('.js-input-field').innerHTML = '';
    for (let i=0; i < inputResult.length; i++) {
      document.querySelector('.js-input-field').innerHTML += inputResult[i]; 
    }; 
  console.log(inputResult)
}


//для двойных клавиш
function keyPressed (input) {
  for (let i=0; i < keyboardIds.length; i++) {
  const id = i+1;
  if (document.querySelector(`.js-button-en-${id}`).innerText === input || document.querySelector(`.js-button-ru-${id}`).innerText === input) {
    document.querySelector(`.js-button-${id}`).classList.add("is-pressed")
  };
};
}

function keyNotPressed (input) {
  for (let i=0; i < keyboardIds.length; i++) {
    const id = i+1;
    if (document.querySelector(`.js-button-en-${id}`).innerText === input || document.querySelector(`.js-button-ru-${id}`).innerText === input) {
      document.querySelector(`.js-button-${id}`).classList.remove("is-pressed")
    };
  };
}


//исключения два иных варианта 
/*
function eventExeption(input) {
  for (let i=0; i < exeptions.length; i++) {
    if (input === exeptions[i]) {
      return input;
    }     
  };
}
*/
/*switch(input) {
    case eventExeption(input):
      break; 
    case 'Backspace':
      inputRemove();
      break
    default:
      exeptions1[input] ?? inputFieldgen(input);
      if (exeptions1[input] === undefined) {
        inputFieldgen(input);
      } 
    };*/

/* Для одинарной клавиши 
function keyPressed (input) {
    for (let i=0; i < keyboardIds.length; i++) {
    const id = i+1;
    if (document.querySelector(`.js-button-${id}`).innerText === input) {
      console.log(document.querySelector(`.js-button-${id}`).innerHTML);
      document.querySelector(`.js-button-${id}`).classList.add("is-pressed")
    };
  };
}

function keyNotPressed (input) {
  for (let i=0; i < keyboardIds.length; i++) {
    const id = i+1;
    if (document.querySelector(`.js-button-${id}`).innerText === input) {
      document.querySelector(`.js-button-${id}`).classList.remove("is-pressed")
    };
  };
}
*/

/*
function keyPressed (input) {
  for (let i=0; i < keyboardIds.length; i++) {
  const id = i+1;
    if (input === document.querySelector(`.js-button-en-${id}`).innerText) {
      document.querySelector(`.js-button-${id}`).classList.add("is-pressed")
    } else if (input === document.querySelector(`.js-button-ru-${id}`).innerText) {
      document.querySelector(`.js-button-${id}`).classList.add("is-pressed")
    }
  };
}  

*/



//Генерация текста для теста 

const testText = ['t', 'e', 's', 't'];
let text = '';
testText.forEach((i) => {
  text = text + i;
})
console.log(text);
document.querySelector('.js-base-text').innerHTML = text;