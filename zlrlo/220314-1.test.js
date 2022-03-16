const solution = require("./220314-1");

test("example1", () => {
  expect(solution("...!@BaT#*..y.abcdefghijklm")).toStrictEqual(
    "bat.y.abcdefghi"
  );
});

test("example2", () => {
  expect(solution("z-+.^.")).toStrictEqual("z--");
});

test("example3", () => {
  expect(solution("=.=")).toStrictEqual("aaa");
});

test("example4", () => {
  expect(solution("123_.def")).toStrictEqual("123_.def");
});

test("example5", () => {
  expect(solution("abcdefghijklmn.p")).toStrictEqual("abcdefghijklmn");
});

test("example6", () => {
  expect(solution("b")).toStrictEqual("bbb");
});

test("example7", () => {
  expect(solution(".")).toStrictEqual("aaa");
});

test("example8", () => {
  expect(solution("-")).toStrictEqual("---");
});

test("example9", () => {
  expect(solution("0")).toStrictEqual("000");
});

test("example10", () => {
  expect(solution("0000.")).toStrictEqual("0000");
});

test("example11", () => {
  expect(solution("a...a")).toStrictEqual("a.a");
});

test("example12", () => {
  expect(solution("-.~!@#$%&*()=+[{]}:?,<>/.-")).toStrictEqual("-.-");
});
