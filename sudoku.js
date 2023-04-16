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

// возвращает координату пустого значения, если его нет возвращает null
function checkEmpty() {
  let sudocuFromText = createArrFromText(boardString);
  for (let r = 0; r < sudocuFromText.length; r++) {
    for (let c = 0; c < sudocuFromText[r].length; c++) {
      if (sudocuFromText[r][c] === '-') {
        return [r, c];
      }
    }
  }
  return null;
}


const isValid = (num, currpos, board) => {
  const [r, c] = position;
  for (let i = 0; i < size; i++) {
    if (board[i][c] === num && r!= i) {
   return false
    }

       if (board[r][i] === num && c!= i) {
   return false
    }

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
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */


 function prettyBoard(board) {
   let result = "";
   for (let i = 0; i < board.length; i++) {
     result += board[i].join("  ") + " \n";
   }
  return result;
 }
 console.log(prettyBoard(board));


// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
   prettyBoard,
};
