/**
 * 
 * function name: markWordleGuess
 * input: guess(string) and hiddenTarget(string)
 * return something of the type below
 * interface MarkedGuess {
    inCorrectLocation: string[],
    inWord: string[],
    notInWord: string[]
}
 * 
 * example 1: hiddenTarget is 'train'
 * a guess of 'ramps' should return
 * 
 * example 2: hiddenTarget is 'party'
 * a guess of 'apple': what should happen
 * 1. a is not in the correct location but is in word
 * 2. the first p is not in the correct location but is in the word
 * 3. 
 * 
 * {
 *  inCorrectLocation: [],
    inWord:['r', 'a'],
    notInWord: ['m', 'p', 's']
 * }
 * 
 * pseudocode:
 * 
 * create a new variable called occurrencesInTarget = {actual occurences} ***helper function
 * create a new variable called correctOccurrencesInGuess = {}
 * create new variable called markedGuess = {}
 * for each letter in guess
 *  if correctOccurrencesInGuess.letter < occurrencesInTarget.letter AND letter is in the correct location*** helper function
 *      then add letter to markedGuess.inCorrectLocation
 *      and add letter occurrence to correctOccurrencesInGuess
 *  else correctOccurrencesInGuess.letter < occurrencesInTarget.letter AND if letter is in the word*** helper function
 *      then add letter to markedGuess.inWord
 *      and add letter occurrence to correctOccurrencesInGuess
 *  else
 *      add letter to markedGuess.notInWord
 *  
 */

interface MarkedGuess {
    inCorrectLocation: string[],
    inWord: string[],
    notInWord: string[]
}