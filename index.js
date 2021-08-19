// Javascript Algorithm
let nb = 0;
let numList=[];
const args = process.argv.slice(2)
let endNum = args[0] || 2
let topNumber = {
  startingNum: 1,
  iterations: 1,
  numList: []
}

function step(n) {
  if (n%2 == 0) return n/2;
  return 3*n+1;
}

function collatz(n) {
  nb = 1;
  while (n != 1) {
      numList.push(n)
      // console.log(n)
      n = step(n);
      nb++;
  }
  return [nb, numList];
}

// collatz(10090077777777723234234234324234234223423423432432);



for (let index = 1; index <= endNum; index++) {

  collatz(index);

  if (nb > topNumber.iterations) {
    topNumber.startingNum = index;
    topNumber.iterations = nb;
    topNumber.numList = numList;
  }
  console.log(`Starting Number: ${index} Iterations: ${nb}`);
  numList=[];
}

console.log(`
            
Top Number is ${topNumber.startingNum} Top Iterations: ${topNumber.iterations} Number List ${topNumber.numList}`)