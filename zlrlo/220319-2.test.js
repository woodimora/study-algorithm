const solution = require("./220319-2");

test("example1", () => {
  expect(
    solution([
      "DIA",
      "RUBY",
      "RUBY",
      "DIA",
      "DIA",
      "EMERALD",
      "SAPPHIRE",
      "DIA",
    ])
  ).toStrictEqual([3, 7]);
});

test("example2", () => {
  expect(solution(["AA", "AB", "AC", "AA", "AC"])).toStrictEqual([1, 3]);
});

test("example3", () => {
  expect(solution(["XYZ", "XYZ", "XYZ"])).toStrictEqual([1, 1]);
});

test("example4", () => {
  expect(solution(["ZZZ", "YYY", "NNNN", "YYY", "BBB"])).toStrictEqual([1, 5]);
});

test("example5", () => {
  expect(solution(["ZZZ"])).toStrictEqual([1, 1]);
});

test("example6", () => {
  expect(
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
    ])
  ).toStrictEqual([11, 14]);
});
