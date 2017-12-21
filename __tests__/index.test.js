const isJSON = require("..");

test("is JSON", () => {
  expect(isJSON('{"foo":"bar"}')).toBe(true);
  expect(isJSON("1")).toBe(true);
  expect(isJSON("null")).toBe(true);
  expect(isJSON("[1,2,3]")).toBe(true);
  expect(isJSON(1)).toBe(true);
  expect(isJSON(null)).toBe(true);
  expect(isJSON("true")).toBe(true);
  expect(isJSON(true)).toBe(true);

  expect(isJSON("not-json")).toBe(false);
  expect(isJSON([1, 2, 3])).toBe(false);
  expect(isJSON({ foo: "bar" })).toBe(false);
  expect(isJSON('{"foo":"bar}')).toBe(false);
});
