let arr = process.argv;

let comm1 = arr[2];

let comArr = arr.splice(2);
comArr.sort(function(a, b) {
  return a - b
});


for (let num of comArr) {
  let number = Number(num);
  if (number >= 0 && number !== NaN) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, number * 1000)
  }
};