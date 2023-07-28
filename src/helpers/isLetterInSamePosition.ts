const isLetterInSamePosition = (
  index: number,
  letter: string,
  targetWord: string
): boolean => letter.toLowerCase() === targetWord[index].toLowerCase();

export default isLetterInSamePosition;
