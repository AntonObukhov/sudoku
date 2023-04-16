// Подключить функции из файла sudoku.js.
const sudoku = require('./sudoku.js');
// const { solve, prettyBoard, sudocu, createArrFromText, checkEmpty, isValid } = require('./sudoku.js');
// console.log(prettyBoard);

/* function readAndSolve(error, fileData) {
  // Если чтение файла не удалось, выбросить ошибку с описанием проблемы и
  // завершить работу функции.
  if (error) {
    throw error;
  } */

// Разбить содержимое файла построчно и отфильтровать все пустые строки.
// const puzzles = fileData.split('\n').filter((line) => line !== '');

// // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.
// let puzzleNumber = Number(process.argv[2]) || 1;

// // Ограничить номер судоку максимальным числом массива с паззлами.
// if (puzzleNumber > puzzles.length) {
//   puzzleNumber = puzzles.length;
// }

// Получить желаемый судоку по индексу и вывести его в консоль.
// const puzzle = puzzles[puzzleNumber - 1];
// console.log(`Решаем судоку №${puzzleNumber}:`);
// console.log(puzzle, '\n');

// Использовать функцию solve из файла sudoku.js для решения судоку.

// const puzzle = [
//   ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
//   ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
//   ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
//   ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
//   ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
//   ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
//   ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
//   ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
//   ['6', '-', '-', '3', '-', '8', '9', '-', '-'],
// ];
const solvedPuzzle = sudoku.solveSudocu(puzzle);

  // Использовать функцию isSolved из файла sudoku.js для проверки решения судоку.
  if (!sudoku.isValid(solvedPuzzle)) {
    console.log(`Не смогли решить судоку №${puzzleNumber} :(`, '\n');
    return; // Если судоку не решён, завершить работу этой функции.
  }

// Код ниже сработает, только если проверка решения судоку прошла успешно.
console.log(`Судоку №${puzzleNumber} решён успешно!`);

// Использовать функцию prettyBoard из файла sudoku.js для форматирования
// игрового поля в строку в желаемом формате.
console.log(sudoku.prettyBoard(solvedPuzzle), '\n');
/* } */

module.exports = readAndSolve;
