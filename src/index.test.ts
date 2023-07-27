import markWordleGuess from "./index";

test.skip("markWordleGuess works for guess of 'LULLS' for target 'LEVEL'", () => {
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

test.skip("markWordleGuess works for guess of 'APPLE' for target 'PARTY'", () => {
  expect(markWordleGuess("lulls", "level")).toEqual({
    inCorrectLocation: [],
    inWord: [
      ["a", 0],
      ["p", 1],
    ],
    notInWord: [["r", 2], ["t", 3], ["y"], 4],
  });
});
