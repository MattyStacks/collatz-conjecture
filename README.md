# collatz-conjecture
A basic project running through the 3x+1 problem. Gave me some extra work to also learn node, and express. 

I'm well aware that this is essentially an unsolvable problem. However, I thought it would be fun just to play around with it.

## Background Info
Per wikipedia: [https://en.wikipedia.org/wiki/Collatz_conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture)

> The Collatz conjecture is a conjecture in mathematics that concerns sequences defined as follows: start with any positive integer n. Then each term is obtained from the previous term as follows: if the previous term is even, the next term is one half of the previous term. If the previous term is odd, the next term is 3 times the previous term plus 1. The conjecture is that no matter what value of n, the sequence will always reach 1.

## Original Code
This was the orginal codebase I started from.

```javascript
function step(n) {
 if (n%2 == 0) return n/2;
 return 3*n+1;
}
function collatz(n) {
 var nb = 1;
 while (n != 1) {
  n = step(n);
  nb++;
 }
 return nb;
}
```
I decided to take this since right now I'm learning express, and turn it into an express app.

### Modifications
I pushed some modifications then started with the code located here:

[https://github.com/Datapotomus/collatz-conjecture/blob/1d9f48e89ae70e56a112f744dfce9846f71839cb/index.js](https://github.com/Datapotomus/collatz-conjecture/blob/1d9f48e89ae70e56a112f744dfce9846f71839cb/index.js)

This version would allow you to feed in a number, and then have it run through the iterations. It also kept track of the top number that had the highest iterations.

You could invoke it like the following.

```bash
node ./index.js 100
```

It would then produce something like the following.
```
Starting Number: 99 Iterations: 26
Starting Number: 100 Iterations: 26

            
Top Number is 97 Top Iterations: 119 Number List 97,292,146,73,220,110,55,166,83,250,125,376,188,94,47,142,71,214,107,322,161,484,242,121,364,182,91,274,137,412,206,103,310,155,466,233,700,350,175,526,263,790,395,1186,593,1780,890,445,1336,668,334,167,502,251,754,377,1132,566,283,850,425,1276,638,319,958,479,1438,719,2158,1079,3238,1619,4858,2429,7288,3644,1822,911,2734,1367,4102,2051,6154,3077,9232,4616,2308,1154,577,1732,866,433,1300,650,325,976,488,244,122,61,184,92,46,23,70,35,106,53,160,80,40,20,10,5,16,8,4,2
```

### Turning to Express
Now I want to spend some more time since I am learning express to run it as a node app. Just to have something to play with that I find interesting.