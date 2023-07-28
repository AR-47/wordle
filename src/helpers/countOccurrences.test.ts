import countOccurrences from "./countOccurrences";

test("countOccurrences passes case 'adil'", () => {
  expect(countOccurrences("Adil")).toEqual({
    a: 1,
    d: 1,
    i: 1,
    l: 1,
  });
});

test("countOccurrences passes case 'rahman'", () => {
  expect(countOccurrences("Rahman")).toEqual({
    r: 1,
    a: 2,
    h: 1,
    m: 1,
    n: 1,
  });
});
