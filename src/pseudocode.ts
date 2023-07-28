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
