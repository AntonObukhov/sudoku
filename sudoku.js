const { log } = require('console');
const fs = require('fs');
const boardString = fs.readFileSync('./puzzles.txt', 'utf-8');

// делает массив из текстового файла судоку, только первый!!!!!!!!!!!(пока)
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

// присваиваем полученному массиву имя переменной board
let board = createArrFromText(boardString);

// возвращает координату пустого значения, если его нет возвращает null
function checkEmpty(board) {
  let sudocuFromText = board;
  for (let r = 0; r < sudocuFromText.length; r++) {
    for (let c = 0; c < sudocuFromText[r].length; c++) {
      if (sudocuFromText[r][c] === '-') {
        return [r, c];
      }
    }
  }
  return null;
}
// console.log(checkEmpty(board));
let coordinatesOfEmpty = checkEmpty(board);

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt. ---> у нас принимает массив board
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат - в формате массива
 */

function solve(board) {
  // когда возвращает false и рекурсия заканчивается
  if (coordinatesOfEmpty === null){
    return false;
  } 

  if (solve()){
    // **currNumPosit позиция пустого элемента
    let currNumPosit = coordinatesOfEmpty;
    // начинаем подставлять числа от 1 до 9
    for (let i = 1; i <= 9; i++) {
      
      // board.currNumPosit = i;
      if (isValid){
        //ЗДЕСЬ НЕПРАВИЛЬНО ПРИСВОИЛА КООРДИНАТУ ИЗМЕНЯЕМОГО ЧИСЛА(деструктуризация)
        board.currNumPosit = i;
      }
      
      
    }
  }
  
  return true;
}
// return board;
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
//  console.log(prettyBoard(board));

 


// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
   prettyBoard,
};
