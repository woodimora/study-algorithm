// 17:22

function solution(board) {
  let answer = Number.MAX_SAFE_INTEGER;

  const N = board[0].length;

  const direct = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let via = board.map((row) => [...row]);

  let costBoard = [[], [], [], []].map(() => {
    return board.map((row) => {
      return [...row].fill(Number.MAX_SAFE_INTEGER);
    });
  });

  const run = (curPo, level, curCost, curDir) => {
    costBoard[curDir][curPo.y][curPo.x] = Math.min(
      costBoard[curDir][curPo.y][curPo.x],
      curCost
    );

    if (costBoard[curDir][curPo.y][curPo.x] < curCost) return;

    if (curPo.y === N - 1 && curPo.x === N - 1) {
      return;
    }

    for (let i = 0; i < 4; i++) {
      const dy = curPo.y + direct[i][0];
      const dx = curPo.x + direct[i][1];

      if (dy < 0 || dy >= N || dx < 0 || dx >= N) {
        continue;
      }

      if (board[dy][dx]) continue;

      if (via[dy][dx]) continue;

      via[dy][dx] = 1;

      const cornerConst = level > 0 && curDir !== i ? 500 : 0;

      run({ y: dy, x: dx }, level + 1, curCost + cornerConst + 100, i);

      via[dy][dx] = 0;
    }
  };

  via[0][0] = 1;
  run({ y: 0, x: 0 }, 0, 0, 0);

  answer = Math.min(
    costBoard[0][N - 1][N - 1],
    costBoard[1][N - 1][N - 1],
    costBoard[2][N - 1][N - 1],
    costBoard[3][N - 1][N - 1]
  );

  return answer;
}

solution([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]);

module.exports = solution;
