function solution(numbers, hand) {
  let answer = "";

  const keypad = [
    { y: 3, x: 1 },
    { y: 0, x: 0 },
    { y: 0, x: 1 },
    { y: 0, x: 2 },
    { y: 1, x: 0 },
    { y: 1, x: 1 },
    { y: 1, x: 2 },
    { y: 2, x: 0 },
    { y: 2, x: 1 },
    { y: 2, x: 2 },
  ];

  const currentPosition = {
    L: { y: 3, x: 0 },
    R: { y: 3, x: 2 },
  };

  const getDistance = (departPosition, arrivePosition) => {
    return (
      Math.abs(departPosition.y - arrivePosition.y) +
      Math.abs(departPosition.x - arrivePosition.x)
    );
  };

  const moveHand = (targetNumber, handDir) => {
    answer += handDir;
    currentPosition[handDir] = { ...keypad[targetNumber] };
  };

  numbers.forEach((number) => {
    if (number === 1 || number === 4 || number === 7) {
      moveHand(number, "L");
    } else if (number === 3 || number === 6 || number === 9) {
      moveHand(number, "R");
    } else {
      const leftHandDistance = getDistance(currentPosition.L, keypad[number]);

      const rightHandDistance = getDistance(currentPosition.R, keypad[number]);

      if (leftHandDistance < rightHandDistance) {
        moveHand(number, "L");
      } else if (leftHandDistance > rightHandDistance) {
        moveHand(number, "R");
      } else {
        moveHand(number, hand[0] === "l" ? "L" : "R");
      }
    }
  });

  console.log("TCL: solution -> answer", answer);
  return answer;
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");

module.exports = solution;
