let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// Expected output:
// happy
// cheerful
// merry
// etc...
function nestIteration(array) {
  for (i = 0; i < array.length; i += 1) {
    if (array[i].length > 1) {
      for (j = 0; j < array[i].length; j += 1){
        console.log(array[i][j]);
      }
    }
  }
}

console.log(nestIteration(vocabulary));
