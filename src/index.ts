/**
 * 
 * function name: markWordleGuess
 * input: guess(string) and hiddenTarget(string)
 * return a marking of the guess of the type below
 * interface MarkedGuess {
    inCorrectLocation: (string | number)[][],
    inWord: (string | number)[][],
    notInWord: (string | number)[][]
}
 * 
 * example 1: hiddenTarget is 'train'
 * a guess of 'ramps' should return
 * {
 *  inCorrectLocation: [],
    inWord:[ ['r', 0], ['a', 1] ],
    notInWord: [ ['m', 2], ['p', 3], ['s', 4] ]
 * }
 * 
 * example 2: hiddenTarget is 'party'
 * a guess of 'apple' should return
 * {
 *  inCorrectLocation: [],
    inWord:[ ['a', 0], ['p', 1] ],
    notInWord: [ ['r', 2], ['t', 3], ['y'], 4 ]
 * }
 * 
 * pseudocode:
 * 
 * create a new variable called occurrencesInTarget and set it to {actual occurences} ***HELPER FUNCTION
 * create a new variable called correctOccurrencesInGuess = {}
 * create new variable called markedGuess = {}
 * for each letter in guess
 *  if correctOccurrencesInGuess.letter (need to deal with undefined values) < occurrencesInTarget.letter AND letter is in the correct location*** HELPER FUNCTION
 *      then add letter to markedGuess.inCorrectLocation
 *      and add letter occurrence to correctOccurrencesInGuess
 *  else if correctOccurrencesInGuess.letter (need to deal with undefined values) < occurrencesInTarget.letter AND if letter is in the word*** HELPER FUNCTION
 *      then add letter to markedGuess.inWord
 *      and add letter occurrence to correctOccurrencesInGuess
 *  else
 *      add letter to markedGuess.notInWord
 *  
 */

import { Console } from "console";
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

  const guessLettersArray = guess.split("").entries();

  console.log(
    "BUG TESTING: ",
    correctOccurrencesInGuess["l"] < occurrencesInTarget["l"],
    isLetterInSamePosition(0, "l", hiddenTarget)
  );

  for (const [index, letter] of guessLettersArray) {
    console.log(
      `Have we found all occurrences of ${letter}: ${
        correctOccurrencesInGuess.letter < occurrencesInTarget.letter
      }`
    );
    if (
      isLetterInSamePosition(index, letter, hiddenTarget) &&
      correctOccurrencesInGuess.letter < occurrencesInTarget.letter
    ) {
      markedGuess.inCorrectLocation.push([letter, index]);
      correctOccurrencesInGuess.letter += 1;
    } else if (
      isLetterInWord(letter, hiddenTarget) &&
      correctOccurrencesInGuess.letter < occurrencesInTarget.letter
    ) {
      console.log(
        `correctOccurrencesInGuess of letter: ${correctOccurrencesInGuess.letter}`
      );
      markedGuess.inWord.push([letter, index]);
      correctOccurrencesInGuess.letter += 1;
    } else {
      markedGuess.notInWord.push([letter, index]);
    }
  }

  return markedGuess;
}

export default markWordleGuess;

console.log(markWordleGuess("lulls", "level"));
