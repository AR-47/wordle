import markWordleGuess from "./index";

test("markWordleGuess works for guess of 'LULLS' for target 'LEVEL'", () => {
  expect(markWordleGuess("lulls", "level")).toEqual({
    inCorrectLocation: [["l", 0]],
    inWord: [["l", 2]],
    notInWord: [
      ["u", 1],
      ["l", 3],
      ["s", 4],
    ],
  });
});

test("markWordleGuess works for guess of 'STEEL' for target 'LEVEL'", () => {
  expect(markWordleGuess("steel", "level")).toEqual({
    inCorrectLocation: [
      ["e", 3],
      ["l", 4],
    ],
    inWord: [["e", 2]],
    notInWord: [
      ["s", 0],
      ["t", 1],
    ],
  });
});

test("markWordleGuess works for guess of 'APPLE' for target 'PARTY'", () => {
  expect(markWordleGuess("apple", "party")).toEqual({
    inCorrectLocation: [],
    inWord: [
      ["a", 0],
      ["p", 1],
    ],
    notInWord: [
      ["p", 2],
      ["l", 3],
      ["e", 4],
    ],
  });
});
