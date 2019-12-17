/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42 //	0
largestProductOfThree([1, 4, -5, -2]) // 40*/ 



function largestProductOfThree (array) {
  var result = 0;
  for (var i = 0;i<array.length; i++) {
   for (var j = i + 1;j < array.length; j++) {
     for (var x = j + 1; x < array.length; x++) {
      var prod = array[i]*array[j]*array[x];
        if (prod > result) {
          result = prod
        }
      }
    }
  }
  return result
}

