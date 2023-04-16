const { log } = require('console');
const fs = require('fs');
const boardString = fs.readFileSync('./puzzles.txt', 'utf-8');



const sudocu = (num, sud) => {
  const suNum = Number(process.argv[2]) || 1
const suSt = boardString.split('\n').filter((el)=> el !== '')
  if(suNum>0 && suNum <17){
    return suSt[suNum - 1]
  } else {
    return 'Сами придумывайте'
  }
}


// делает массив из текстового файла судоку, только первый!!!!!!!!!!!1
function createArrFromText(sudocu) {
  if (sudocu().length<20){
    return sudocu()
  }
  let sudocuArr1 = sudocu().split('');
  let res = [];
  for (let i = 0; i < sudocuArr1.length; i+=9) {
    res.push(sudocuArr1.slice(i,i+9))
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
  // isSolved,
  prettyBoard,
};
