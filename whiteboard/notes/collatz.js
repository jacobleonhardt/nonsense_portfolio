// Problem of 3n+1
// n % 2 != 0 ? 3n+1 : n/2
// Regardless of the number given (n), you end in an infinite loop of 4 > 2 > 1


// n = 3
// 3(3)+1 => 10; 10/2 => 5; 3(5)+1 => 16; 16/2 => 8; 8/2 => 4; 4/2 => 2; 2/2 => 1
// 3(1)+1 => 4; 4/2 => 2; ...
// 7 steps to get to infinite loop


// Write a function called Collatz, which accepts a number, and applies the two rules
// listed above, and returns the number of steps needed to get to 1 (or to enter
// the infinite loop).

let test = 3
let test2 = 12
let test3 = 10000.5
let test4 = 1

function collatz(num){
    let count = 0
    while (num > 1) {
        if(num%2 === 0) {
            num = num/2
        } else {
            num = (3*num)+1
        }
        count++
    }

    return count
}

console.log('>>>>>', collatz(test))
console.log('=====', collatz(test2))
console.log('+++++', collatz(test3))
console.log('-----', collatz(test4))
