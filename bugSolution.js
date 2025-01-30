function foo(a, b) {
  // Use Object.is to correctly compare NaN
  return Object.is(a, b);
}

console.log(foo(NaN, NaN)); // true
console.log(foo(1,1)); //true
console.log(foo(1,2)); //false