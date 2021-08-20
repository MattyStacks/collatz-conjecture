// Javascript Algorithm
let nb = 0;
let numList=[];
const args = process.argv.slice(2)
let endNum = args[0] || 20
let topNumber = {
  Number: 0,
  iterations: 0,
  numList: []
}

let allNumbers = []

const collatz = {
  step: (n) => {
    if (n % 2 === 0){
      return n / 2
    } else {
      return 3*n+1
    }
  },

  topNumber:(req, res) => {
    res.json(topNumber)
  },
  allNumbers:(req, res) => {
    res.json(allNumbers)
  }
}

// function step(n) {
//   if (n%2 == 0) return n/2;
//   return 3*n+1;
// }

function collatzfunc(n) {
  nb = 1;
  while (n != 1) {
      numList.push(n)
      // console.log(n)
      n = collatz.step(n);
      nb++;
  }
  return [nb, numList];
}

// collatz(10090077777777723234234234324234234223423423432432);



for (let index = 0; index <= endNum; index++) {
  collatzfunc(index);
  // allNumbers.push({"Number": index, "Iterations": nb, "numList": numList})
  if (nb > topNumber.iterations) {
    topNumber.Number = index;
    // topNumber.iterations = nb;
    topNumber.iterations = numList.length;
    topNumber.numList = numList;
  }
  console.log(`Starting Number: ${index} Iterations: ${nb}`);
  numList=[];
}

console.log(`
            
  Top Number is ${topNumber.Number} Top Iterations: ${topNumber.iterations} Number List: ${topNumber.numList}
`)
// console.log(`All Numbers: ${(JSON.stringify(allNumbers))}`)

module.exports = collatz;