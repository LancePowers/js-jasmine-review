var code = require('../js/main.js');

// Problem 1
// Write a function that takes three random numbers from 0 to 100 and returns the largest one.

describe('Problem 1', function() {
  it('should return the largest number', function() {
    expect(code.largestNumber([10, 20, 30])).toBe(30);
    expect(code.largestNumber([1, 20, 3])).toBe(20);
    expect(code.largestNumber([-1, -20, -3])).not.toBe(-20);
  });
});

// Problem 2
// 0 to 100 as an argument and returns all the odd numbers from 40 to that random number in an array. If smaller than output the number.

describe('problem 2', function(){
  it('should return an array of odds or a # < 40'), function() {
    expect(code.evenForty(42)).toBe([40,42]);
    expect(code.evenForty(36)).toBe(36);
    expect(code.evenForty(45)).toBe([40,42,44]);
  }
});

// Write a function that takes a random number from 0 to 100 as an argument and returns all the even numbers from 0 to the randomized number in an array.
describe('Problem 3', function() {
  it('should return even number array to the number', function() {
    expect(code.byTwo(0,10)).toBe([0,2,4,6,8]);
    expect(code.byTwo(0,11)).toBe([0,2,4,6,8,10]);
  });
});

// Write a function that takes a random number from 0 to 100 as an argument and returns the all the odd numbers from 40 to that random number in an array. If the number is smaller than 40, return all the numbers down to the randomized one in an array - i.e., if the number is 37, you should return [40, 39, 38, 37].
// Write a function that takes a random number from 0 to 10,000 as an argument and returns the sum of its digits. For instance, if the randomized number is 1049, the function should return 14.
// Write a function that takes a random number from 0 to 10,0000 as an argument and calculates the sum of its digits repeatedly as long as the sum is a single digit. Return that number. For instance, if the randomized number is 1049, the function should return 5.
// Write a function that takes two random numbers from 0 to 100 as arguments  and returns the smaller number that is greater than one, such that both numbers are divided by it with no remainder. For instance, for 9 and 6 you should print 3. If there isn't one, simply return "Sorry!".
// Write a function that takes two random numbers from 0 to 100 as arguments and returns their least common multiple of them.
// Write a function that takes two randomized numbers as arguments and returns their average and standard deviation.
