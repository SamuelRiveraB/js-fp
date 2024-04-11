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

// Idempotence: always the same returns
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

// Immutability: not changing the state, making copies instead

const obj = { name: "Andrei" };
function clone(oj) {
  return { ...obj };
}

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = "Nana";
  return obj2;
}

const updatedObj = updateName(obj);
console.log(obj, updatedObj);

// HOFs
const hof = (fn) => fn(5);
hof(function a(x) {
  return x;
});

// Closures
const closure = function () {
  let count = 0;
  return function increment() {
    count++; // This is impure as it is modifying the closed over variable
    return count;
  };
};

const incrementFn = closure();
console.log(incrementFn());
console.log(incrementFn());

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const curriedMultiplyBy5 = curriedMultiply(5);

console.log(curriedMultiplyBy5(4));

// Partial application
const multiply2 = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply2.bind(null, 5);
console.log(partialMultiplyBy5(4, 10));

// Compose and Pipe

const compose = (f, g) => (data) => f(g(data));
const pipe = (f, g) => (data) => g(f(data));
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

console.log(multiplyBy3AndAbsolute(-50));
