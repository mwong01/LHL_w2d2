const stdin = process.stdin;
stdin.setRawMode("True");
stdin.setEncoding("utf8");

//TODO: Refactor / Comment for stretch
stdin.on('data', (key) => {
  let timeArr = "123456789".split("");
  if (key === '\u0062') {
    console.log("PRESSED B");
    stdin.on('data', (key) => {
      let time = Number(key);
      if (time > 0 && time < 10) {
        console.log(`Setting time for ${time} seconds`);

        setTimeout(() => {
          process.stdout.write('\x07');
        }, time * 1000);
      }
    });
  };

  //End program.
  if (key === '\u0003') {
    console.log(`Thanks for using me, ciao!`);
    process.exit();
  }
});