const { calculate } = require('../calculator');

test('Addition', () => {
  expect(calculate("1+1")).toBe(2);
});

test('Soustraction', () => {
  expect(calculate("28-9")).toBe(19);
});

test('Multiplication', () => {
  expect(calculate("3*3")).toBe(9);
});

test('Division', () => {
  expect(calculate("12/2")).toBe(6);
});

test('Priorité opérateurs', () => {
  expect(calculate("2+3*4")).toBe(14);
});

test('Parenthèses', () => {
  expect(calculate("(2+3)*4")).toBe(20);
});

test('Expression invalide', () => {
  expect(() => calculate("2+bad")).toThrow();
});
