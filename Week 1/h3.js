// 1. Function that finds the sum of two numbers
function findSum(a, b) {
    return a + b;
}

// 2. Function that displays this result in a pretty format
function prettyPrintSum(sum) {
    console.log(`The sum of the two numbers is: ${sum}`);
}

// 3. Function that prints the sum in passive tense
function printSumPassive(sum) {
    console.log(`The sum of the two numbers has been calculated as: ${sum}`);
}

// Example usage:
const num1 = 5;
const num2 = 7;

const sum = findSum(num1, num2);
prettyPrintSum(sum);
printSumPassive(sum);
