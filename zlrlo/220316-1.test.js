const solution = require("./220316-1");

test("example1", () => {
  expect(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")).toStrictEqual(
    "LRLLLRLLRRL"
  );
});

test("example2", () => {
  expect(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")).toStrictEqual(
    "LRLLRRLLLRR"
  );
});

test("example3", () => {
  expect(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")).toStrictEqual(
    "LLRLLRLLRL"
  );
});

test("example4", () => {
  expect(solution([0], "right")).toStrictEqual("R");
});

test("example5", () => {
  expect(solution([4], "right")).toStrictEqual("L");
});
