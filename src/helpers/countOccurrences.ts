import occurrencesInterface from "../interfaces/occurrencesInterface";

function countOccurrences(str: string): occurrencesInterface {
    const occurrences: occurrencesInterface = {};
    for (const char of str) {
      if (occurrences[char.toUpperCase()] !== undefined) {
        occurrences[char.toUpperCase()] += 1;
      } else {
        occurrences[char.toUpperCase()] = 1;
      }
    }
    return occurrences;
}

export default countOccurrences;
  