// 10:42

function solution(gems) {
  let answer = [];

  const gemsMap = new Map(
    gems.map((gem) => {
      return [gem, 0];
    })
  );

  const gemsNum = gemsMap.size;

  const gemsSet = new Set();

  const record = [];

  let startPoint = 0;
  gems.forEach((gem, index) => {
    gemsSet.add(gem);
    gemsMap.set(gem, gemsMap.get(gem) + 1);

    if (gemsSet.size === gemsNum) {
      // 맨 앞 머리기
      let i;
      for (i = 0; i < index; i++) {
        const gemName = gems[startPoint + i];
        const gemNum = gemsMap.get(gemName);
        if (gemsMap.get(gemName) - 1 > 0) {
          gemsMap.set(gemName, gemNum - 1);
        } else {
          break;
        }
      }

      startPoint = startPoint + i;

      // 기록
      record.push({ startPoint, index });
    }
  });

  record.sort((a, b) => {
    if (a.index - a.startPoint < b.index - b.startPoint) return -1;
    if (a.index - a.startPoint > b.index - b.startPoint) return 1;
    if (a.startPoint < b.startPoint) return -1;
    if (a.startPoint > b.startPoint) return 1;
  });

  answer = [record[0].startPoint + 1, record[0].index + 1];
  console.log("TCL: solution -> answer", answer);

  return answer;
}

solution([
  "A",
  "A",
  "A",
  "B",
  "B",
  "C",
  "C",
  "C",
  "D",
  "D",
  "D",
  "A",
  "B",
  "C",
  "D",
]);

module.exports = solution;
