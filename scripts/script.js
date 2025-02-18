import { buttons } from "./data.js";
import { exeptions } from "./data.js";
import { buttonsDouble } from "./data.js";
import { buttonsRow1 } from "./data.js";
import { buttonsRow2 } from "./data.js";
import { buttonsRow3 } from "./data.js";
import { buttonsRow4 } from "./data.js";
import { buttonsRow5 } from "./data.js";
//let buttonHTML = '';
let keyboardIds = [];
let resultId = 0;
let buttonHTMLrow1 = '';
let buttonHTMLrow2 = '';
let buttonHTMLrow3 = '';
let buttonHTMLrow4 = '';
let buttonHTMLrow5 = '';
const testText = ['T', 'e', 's', 't', ' ', 'н', 'а', ' ', 'в', 'с', 'ё', '!'];
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


//генерация по строкам в дивы
buttonsRow1.forEach((button) => {
  buttonHTMLrow1 = buttonHTMLrow1 +  `
    <div class="single-button">
      <button class="js-button-${button.buttonId} button-stock button-${button.buttonId}" id="${button.buttonId}">
        <p class="js-button-en-${button.buttonId}">${button.buttonSymbolEn}</p>
        <p class="js-button-ru-${button.buttonId}">${button.buttonSymbolRu}</p>
      </button>
    </div>
    `;
  document.querySelector('.js-clac-row1').innerHTML = buttonHTMLrow1;
  resultId ++;
  keyboardIds.push(resultId);
});

buttonsRow2.forEach((button) => {
  buttonHTMLrow2 = buttonHTMLrow2 +  `
    <div class="single-button">
      <button class="js-button-${button.buttonId} button-stock button-${button.buttonId}" id="${button.buttonId}">
        <p class="js-button-en-${button.buttonId}">${button.buttonSymbolEn}</p>
        <p class="js-button-ru-${button.buttonId}">${button.buttonSymbolRu}</p>
      </button>
    </div>
    `;
  document.querySelector('.js-clac-row2').innerHTML = buttonHTMLrow2;
  resultId ++;
  keyboardIds.push(resultId);
});

buttonsRow3.forEach((button) => {
  buttonHTMLrow3 = buttonHTMLrow3 +  `
    <div class="single-button">
      <button class="js-button-${button.buttonId} button-stock button-${button.buttonId}" id="${button.buttonId}">
        <p class="js-button-en-${button.buttonId}">${button.buttonSymbolEn}</p>
        <p class="js-button-ru-${button.buttonId}">${button.buttonSymbolRu}</p>
      </button>
    </div>
    `;
  document.querySelector('.js-clac-row3').innerHTML = buttonHTMLrow3;
  resultId ++;
  keyboardIds.push(resultId);
});

buttonsRow4.forEach((button) => {
  buttonHTMLrow4 = buttonHTMLrow4 +  `
    <div class="single-button">
      <button class="js-button-${button.buttonId} button-stock button-${button.buttonId}" id="${button.buttonId}">
        <p class="js-button-en-${button.buttonId}">${button.buttonSymbolEn}</p>
        <p class="js-button-ru-${button.buttonId}">${button.buttonSymbolRu}</p>
      </button>
    </div>
    `;
  document.querySelector('.js-clac-row4').innerHTML = buttonHTMLrow4;
  resultId ++;
  keyboardIds.push(resultId);
});

buttonsRow5.forEach((button) => {
  buttonHTMLrow5 = buttonHTMLrow5 +  `
    <div class="single-button">
      <button class="js-button-${button.buttonId} button-stock button-${button.buttonId}" id="${button.buttonId}">
        <p class="js-button-en-${button.buttonId}">${button.buttonSymbolEn}</p>
        <p class="js-button-ru-${button.buttonId}">${button.buttonSymbolRu}</p>
      </button>
    </div>
    `;
  document.querySelector('.js-clac-row5').innerHTML = buttonHTMLrow5;
  resultId ++;
  keyboardIds.push(resultId);
});

/*//кнопки с двойным регистром 
buttonsDouble.forEach((button) => {
  buttonHTMLdouble = buttonHTMLdouble +  `
    <div class="single-button">
      <button class="js-button-${button.buttonId} button-stock button-${button.buttonId}" id="${button.buttonId}">
        <p class="js-button-en-${button.buttonId}">${button.buttonSymbolEn}</p>
        <p class="js-button-ru-${button.buttonId}">${button.buttonSymbolRu}</p>
      </button>
    </div>
    `;
  document.querySelector('.js-keyboard-double-main').innerHTML = buttonHTMLdouble;
  resultId ++;
  keyboardIds.push(resultId);
});
*/
console.log(buttonsDouble)
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
    } else if (input === 'Enter') {
      compareArrays (testText, inputResult)
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


let text = '';
testText.forEach((i) => {
  text = text + i;
})
console.log(text);
document.querySelector('.js-base-text').innerHTML = text;
//сравнение результата 
function compareArrays (a,b) {
  if(a.length !== b.length) {
    console.log('разные текста');
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        console.log('нет');
        return false;
      };
    };
    console.log('база');
    document.querySelector('.js-input-field').classList.add("resultFin");
  };
}

