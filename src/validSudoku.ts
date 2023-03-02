type IsValideSudoku = (board: string[][]) => boolean;
export const isValidSudoku: IsValideSudoku = (board) => {
  const rows: Set<string>[] = [];
  const cols: Set<string>[] = [];
  const squares: Set<string>[] = [];
  board.forEach(() => {
    rows.push(new Set());
    cols.push(new Set());
    squares.push(new Set());
  });
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell === ".") continue;
      const square = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      if (rows[i].has(cell) || cols[j].has(cell) || squares[square].has(cell)) {
        return false;
      }
      rows[i].add(cell);
      cols[j].add(cell);
      squares[square].add(cell);
    }
  }
  return true;
};
