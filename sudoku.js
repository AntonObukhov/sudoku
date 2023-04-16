const { log } = require('console');
const fs = require('fs');
const boardString = fs.readFileSync('./puzzles.txt', 'utf-8');

const sudocu = (num, sud) => {
  const suNum = Number(process.argv[2]) || 1;
  const suSt = boardString.split('\n').filter((el) => el !== '');
  if (suNum > 0 && suNum < 17) {
    return suSt[suNum - 1];
  } else {
    return 'Сами придумывайте';
  }
};

// делает массив из текстового файла судоку, только первый!!!!!!!!!!!1

function createArrFromText(sudocu) {
  if (sudocu().length < 20) {
    return sudocu();
  }
  let sudocuArr1 = sudocu().split('');

  let res = [];
  for (let i = 0; i < sudocuArr1.length; i += 9) {
    res.push(sudocuArr1.slice(i, i + 9));
  }
  return res;
}

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt. ---> у нас принимает массив board
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат - в формате массива
 */
function solveSudocu(board) {

  // возвращает координату пустого значения, если его нет возвращает null
  function checkEmpty() {
    // let sudocuFromText = board;
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < boardString[r].length; c++) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null;
  }

  const isValid = (num, pos, boards) => {
    const [r, c] = pos;
    for (let i = 0; i < 9; i++) {
      if (boards[i][c] === num && r !== i) {
        return false;
      }
    }
    for (let i = 0; i < 9; i++) {
      if (boards[r][i] === num && c !== i) {
        return false;
      }
    }

    const boxRow = Math.floor(r / 3) * 3;
    const boxCol = Math.floor(c / 3) * 3;

    for (let a = boxRow; a < boxRow + 3; a++) {
      for (let z = boxCol; z < boxCol + 3; z++) {
        if (num === boards[a][z] && r !== a && c !== z) {
          return false;
        }
      }
    }
    return true;
  };

  function solve(boards) {
    // **currNumPosit позиция пустого элемента
    const currNumPosit = checkEmpty(board);
    // когда возвращает true и рекурсия заканчивается
    if (currNumPosit === null) {
      return true;
    }
    // начинаем подставлять числа от 1 до 9
    for (let i = 1; i <= 9; i++) {
      const currNumber = i.toString();
      const valid = isValid(currNumber, currNumPosit, board);
      if (valid) {
        const [x, y] = currNumPosit;
        boards[x][y] = currNumber;
      }
      if (solve()) {
        return true;
      }
      boards[x][y] = '-';
    }
    return false;
  }
  solve(board);
  return board;
}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 */

function prettyBoard(board) {
  let result = '';
  for (let i = 0; i < board.length; i++) {
    result += board[i].join('  ') + ' \n';
  }
  return result;
}


// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  // solve,
  prettyBoard,
  sudocu,
  createArrFromText,
  // checkEmpty,
  // isValid,
  solveSudocu,
};
