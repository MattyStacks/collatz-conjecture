//This is the orginal one I got working that 

// Javascript Algorithm
let nb = 1;
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
  if (n == 1){
    numList.push(n)
    console.log("if statement hit")
  }

  while (n != 1) {
      numList.push(n)
      // console.log(n)
      n = step(n);
      nb++;
  }
  console.log(numList)
  return [nb, numList];
}

// collatz(10090077777777723234234234324234234223423423432432);



for (let index = 1; index <= endNum; index++) {

  collatz(parseInt(index));

  if (nb >= topNumber.iterations) {
    topNumber.startingNum = index;
    topNumber.iterations = nb;
    topNumber.numList = numList;
  }
  console.log(`Starting Number: ${index} Iterations: ${nb}`);
  numList=[];
}

console.log(`
            
Top Number is ${topNumber.startingNum} Top Iterations: ${topNumber.iterations} Number List: [${topNumber.numList}]`)
