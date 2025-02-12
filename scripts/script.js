import { buttons } from "./data.js";
import { exeptions } from "./data.js";


let buttonHTML = '';
let keyboardIds = [];
let resultId = 0;


buttons.forEach((button) =>{
  buttonHTML = buttonHTML +  `
  <button class="js-button-${button.buttonId}" id="${button.buttonId}">${button.buttonSymbol}</button>
  `;
  document.querySelector('.js-keyboard-main').innerHTML = buttonHTML
  resultId ++;
  keyboardIds.push(resultId);
  
});
console.log(keyboardIds)


//генерация вводимого текста 

let inputResult = [];
document.body.addEventListener('keydown', (event) => {
  let input = '';
  input = event.key;
  keyPressed (input)
    if (input === 'Backspace') {
      inputRemove();
    } else if (exeptions[input] === undefined) {
      inputFieldgen(input);
    } 
  })
  
  document.body.addEventListener('keyup', (event) => {
    let input = '';
    input = event.key;
    keyNotPressed (input)
    })

    
  
//генерация текста 
function inputFieldgen (input) {
  inputResult.push(input);
      document.querySelector('.js-input-field').innerHTML = '';
    for (let i=0; i < inputResult.length; i++) {
      document.querySelector('.js-input-field').innerHTML += inputResult[i]; 
    };
}

//удаление
function inputRemove () {
  inputResult.splice(inputResult.length-1);
      document.querySelector('.js-input-field').innerHTML = '';
    for (let i=0; i < inputResult.length; i++) {
      document.querySelector('.js-input-field').innerHTML += inputResult[i]; 
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