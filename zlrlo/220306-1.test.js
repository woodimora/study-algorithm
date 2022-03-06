const solution = require("./220306-1");

test("example1", () => {
  expect(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])).toStrictEqual(
    [3, 5]
  );
});

test("example2", () => {
  expect(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])).toStrictEqual([
    1, 6,
  ]);
});

test("example3", () => {
  expect(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])).toStrictEqual([
    1, 1,
  ]);
});

test("example4", () => {
  expect(solution([0, 0, 0, 20, 3, 9], [20, 9, 3, 45, 4, 35])).toStrictEqual([
    1, 4,
  ]);
});

test("example5", () => {
  expect(solution([45, 44, 43, 42, 41, 40], [6, 5, 4, 3, 2, 1])).toStrictEqual([
    6, 6,
  ]);
});

test("example6", () => {
  expect(solution([6, 5, 4, 3, 2, 1], [45, 44, 43, 42, 41, 40])).toStrictEqual([
    6, 6,
  ]);
});
