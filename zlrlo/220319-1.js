// 22:19

function solution(genres, plays) {
  let answer = [];

  const genresObj = {};

  [...genres].forEach((genre, index) => {
    genresObj[genre] = genresObj[genre]
      ? genresObj[genre] + plays[index]
      : plays[index];
  });

  let genresCountObj = {};

  answer = genres
    .map((genre, index) => ({ name: genre, play: plays[index], number: index }))
    .sort((a, b) => {
      // 장르 확인
      if (a.name !== b.name) {
        // genresObj[a.name] > genresObj[b.name] = -1
        return genresObj[b.name] - genresObj[a.name];
      }

      if (a.play === b.play) {
        // a.number < b.number = -1
        return a.number - b.number;
      }

      // a.play >  b.play = -1
      return b.play - a.play;
    })
    .filter(({ name }) => {
      if (genresCountObj[name] >= 2) return false;

      genresCountObj[name] = genresCountObj[name]
        ? genresCountObj[name] + 1
        : 1;

      return true;
    })
    .map(({ number }) => {
      return number;
    });

  return answer;
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);

module.exports = solution;
