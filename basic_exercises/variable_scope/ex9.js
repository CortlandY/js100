const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);

// Type Error; const variables cannot be reassigned 
// passing a to myFunction is irrelevant - myFunction does not declare any parameters,
// so it is simply ignored.