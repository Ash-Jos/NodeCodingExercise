const sum = require('./indexjs');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
