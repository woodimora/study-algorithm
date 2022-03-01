const solution = require("./220301-1");

test("example1", () => {
  expect(
    solution(
      ["muzi", "frodo", "apeach", "neo"],
      ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
      2
    )
  ).toStrictEqual([2, 1, 1, 0]);
});

test("example2", () => {
  expect(
    solution(
      ["con", "ryan"],
      ["ryan con", "ryan con", "ryan con", "ryan con"],
      3
    )
  ).toStrictEqual([0, 0]);
});

test("가장 작은 숫자 테스트", () => {
  expect(solution(["con", "ryan"], ["ryan con"], 1)).toStrictEqual([0, 1]);
});

test("동일한 유저에 대한 신고 횟수는 1회 처리한다.", () => {
  expect(
    solution(
      ["muzi", "frodo", "apeach", "neo"],
      ["muzi frodo", "muzi frodo", "muzi frodo", "muzi frodo", "muzi frodo"],
      1
    )
  ).toStrictEqual([1, 0, 0, 0]);
});

test("서로 다른 유절르 계속해서 신고할 수 있다.", () => {
  expect(
    solution(
      ["muzi", "frodo", "apeach", "neo"],
      ["muzi frodo", "muzi apeach", "muzi neo", "muzi frodo", "muzi frodo"],
      1
    )
  ).toStrictEqual([3, 0, 0, 0]);
});
