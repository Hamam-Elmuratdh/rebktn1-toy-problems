/*
Balanced Parenthesis
Given a string, return true if it contains balanced parentheses ().

isBalanced("(x + y) - (4)")	// true
isBalanced("(((10 ) ()) ((?)(:)))")	// true
isBalanced("(50)(")	// false
isBalanced("") //	true
*/

 function isBalanced(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
  	
    if (count < 0) {
      return false;
    } else if (str[i] === '(') {
      count++;
    } else if (str[i] === ')') {
      count--;
    }
  }
 
  if (count === 0) {
    return true;
  }
  return false;
};

