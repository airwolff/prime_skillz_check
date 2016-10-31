// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;

for (var i = 0; i < 5; i++) {
	checkz++;
}
console.log(checkz);

// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2

while (i > 2) {
	checkz -= 2;
	i--;
}
console.log(checkz);

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
	total += numbers[i];
}
console.log(total);

// assigns an array with the value of 7 numbers in order. assigns total to zero. Runs a for loop using the numbers array (6 times) and each time it's run it adds the value of what number is at the index it is going over (so at index 0 it add 1, index 3 it add 4, etc).
