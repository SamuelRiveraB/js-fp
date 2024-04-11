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
function notGood(num) {
  return Math.random(num);
}

notGood(5);

// Imperative: what to do and how to do it

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Declarative: what to do and what should happen

[1, 2, 3].forEach((item) => console.log(item));
// JQuery is imperative, React is declarative
