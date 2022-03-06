function solution(lottos, win_nums) {
  const sortedLottos = lottos.sort((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });

  const sortedWinNums = win_nums.sort((a, b) => {
    return b - a;
  });

  let lottosPointer = 0;
  let winNumsPointer = 0;

  let sameCount = 0;
  let zeroCount = 0;

  while (winNumsPointer < 6 && lottosPointer < 6) {
    if (sortedLottos[lottosPointer] === sortedWinNums[winNumsPointer]) {
      sameCount += 1;

      lottosPointer += 1;
      winNumsPointer += 1;
    } else if (sortedLottos[lottosPointer] < sortedWinNums[winNumsPointer]) {
      winNumsPointer += 1;
    } else {
      lottosPointer += 1;
    }
  }

  lottos.forEach((num) => {
    if (num === 0) zeroCount += 1;
  });

  const rank = [6, 6, 5, 4, 3, 2, 1];

  const best = rank[sameCount + zeroCount];
  const worst = rank[sameCount];

  return [best, worst];
}

module.exports = solution;
