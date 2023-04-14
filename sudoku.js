const { log } = require("console");
const fs = require("fs");
const boardString = fs.readFileSync("./puzzles.txt", "utf-8");

function createArrFromText(boardString) {
  let sudokuArr1 = boardString.slice(0, 81).split("");
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

// Функция замены пустых значений и получения координат пуст значений
function checkEmpty() {
  let arrOfCoord = [];
  let sudokuFromText = createArrFromText(boardString);
  for (let i = 0; i < sudokuFromText.length; i++) {
    for (let j = 0; j < sudokuFromText[i].length; j++) {
      if (sudokuFromText[i][j] === "-") {
        arrOfCoord.push([i, j]);
      }
    }
  }
  return arrOfCoord;
}

// console.log(checkEmpty());

// Функция замена значений
function changeChars() {
  let sudokuFromText = createArrFromText(boardString);
  for (let i = 0; i < sudokuFromText.length; i++) {
    for (let j = 0; j < sudokuFromText[i].length; j++) {
      if (sudokuFromText[i][j] === "-") {
        sudokuFromText[i][j] = randomInteger().toString();
      }
    }
  }
  return sudokuFromText;
}

console.log(changeChars());

// получаем ранд.число от 1-9
function randomInteger(min, max) {
  let rand = 1 - 0.5 + Math.random() * 9;
  return Math.round(rand);
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(sudokuFromText, arrOfCoord) {
  // i это строка из измененной доски, идем по строкам
  for (let i = 0; i < sudokuFromText.length; i += 1) {
    //j - номер столбца, идем по столбцам измененной доски
    for (let j = 0; j < sudokuFromText[i].length; j++) {}
  }
}

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
