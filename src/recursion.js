/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
      if (n === 0) return 1;    
      if (n < 0) return null;
    return n  * factorial(n - 1); 
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
    var i = array.length - 1;
    if (i < 0) return 0;
    return array[i] + sum(array.slice(0, i));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    if (array.length === 0) return 0;
    var sum = 0;
    for (var i=0; i<array.length; i++) {
      if (array[i] instanceof Array) {
        sum += arraySum(array[i]);
      } else {
        sum += array[i];
      }
    }
    return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
    n = Math.abs(n);
    if (n === 0) return true;
    if (n === 1) return false;
    return isEven(n-2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    if (n === 0) return 0;
    if ( n > 0 ) return (n-1) + sumBelow(n-1); 
    else return n+1 + sumBelow(n+1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {

        var isInc = true;
        if (x > y) {
          var temp = x;
          x = y;
          y = temp;
          isInc = false;
        }
        if (x === y) return [];
        if (x+1 === y) return [];
        var res = range(x, y-1);
        res.push(y-1);
        if(isInc) return res ;
        else  res.reverse();
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    var isNeg = false;
    if (exp < 0) {
      isNeg = true;
      exp *= -1;
    }
    if (exp === 0) return 1;
    var res = base * exponent(base, exp-1);
    return !isNeg ? res : 1/res;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if (n === 0) return false;
    if (n === 1) return true;
    if (n%2 !== 0) {
      return false;
    }
    return powerOfTwo(n/2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
    if (string.length === 0) return string;
  return reverse(string.substring(1)) + string.charAt(0)
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    if (string.length === 0) return true;
    if (string.length === 1) return true;
    if (string.charAt(0).toLowerCase() !== string.charAt(string.length-1).toLowerCase()) {
      return false;
    }
    var str = string.substring(1, string.length-1);
    return palindrome(str);
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    var isNeg = false;
  if (x < 0) {
    isNeg = true;
    x = -x;
  }
  if (y < 0) y = -y;
  if (x < y) return isNeg ? -x : x;
  if (y === 0) return NaN;
  if (x === y) return 0;
  var res = modulo(x-y, y);
  return isNeg ? -res : res;
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
    var isNeg = false;
    if (x < 0) {
      isNeg = !isNeg;
      x = -x;
    }
    if (y < 0) {
      isNeg = !isNeg;
      y = -y;
    }
    if (y === 0 || x === 0) return 0;
    if (y === 1) return x;
    var res = x + multiply(x, y-1)
    return isNeg ? -res : res;
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
    var isNeg = false;
  if (x < 0) {
    isNeg = !isNeg;
    x = -x;
  }
  if (y < 0) {
    isNeg = !isNeg;
    y = -y;
  }
  if (y === 0) return NaN;
  if (x === 0) return 0;
  if (x === y) return 1;
  if (x < y) return 0;
  var res = divide(x-y, y) + 1;
  return isNeg ? -res : res;
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
    if (x < 0 || y < 0) return null;
    if (x === y) return x;
    if (x > y) return gcd(x-y, y);
    if (x < y) return gcd(x, y-x);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if (str1.length === 0 && str2.length === 0) return true;
  if (str1[0] !== str2[0]) return false;
  return compareStr(str1.substring(1), str2.substring(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
    if (str.length === 1) return [str[0]];
  var list = createArray(str.substring(1));
  list.unshift(str[0]);
  return list;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
    if (array.length === 1) return [array[0]];
  var list = reverseArr(array.slice(1, array.length));
  list.push(array[0]);
  return list;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    if (length === 0) return [];
    var list = buildList(value, length-1);
    list.push(value);
    return list;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
    if (n === 1) return ['1'];
  var list = fizzBuzz(n-1);
  if (n%3 === 0 && n%5 === 0) {
    list.push('FizzBuzz');
  } else if (n%3 === 0) {
    list.push('Fizz');
  } else if (n%5 === 0) {
    list.push('Buzz');
  } else {
    list.push(n+'');
  }
  return list;
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    if (array.length === 0) return 0;
    if (array[0] === value) return 1 + countOccurrence(array.slice(1, array.length), value);
    return countOccurrence(array.slice(1, array.length), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    if (array.length === 0) return [];
    var list = rMap(array.slice(1, array.length), callback);
    list.unshift(callback(array[0]));
    return list;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
    var count = 0;
  for (var prop in obj) {
    if (prop === key) {
      count++;
    }
    if (obj[prop] instanceof Object) {
      count += countKeysInObj(obj[prop], key);
    }
  }
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
    var count = 0;
    for (var prop in obj) {
      if (obj[prop] === value) count++;
      if (obj[prop] instanceof Object) {
        count += countValuesInObj(obj[prop], value);
      }
    }
    return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
    for (var prop in obj) {
        if (prop === oldKey) {
          obj[newKey] = obj[prop];
          delete obj[prop];
        }
        if (obj[prop] instanceof Object) {
          replaceKeysInObj(obj[prop], oldKey, newKey);
        }
      }
      return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
    if (n <= 0) return null;
  if (n === 1) return [0, 1];
  var list = fibonacci(n-1);
  if (list[n] !== undefined) return list[n];
  list[n] = list[n-1] + list[n-2];
  return list;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if (n < 0) return null;
    if (n === 0) return 0;
    if (n === 1) return 1;
    return nthFibo(n-1) + nthFibo(n-2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
    if (array.length === 0) return [];
    var list = capitalizeWords(array.slice(1, array.length));
    list.unshift(array[0].toUpperCase());
    return list;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
    if (array.length === 0) return [];
    var list = capitalizeFirst(array.slice(1, array.length));
    list.unshift(array[0][0].toUpperCase() + array[0].substring(1));
    return list;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
    var sum = 0;
  for (var prop in obj) {
    if (obj[prop] % 2 === 0) sum += obj[prop];
    if (obj[prop] instanceof Object) sum += nestedEvenSum(obj[prop]);
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
    var list = [];
  if (array.length === 0) return [];
  for (var i=0; i<array.length; i++) {
    if (array[i] instanceof Array) {
      list.push(...flatten(array[i]));
    } else {
      list.push(array[i]);
    }
  }
  return list;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
    if (str.length === 0) return obj;
    letterTally(str.substring(1), obj);
    if (obj[str[0]] === undefined) {
      obj[str[0]] = 1;
    } else {
      obj[str[0]] += 1;
    }
    return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
    if (list.length === 0) return [];
    var res = compress(list.slice(1));
    if (list[0] !== res[0]) {
      res.unshift(list[0]);
    }
    return res;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
    if (array.length === 0) return [];
    var list = augmentElements(array.slice(1), aug);
    array[0].push(aug);
    list.unshift(array[0]);
    return list;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    if (array.length === 0) return [];
  var list = minimizeZeroes(array.slice(1));
  if ((array[0] === 0 ^ list[0] === 0) || array[0] !== 0) {
    list.unshift(array[0]);
  }
  return list;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    if (array.length === 0) return [];
    var list = alternateSign(array.slice(0, array.length-1));
    var lng = array.length;
    if (lng%2 === 0) {
      if (array[lng-1] > 0) {
        array[lng-1] = -array[lng-1];
      }
    } else {
      if (array[lng-1] < 0) {
        array[lng-1] = -array[lng-1];
      }
    }
    list.push(array[lng-1]);
    return list;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    if (str.length === 0) return '';
    var tempStr = numToText(str.substring(0, str.length-1));
    var replace;
    switch (str[str.length-1]) {
      case '1': replace = 'one';
        break;
      case '2': replace = 'two';
        break;
      case '3': replace = 'three';
        break;
      case '4': replace = 'four';
        break;
      case '5': replace = 'five';
        break;
      case '6': replace = 'six';
        break;
      case '7': replace = 'seven';
        break;
      case '8': replace = 'eight';
        break;
      case '9': replace = 'nine';
        break;
      default: replace = str[str.length-1];
        break;
    }
    return tempStr + replace;
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {

};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
    var res;
    if (Array.isArray(input)) {
      res = [];
      if (input.length === 0) return [];
      for (var i=0; i<input.length; i++) {
        if (input[i] instanceof Object) {
          res.push(clone(input[i]));
        } else {
          res.push(input[i]);
        }
      }
    } else {
      if (input === null) return {};
      res = {};
      for (var prop in input) {
        if (input[prop] instanceof Object) {
          res[prop] = clone(input[prop]);
        } else {
          res[prop] = input[prop];
        }
      }
    }
    return res;
};
