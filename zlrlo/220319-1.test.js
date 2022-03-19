const solution = require("./220319-1");

test("example1", () => {
  expect(
    solution(
      ["classic", "pop", "classic", "classic", "pop"],
      [500, 600, 150, 800, 2500]
    )
  ).toStrictEqual([4, 1, 3, 0]);
});

test("example2", () => {
  expect(
    solution(
      ["classic", "pop", "classic", "classic", "pop"],
      [500, 600, 500, 800, 2500]
    )
  ).toStrictEqual([4, 1, 3, 0]);
});

test("example3", () => {
  expect(solution(["classic"], [500])).toStrictEqual([0]);
});
