function solution(id_list, report, k) {
  let answer = [];

  const reportSet = new Set();

  report.forEach((item) => {
    reportSet.add(item);
  });

  const reportCountMap = new Map();

  for (const value of reportSet) {
    const [from, to] = value.split(" ");

    if (reportCountMap.has(to)) {
      const prevData = reportCountMap.get(to);
      reportCountMap.set(to, [...prevData, from]);
    } else {
      reportCountMap.set(to, [from]);
    }
  }

  const mailCountMap = new Map();
  id_list.forEach((item) => {
    mailCountMap.set(item, 0);
  });

  for (const [_, value] of reportCountMap) {
    if (value.length >= k) {
      value.forEach((person) => {
        const nextCount = mailCountMap.get(person) + 1;
        mailCountMap.set(person, nextCount);
      });
    }
  }

  for (const [_, value] of mailCountMap) {
    answer.push(value);
  }

  return answer;
}

module.exports = solution;
