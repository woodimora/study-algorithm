function solution(n, clockwise) {
  clockwise = clockwise ? 1 : 0;

  if (n === 1) return [1];

  // even odd
  const type = n % 2 === 0 ? "even" : "odd";

  let answer = [[]];

  for (let i = 0; i < n; i++) {
    answer[i] = [];
  }

  let totalCount = n * n;

  // y, x
  // 반시계
  // 시계
  const direct = [
    [
      [0, -1],
      [1, 0],
      [0, 1],
      [-1, 0],
    ],
    [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ],
  ];

  // y, x, level, value, dir
  let q = [{ y: 0, x: clockwise ? 0 : n - 1, value: 1, dir: 0 }];

  let startNumber = 1;
  let lastNumber = 0;

  while (totalCount > 0) {
    const cur = q.shift();

    // 다음 위치
    let next = { ...cur };
    next.y = cur.y + direct[clockwise][cur.dir][0];
    next.x = cur.x + direct[clockwise][cur.dir][1];
    next.value = cur.value + 1;

    // 방향 바꿀 타이밍
    if (
      next.y < 0 ||
      next.y >= n ||
      next.x < 0 ||
      next.x >= n ||
      answer[next.y][next.x]
    ) {
      next.dir = (cur.dir + 1) % 4;
      next.y = cur.y + direct[clockwise][next.dir][0];
      next.x = cur.x + direct[clockwise][next.dir][1];

      if (totalCount < 4 && type === "even") {
        lastNumber = Math.max(cur.value - 1, lastNumber);
        cur.value = lastNumber;
        next.value = lastNumber;
      } else if (totalCount <= 1 && type === "odd") {
      } else {
        startNumber =
          next.dir === 0 ? Math.max(next.value, startNumber) : startNumber;
        cur.value = next.dir === 0 ? cur.value : startNumber;
        next.value = cur.value + 1;
      }
    }

    // 정상적인 경우
    answer[cur.y][cur.x] = cur.value;
    totalCount -= 1;
    q.push(next);
  }

  return answer;
}

solution(9, false);
