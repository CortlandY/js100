let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);

// false; the let variables b on lines 2 and 5 have the same name, but are different variables.
// the console statement is in scope with the line 2 b variable, so false is logged. 