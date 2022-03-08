function greet(greeting = 'Hello', subject = ' world') {
  console.log(greeting + ', ' + subject + '!');
}


greet();                                // logs: Hello, world!
greet('Salutations');                   // logs: Salutations, world!
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!