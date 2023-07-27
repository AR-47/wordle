import countOccurrences from "./countOccurrences";

test("countOccurrences passes case 'adil'", () => {
  expect(countOccurrences("Adil")).toEqual({
    A: 1,
    D: 1,
    I: 1,
    L: 1,
  });
});

test("countOccurrences passes case 'rahman'", () => {
  expect(countOccurrences("Rahman")).toEqual({
    R: 1,
    A: 2,
    H: 1,
    M: 1,
    N: 1,
  });
});
