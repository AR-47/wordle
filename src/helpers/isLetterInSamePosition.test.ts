import isLetterInSamePosition from "./isLetterInSamePosition";

test("isLetterInSamePosition correctly returns true", () => {
  expect(isLetterInSamePosition(0, "l", "level")).toEqual(true);
});

test("isLetterInSamePosition correctly returns false", () => {
  expect(isLetterInSamePosition(0, "a", "party")).toEqual(false);
});
