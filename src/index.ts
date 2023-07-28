import countOccurrences from "./helpers/countOccurrences";
import isLetterInSamePosition from "./helpers/isLetterInSamePosition";
import isLetterInWord from "./helpers/isLetterInWord";
import MarkedGuess from "./interfaces/markedGuess";
import occurrencesInterface from "./interfaces/occurrencesInterface";

function markWordleGuess(guess: string, hiddenTarget: string): MarkedGuess {
  const occurrencesInTarget = countOccurrences(hiddenTarget);
  const correctOccurrencesInGuess: occurrencesInterface = {};

  const lowerCaseGuess = guess.toLowerCase();
  const lowerCaseHiddenTarget = hiddenTarget.toLowerCase();

  lowerCaseGuess.split("").forEach((letter) => {
    correctOccurrencesInGuess[letter] = 0;
  });

  const markedGuess: MarkedGuess = {
    inCorrectLocation: [],
    inWord: [],
    notInWord: [],
  };

  const guessLettersArray = lowerCaseGuess.split("").entries();

  for (const [index, letter] of guessLettersArray) {
    if (
      isLetterInSamePosition(index, letter, lowerCaseHiddenTarget) &&
      correctOccurrencesInGuess[letter] < occurrencesInTarget[letter]
    ) {
      markedGuess.inCorrectLocation.push([letter, index]);
      correctOccurrencesInGuess[letter] += 1;
    } else if (
      isLetterInWord(letter, lowerCaseHiddenTarget) &&
      correctOccurrencesInGuess[letter] < occurrencesInTarget[letter]
    ) {
      markedGuess.inWord.push([letter, index]);
      correctOccurrencesInGuess[letter] += 1;
    } else {
      markedGuess.notInWord.push([letter, index]);
    }
  }

  return markedGuess;
}

export default markWordleGuess;
