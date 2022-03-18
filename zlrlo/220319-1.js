// 22:19

function solution(genres, plays) {
  let answer = [];

  const genresObj = {};

  genres.forEach((genre) => {
    genresObj[genre] = 0;
  });

  [...genres].forEach((genre, index) => {
    genresObj[genre] += plays[index];
  });

  let sortedGenresList = [];

  for (let genre in genresObj) {
    sortedGenresList.push({ name: genre, play: genresObj[genre] });
  }

  sortedGenresList.sort((a, b) => {
    return b.play - a.play;
  });

  const sortedGenresObj = {};

  genres.forEach((genre, index) => {
    if (sortedGenresObj.hasOwnProperty(genre)) {
      sortedGenresObj[genre].push({ number: index, play: plays[index] });
    } else {
      sortedGenresObj[genre] = [{ number: index, play: plays[index] }];
    }
  });

  for (const genre in sortedGenresObj) {
    sortedGenresObj[genre].sort((a, b) => {
      if (a.play > b.play) {
        return -1;
      }

      if (a.play < b.play) {
        return 1;
      }

      if (a.play === b.play) {
        if (a.number < b.number) return -1;
        if (a.number > b.number) return 1;
      }
    });
  }

  sortedGenresList.forEach((genreItem) => {
    const limit = Math.min(2, sortedGenresObj[genreItem.name].length);

    for (let i = 0; i < limit; i++) {
      answer.push(sortedGenresObj[genreItem.name][i].number);
    }
  });

  return answer;
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);

module.exports = solution;
