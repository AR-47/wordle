import isLetterInWord from "./isLetterInWord";

test("isLetterInWord returns true for letter 'a' in word 'adil'", () => {
  expect(isLetterInWord("a", "Adil")).toEqual(true);
});

test("isLetterInWord returns false for letter 'q' in word 'adil'", () => {
  expect(isLetterInWord("q", "Adil")).toEqual(false);
});
