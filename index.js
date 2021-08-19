// Javascript Algorithm
let nb = 0;

function step(n) {
  if (n%2 == 0) return n/2;
  return 3*n+1;
}

function collatz(n) {
  nb = 1;
  while (n != 1) {
      // console.log(n)
      n = step(n);
      nb++;
  }
  return nb;
}

// collatz(10090077777777723234234234324234234223423423432432);

let endNum = 10;

for (let index = 1; index < endNum; index++) {
  collatz(index);
  console.log(`Starting Number: ${index} Iterations: ${nb}`);
}