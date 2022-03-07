let randomNumber = Math.round(Math.random());

// if statement using truthy/falsy 
/* code from ex2 to be re-written
if (randomNumber) {
  console.log('Yes!');
}
else {
  console.log('No.');
}
*/

console.log(randomNumber ? 'Yes!' : 'No.');