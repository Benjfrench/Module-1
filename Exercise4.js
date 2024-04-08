function sum(a, b) {
  return a + b;
}

function minus(x, y) {
  return x - y;
}

function times(c, d) {
  return c * d;
}

function divide(e, f) {
  return e / f;
}

// Unit tests for the sum function
if (sum(2, 4) !== 6) throw Error("test failed at test 1");
if (sum(-5, 10) !== 5) throw Error("test failed at test 2");
if (sum(-8, -3) !== -11) throw Error("test failed at test 3");

// Unit tests for the minus function
if (minus(8, 3) !== 5) throw Error("test failed at test 1");
if (minus(10, -5) !== 15) throw Error("test failed at test 2");
if (minus(-8, -3) !== -5) throw Error("test failed at test 3");

// Unit tests for the times function
if (times(2, 3) !== 6) throw Error("test failed at test 1");
if (times(-5, 10) !== -50) throw Error("test failed at test 2");
if (times(-8, -3) !== 24) throw Error("test failed at test 3");

// Unit tests for the divide function
if (divide(10, 2) !== 5) throw Error("test failed at test 1");
if (divide(-10, 2) !== -5) throw Error("test failed at test 2");
if (divide(-12, -3) !== 4) throw Error("test failed at test 3");
if (divide(10, 0) !== Infinity) throw Error("test failed at test 4");

if (sum(2, 4) != 6) throw Error("test failed at test 1");

console.log("all tests passed");
