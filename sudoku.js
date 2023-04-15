const { log } = require('console');
const fs = require('fs');
const boardString = fs.readFileSync('./puzzles.txt', 'utf-8');

// делает массив из текстового файла судоку, только первый!!!!!!!!!!!1
function createArrFromText(boardString) {
  let sudokuArr1 = boardString.slice(0, 81).split('');
  let res = [];
  for (let i = 0; i < sudokuArr1.length; i++) {
    if (i % 8 === 0 && i != 0) {
      res.push([
        sudokuArr1[i - 8],
        sudokuArr1[i - 7],
        sudokuArr1[i - 6],
        sudokuArr1[i - 5],
        sudokuArr1[i - 4],
        sudokuArr1[i - 3],
        sudokuArr1[i - 2],
        sudokuArr1[i - 1],
        sudokuArr1[i - 0],
      ]);
    }
  }
  return res;
}

// Функция получения координат пуст значений
function checkEmpty() {
  let arrOfCoord = [];
  let sudocuFromText = createArrFromText(boardString);
  for (let i = 0; i < sudocuFromText.length; i++) {
    for (let j = 0; j < sudocuFromText[i].length; j++) {
      if (sudocuFromText[i][j] === '-') {
        arrOfCoord.push([i, j]);
      }
    }
  }
  return arrOfCoord;
}

// console.log(checkEmpty());

// Функция замена значений
function changeChars() {
  let sudoсuFromText = createArrFromText(boardString);
  for (let i = 0; i < sudoсuFromText.length; i++) {
    for (let j = 0; j < sudoсuFromText[i].length; j++) {
      if (sudoсuFromText[i][j] === '-') {
        sudoсuFromText[i][j] = randomInteger();
        // проверка полученного значения на повтор в строке
        /*  function checkInRow() {
          for (let a = 0; a < sudocuFromText[i].length; a++) {
            if (sudocuFromText[i][j] != sudocuFromText[i][a]) {
              sudocuFromText[i][j];
            } else {
              sudocuFromText[i][j] = randomInteger().toString();
              checkInRow();
            }
          }
          return sudocuFromText[i][j];
        }
        checkInRow(); */
        // for (let a = 0; a < sudocuFromText[i].length; a++){
        //   if(sudocuFromText[i][j] = sudocuFromText[i][a]){

        //   }
        // }
      }
    }
  }
  return sudoсuFromText;
}

function ChkDsk (arr, num){
  arr[num] = randomInteger()
  let setArr = new Set(arr)
if(setArr < 9){
  chkDsk()
} else return arr[num]
}
// Строка с разными числами
/* function diffNumsInRow() {
  let arrOfSudocu = changeChars();
  let firstRow = arrOfSudocu[0];
  console.log(firstRow);
  for (let i = 0; i < firstRow.length; i++) {
    if (!isNaN(firstRow[i])) {
      if firstRow.in firstRow[i]
    }
    
  }
}
console.log(diffNumsInRow()); */

// получаем ранд.число от 1-9
function randomInteger(min, max) {
  let rand = 1 - 0.5 + Math.random() * 9;
  return Math.round(rand);
}

// проверка рандомного числа
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
let sudocuFromText = changeChars();
let arrOfCoord = checkEmpty();

function isSolved(sudocuFromText, arrOfCoord) {
  let setListCheck;
  // i это строка из измененной доски, идем по строкам
  let stop = 0;
  while (stop === 0) {
    for (let i = 0; i < sudocuFromText.length; i += 1) {
      //j - номер столбца, идем по столбцам измененной доски
      setListCheck = new Set(sudocuFromText[i]);
      if (setListCheck.size < 9) {
        // вызвать функцию которая заменяет значения в строке
        for (let j = 0; j < arrOfCoord.length; j++) {
          if (arrOfCoord[j][0] == i) {
            let a = arrOfCoord[j][1];
            sudocuFromText[i][a] = randomInteger().toString();
          }
        }
      } else {
        stop = 1;
        s;
        return sudocuFromText;
      }
    }
  }
}

// console.log(checkEmpty());
// console.log(isSolved(sudocuFromText, arrOfCoord));

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
