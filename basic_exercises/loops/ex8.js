let index = 1;
while (index <= 40) {
  if (index % 2 === 0) {
    index += 1;
    continue;
  }
  console.log(index);
  index += 1;
}