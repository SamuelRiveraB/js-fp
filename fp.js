// Pure functions
// No side effects
// Input --> Output

function a() {
  console.log("Hi");
} // This has side effects

function b(num1, num2) {
  return num1 + num2;
}

a(3, 4); // This always return the same, referencial transparency is that we could change this to 7

// Functional programming aims to minimize side effects

// Idempotence always the same returns
function notGood() {
  return Math.random(num);
}

notGood(5);
