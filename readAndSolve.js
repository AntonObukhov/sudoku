// Подключить функции из файла sudoku.js.
const sudoku = require("./sudoku.js");

const {
  animate,
  prettyBoard,
  createArrFromText,
  solveSudocu,
} = require("./sudoku.js");

animate(() => {
  console.log(
    "\x1b[33m%s\x1b[0m",
    prettyBoard(solveSudocu(createArrFromText()))
  );
});
