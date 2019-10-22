//Andy Edit

setTimeout(() => {
  console.log("4311o th3r3 w0r1d");
}, 3000);

setTimeout(() => {
  console.log("4311o");
}, 1000);

setTimeout(() => {
  console.log("th3r3");
}, 2000);

setTimeout(() => {
  console.log("w0r1d");
}, 3000);


let str = "4311o th3r3 w0r1d";
let arr = str.split(" ");

for (let word of arr) {
}
setTimeout(() => {
  console.log(word + "\n");
}, 1000);