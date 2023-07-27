interface MarkedGuess {
  inCorrectLocation: (string | number)[][];
  inWord: (string | number)[][];
  notInWord: (string | number)[][];
}

export default MarkedGuess;
