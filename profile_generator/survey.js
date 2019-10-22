const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let allAnswers = [];

rl.question('What is your name? ', (answer) => {
  // TODO: Log the answer in a database
  allAnswers.push(`My name is: ${answer}`);
  
  rl.question("What's an activity you like doing? ", (answer) => {
    allAnswers.push(`My favourite activity is ${answer}`);

    rl.question("What do you listen to while doing that? ", (answer) => {
      allAnswers.push(`I listen to ${answer}`);

      rl.question("Which meal is your favourite? ", (answer) => {
        allAnswers.push(`My favourite meal is ${answer}`);

        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          allAnswers.push(`My favourite thing to eat is ${answer}`);

          rl.question("Which sport is your absolute favourite? ", (answer) => {
            allAnswers.push(`I like to play ${answer}`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              allAnswers.push(`My superpower is ${answer}`);
              console.log(allAnswers.join(". \n"));
              rl.close();
            })
          })
        })
      })
    })
  })
});

// console.log(allAnswers);