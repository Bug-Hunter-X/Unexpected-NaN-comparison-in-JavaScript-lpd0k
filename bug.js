function foo(a, b) {
  if (a === b) {
    return true; // This will cause problems with NaN
  } else {
    return false;
  }
}

console.log(foo(NaN, NaN)); // false, should be true