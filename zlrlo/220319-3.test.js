const solution = require("./220319-3");

test("example1", () => {
  expect(
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
    ])
  ).toStrictEqual(82);
});

test("example2", () => {
  expect(
    solution(7, 3, 4, 1, [
      [5, 7, 9],
      [4, 6, 4],
      [3, 6, 1],
      [3, 2, 3],
      [2, 1, 6],
    ])
  ).toStrictEqual(14);
});

test("example3", () => {
  expect(
    solution(6, 4, 5, 6, [
      [2, 6, 6],
      [6, 3, 7],
      [4, 6, 7],
      [6, 5, 11],
      [2, 5, 12],
      [5, 3, 20],
      [2, 4, 8],
      [4, 3, 9],
    ])
  ).toStrictEqual(18);
});
