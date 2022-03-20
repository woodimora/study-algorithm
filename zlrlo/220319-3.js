// 9:30

function solution(n, s, a, b, fares) {
  let answer = Number.MAX_SAFE_INTEGER;

  let faresBoard = [...new Array(n)].map(() =>
    new Array(n).fill(Number.MAX_SAFE_INTEGER)
  );

  fares.forEach((fare) => {
    faresBoard[fare[0] - 1][fare[1] - 1] = fare[2];
    faresBoard[fare[1] - 1][fare[0] - 1] = fare[2];
  });

  // 다익스트라
  // n개의 전광판 초기 설정
  let minFaresBoard = [...new Array(n)].map((_, startPoint) =>
    [...new Array(n)].map((_, index) => faresBoard[startPoint][index])
  );

  // 경유지 찾는 함수
  const findStopover = (startPoint, via) => {
    let minValue = Number.MAX_SAFE_INTEGER;
    let minIndex = 0;

    minFaresBoard[startPoint].forEach((value, index) => {
      if (via[index] === 0 && value <= minValue) {
        minValue = value;
        minIndex = index;
      }
    });

    return minIndex;
  };

  for (let startPoint = 0; startPoint < n; startPoint++) {
    let via = new Array(n).fill(0);
    via[startPoint] = 1;

    // 전광판 업데이트
    for (let i = 0; i < n; i++) {
      const stopover = findStopover(startPoint, via);
      via[stopover] = 1;

      for (let j = 0; j < n; j++) {
        // 출발지와 도착지가 같은 경우
        if (startPoint === j) {
          minFaresBoard[startPoint][j] = 0;
          continue;
        }

        // 출발지 -> 경유지 -> 도착지
        const path1 = Math.min(
          minFaresBoard[startPoint][stopover] + faresBoard[stopover][j],
          Number.MAX_SAFE_INTEGER
        );

        // 출발지 -> 도착지
        const path2 = minFaresBoard[startPoint][j];

        minFaresBoard[startPoint][j] = Math.min(path1, path2);
      }
    }
  }

  // 동승 경우의 수
  for (let i = 0; i < n; i++) {
    const aPerson = minFaresBoard[i][a - 1];
    const bPerson = minFaresBoard[i][b - 1];
    const share = minFaresBoard[s - 1][i];

    answer = Math.min(answer, aPerson + bPerson + share);
  }

  answer = Math.min(
    answer,
    minFaresBoard[s - 1][a - 1] + minFaresBoard[s - 1][b - 1]
  );

  return answer;
}

solution(6, 4, 6, 2, [
  [4, 1, 10],
  [3, 5, 24],
  [5, 6, 2],
  [3, 1, 41],
  [5, 1, 24],
  [4, 6, 50],
  [2, 4, 66],
  [2, 3, 22],
  [1, 6, 25],
]);

module.exports = solution;
