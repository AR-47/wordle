import occurrencesInterface from "../interfaces/occurrencesInterface";

function countOccurrences(str: string): occurrencesInterface {
  const occurrences: occurrencesInterface = {};
  for (const char of str) {
    if (occurrences[char.toLowerCase()] !== undefined) {
      occurrences[char.toLowerCase()] += 1;
    } else {
      occurrences[char.toLowerCase()] = 1;
    }
  }
  return occurrences;
}

export default countOccurrences;
