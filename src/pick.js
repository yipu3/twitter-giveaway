export function pick(candidates) {
  return candidates;
}

// You can define your own pick logic
/*
export function pick(candidates) {
  shuffle(Array.from(candidates)).slice(0, 200);
}
*/

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
    array[randomIndex], array[currentIndex]];
  }

  return array;
}
