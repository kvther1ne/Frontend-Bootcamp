function searchSubString(puzzle, word) {
  let width = puzzle[0].length;
  let height = puzzle.length;

  let dirs = [[-1, 0], [0, 1], [1, 0], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]];

  function searchAlg(x, y, k) {
    if (puzzle[x][y] !== word[k]) {
      return false;
    }
    
    if (k === word.length - 1) {
      return true;
    }

    puzzle[x][y] = '.';

    for (let [dx, dy] of dirs) {
      let i = x + dx;
      let j = y + dy; 

      if (i >= 0 && i < height && j >= 0 && j < width) {
        if (searchAlg(i, j, k+1)) {
          return true;
        } else {
          puzzle[x][y] = word[k];
        }
      }
    }
    return false;  
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (searchAlg(i, j, 0)) return true;
    }
  }

  return false;
}

const examplePuzzle = [
  ["b", "l", "g", "o", "l", "d", "s"],
  ["x", "k", "q", "w", "i", "j", "p"],
  ["a", "n", "w", "k", "k", "p", "n"],
  ["h", "e", "e", "e", "k", "i", "l"],
  ["q", "e", "k", "a", "y", "q", "a"],
  ["h", "u", "h", "a", "e", "a", "u"],
  ["k", "q", "j", "c", "c", "m", "r"],
];

// Level 1
console.log(searchSubString(examplePuzzle, "like")); // true
console.log(searchSubString(examplePuzzle, "gold")); // true
console.log(searchSubString(examplePuzzle, "queen")); // true

// Level 2
console.log(searchSubString(examplePuzzle, "cake")); // true
