let charArr = [' ', "\r|    ", "\r/    ", "\r-    ", "\r\\    ", "\r\|    ", "hello from spinner2.js..."];

for (let i = 1; i <= 6; i++) {
  let time = 100 + (i * 200);
  setTimeout(() => {
    process.stdout.write(charArr[i]);
  }, time);
}