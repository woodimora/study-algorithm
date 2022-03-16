function solution(new_id) {
  let answer = "";

  // 대문자 -> 소문자
  const step1 = new_id.toLowerCase();
  console.log("TCL: solution -> step1", step1);

  // 문자 제거 (소문자, 빼기, 밑줄, 마침표)
  const step2 = step1.replace(/[^\w\-_.]/g, "");
  console.log("TCL: solution -> step2", step2);

  // 연속 마침표 제거
  const step3 = step2.replace(/[.]+/g, ".");
  console.log("TCL: solution -> step3", step3);

  // 처음 끝 마침표 제거
  const step4 = step3.replace(/^\./, "").replace(/\.$/, "");

  console.log("TCL: solution -> step4", step4);

  const step5 = step4 || "a";

  const step6 = /.{1,15}/g.exec(step5)[0];
  console.log("TCL: solution -> step6", step6);

  const step7 = step6.replace(/\.$/g, "");
  console.log("TCL: solution -> step7", step7);

  const lastWord = /.$/g.exec(step7)[0];

  if (step7.length <= 2) {
    for (let i = 0; i < 3; i++) {
      if (step7[i]) {
        answer += step7[i];
      } else {
        answer += lastWord;
      }
    }
  } else answer = step7;

  console.log("TCL: solution -> answer", answer);
  return answer;
}

solution("b");

module.exports = solution;
