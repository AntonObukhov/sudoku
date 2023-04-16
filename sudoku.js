const { rejects } = require("assert");
const fs = require("fs");
const util = require('util')
const { resolve } = require("path");
const boardString = fs.readFileSync("./puzzles.txt", "utf-8");

//Делает массив из текстового файла 'puzzles.txt'. Пример запуска: node имя_файла "число" (число - это номер судоку которое мы хотим вырбать).

function createArrFromText() {
  const sudocu = () => {
    const suNum = Number(process.argv[2]) || 1;
    const suSt = boardString.split("\n").filter((el) => el !== "");

    if (suNum > 0 && suNum < 16) {
      const solved = setTimeout(() => {});
      console.log("\x1b[35m%s\x1b[0m", `\nСудоку № ${suNum} решено успешно \n`);
      return suSt[suNum - 1];
    } else {
      return "Мимо, поробуй число от 1 - 15";
    }
  };

  const sudo = sudocu();
  if (sudo.length < 20) {
    return console.log(sudocu());
  }
  let sudocuArr1 = sudo.split("");
  let res = [];
  for (let i = 0; i < sudocuArr1.length; i += 9) {
    res.push(sudocuArr1.slice(i, i + 9));
  }
  return res;
}

// Принимает игровое поле в формате многомерного массива (9 подмассивов, которые состоят из 9 элемнтов строчного типа.). И возвращает решенный вариант судоку.
function solveSudocu(board) {
  // возвращает координату пустого значения, если его нет возвращает null
  function checkEmpty() {
    // let sudocuFromText = board; board - это судоку в виде многомерного массива.
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        if (board[r][c] === "-") {
          // Получаем координаты незаполненных значений
          return [r, c];
        }
      }
    }
    // Если все значения заполнены возвращает null
    return null;
  }

  // Функция, которая выполняет проверку: является ли подставленное нами число уникальным для строки, столбца и квадрата 3х3 в котором данное было вставлено.
  // аргументы функции num - подбираемое чило от 1-9; pos - ранее выявленные координаты пустых значений в судоку. board - игровое поле судоку в виде многомерного массива
  const isValid = (num, pos, board) => {
    const [r, c] = pos;
    for (let i = 0; i < 9; i++) {
      // Проверяем является ли наше подбираемое число от 1 до 9 уникальным в перебираемом столбце.
      if (board[i][c] === num && r !== i) {
        return false;
      }
    }
    // Проверяем является ли наше подбираемое число от 1 до 9 уникальным в перебираемой строке.
    for (let i = 0; i < 9; i++) {
      if (board[r][i] === num && c !== i) {
        return false;
      }
    }

    // Определяем нулевые координаты х у для квадрата размерами 3х3
    const boxRow = Math.floor(r / 3) * 3;
    const boxCol = Math.floor(c / 3) * 3;

    // Проверяем является ли наше подбираемое число от 1 до 9 уникальным в перебираемом квадрате 3x3.
    /*  ↓[] → [] → []
        ↓[] → [] → []
        ↓[] → [] → []   */

    for (let a = boxRow; a < boxRow + 3; a++) {
      for (let z = boxCol; z < boxCol + 3; z++) {
        if (num === board[a][z] && r !== a) {
          return false;
        }
      }
    }
    // Возращаем true, если проверка на валидность подставляемых чисел пройдена
    return true;
  };

  function solve() {
    // **currNumPosit позиция пустого элемента
    const currNumPosit = checkEmpty();
    // когда возвращает true и рекурсия заканчивается
    if (currNumPosit === null) {
      return true;
    }
    // начинаем подставлять числа от 1 до 9
    for (let i = 1; i <= 9; i++) {
      const currNumber = i.toString();
      const valid = isValid(currNumber, currNumPosit, board);
      // Если подставляемое число уникально(валидно), мы заменяем пустое значение, по ранее вычисленным коорданатам, на данное число
      if (valid) {
        const [x, y] = currNumPosit;
        board[x][y] = currNumber;

        // Если ранее подставленное число, позволяет нам дальше заполнять пропуски и не возникает неразрешенных случаев, то возвращаем true
        // Это значит, что все подставленные значения соответствуют правилам судоку
        if (solve()) {
          return true;
        }
        // Если ранее подставленное число, не позволяет нам дальше заполнять пропуски и  возникают неразрешаемые случаи, то меняем данное значени на "-" и заново подбираем значение.
        board[x][y] = "-";
      }
    }
    // Остались путсые значения, проводим подставление значени дальше.
    return false;
  }
  // Вызываем функцию подставления значений
  solve();
  // Возвращаем нашу доску с заполнеными значениями, отвечающими правилам игры в судоку.
  return board;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 */

function prettyBoard(board) {
  let result = " -----------------------\n";
  for (let i = 0; i < board.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      result += "|-----------------------|\n";
    }
    result += "| ";
    for (let j = 0; j < board[i].length; j++) {
      result += board[i][j] + " ";
      if ((j + 1) % 3 === 0 && j !== 8) {
        result += "| ";
      }
    }
    result += "|\n";
  }
  result += " -----------------------\n";
  return result;
}

// Функция, которая делает +100 к презентации проекта
function animate(result) {
  const letters = [
    "\n\n--- S",
    "  U",
    "  D",
    "  O",
    "  C",
    "  U ---",
    "\n",
    "\n",
  ];
  let i = 0;
  return new Promise((resolve, reject) => {
    const output = setInterval(() => {
      process.stdout.write(util.format("\x1b[31m%s\x1b[0m", letters[i % letters.length]));
      i++;
      if (i === letters.length) {
        clearInterval(output);
        result();
      }
    }, 1000);
  });
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  createArrFromText,
  prettyBoard,
  solveSudocu,
  animate,
};
