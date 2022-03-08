if (true) {
  let myValue = 20;
}

console.log(myValue);

// error; true is truthy, so the if statement code block will execute.
// however, let variables are block scoped, and the console statement is outside of the if block
