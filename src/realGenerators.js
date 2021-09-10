function singleDieRoll(diceSides) {
    return Math.floor(Math.random() * diceSides) + 1;
}

function diceGenerator(diceCount, diceSides) {
  diceCount = Number(diceCount)

  if (diceCount === 1) {
    return singleDieRoll(diceSides);
  }

  return Array(diceCount).fill(0)
    .map(() => singleDieRoll(diceSides))
}

function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {
    diceGenerator,
    randomNumberGenerator,
};
