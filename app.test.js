// app.test.js

const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app.js");

test("One euro should be 1.07 dollars", () => {
  expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

test("One dollar should be 146.3 yen", () => {
  expect(fromDollarToYen(1)).toBeCloseTo(146.3);
});

test("One yen should be 0.00625 pounds", () => {
  expect(fromYenToPound(1)).toBeCloseTo(0.00625);
});
