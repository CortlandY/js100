let scores = [96, 47, 113, 89, 100, 102];
function countElements(array) {
  let count = 0;
  for (i = 0; i < array.length; i += 1){
    if (array[i] >= 100) {
      count += 1;
    }
  }
  return count;
}
console.log(countElements(scores));