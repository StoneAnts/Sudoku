//let board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

let board = [
  ['.', '.', '.', '1', '.', '.', '.', '.', '.'],
  ['.', '.', '5', '.', '4', '.', '2', '.', '.'],
  ['.', '2', '.', '5', '.', '.', '.', '.', '7'],
  ['.', '.', '4', '.', '7', '1', '.', '5', '.'],
  ['.', '9', '.', '6', '.', '.', '.', '.', '1'],
  ['.', '.', '8', '.', '.', '.', '3', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '9', '.', '2'],
  ['.', '.', '7', '.', '8', '.', '.', '4', '.']
];

function isValid(row, col, value, board) {
  const length = board.length;
  //console.log(length);
  //console.log(row, col);
  //console.log('value:', value);
  //console.log(board[row][col]);
  //console.log(board[row]);
  //同一行不能同时出现相同的数字
  for (let i = 0; i < length; i++) {
    if (board[row][i] === value) {
      return false;
    }
  }
  //同一列不能同时出现相同的数字
  for (let i = 0; i < length; i++) {
    if (board[i][col] === value) {
      return false;
    }
  }

  //同一个宫格，不能出现相同的数字
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === value) {
        return false;
      }
    }
  }
  return true;
}
//let n = 0;
//  m = 0;
function backTracking(board) {
  //n++;
  //console.log(n);
  //console.log(board);
  const length = board[0].length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (board[i][j] !== '.') continue;
      for (let value = 1; value < 10; value++) {
        if (isValid(i, j, `${value}`, board)) {
          board[i][j] = `${value}`;
          if (backTracking(board)) {
            return true;
          } else {
            board[i][j] = `.`;
          }
        }
      }
      return false;
    }
  }
  return true;
}

function solveSudoku() {
  backTracking(board);
  console.log(board);
}

//console.log(isValid(0, 2, '1', board));

solveSudoku();
