const { log } = require("console");
const fs = require("fs");
const boardString = fs.readFileSync("./puzzles.txt", "utf-8");


// делает массив из текстового файла судоку, только первый!!!!!!!!!!!(пока)
function createArrFromText(boardString) {
  let sudokuArr1 = boardString.slice(0, 81).split("");

  const suNum = Number(process.argv[2]) || 1
  const suSt = boardString.split('\n').filter((el) => el !== '')
  const sudocu = (num, sud) => {
    if (suNum > 0 && suNum < 17) {
      return suSt[suNum - 1]
    } else {
      return 'Сами придумывайте'
    }
  }
}4


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


// присваиваем полученному массиву имя переменной board
let board = createArrFromText(boardString);


// возвращает координату пустого значения, если его нет возвращает null
function checkEmpty(board) {
  let sudocuFromText = board;
  for (let r = 0; r < sudocuFromText.length; r++) {
    for (let c = 0; c < sudocuFromText[r].length; c++) {
      if (sudocuFromText[r][c] === "-") {
        return [r, c];
      }
    }
  }
  return null;
}

const isValid = (num, pos, board) => {
  const [r, c] = pos;
  for (let i = 0; i < 9; i++) {
    if (board[i][c] === num && r !== i) {
      return false;
    }
  }
  for (let i = 0; i < 9; i++) {
    if (board[r][i] === num && c !== i) {
      return false;
    }
  }

  const boxRow = Math.floor(r / 3) * 3;
  const boxCol = Math.floor(c / 3) * 3;

  for (let a = boxRow; a < boxRow + 3; a++) {
    for (let z = boxCol; z < boxCol + 3; z++) {
      if (num === board[a][z] && r !== a && c !== z) {
        return false;
      }
    }
  }
  return true;
};

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt. ---> у нас принимает массив board
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат - в формате массива
 */

function solve(board) {
  // **currNumPosit позиция пустого элемента
  let currNumPosit = checkEmpty(board);
  // когда возвращает true и рекурсия заканчивается
  if (currNumPosit === null) {
    return true;
  }

  // начинаем подставлять числа от 1 до 9
  for (let i = 1; i <= 9; i++) {
    //присваиваем пустой позиции число от 1 до 9
    const currNumber = i.toString();
    const valid = isValid(currNumber, currNumPosit, board);
    if (valid) {
      const [x, y] = currNumPosit;
      board[x][y] = currNumber;
    }
    if (solve()) {
      return true;
    }
    board[x][y] = '-';
  }
  return false;
}
// return board;
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
  let result = '';
  for (let i = 0; i < board.length; i++) {
    result += board[i].join('  ') + ' \n';
  }
  return result;
}
//  console.log(prettyBoard(board));

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  prettyBoard,
  isValid,
};
