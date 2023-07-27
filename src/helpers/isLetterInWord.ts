const isLetterInWord = (letter: string, word: string): boolean =>
  word.toLowerCase().split("").includes(letter.toLowerCase());

export default isLetterInWord;
