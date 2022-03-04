// code block 1
let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

// code block 2
let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);

/* The difference between these blocks of code is that the second block will
run one loop regardless of the counter value. The first block, however, will
not run at all since the initial condition is not met. */