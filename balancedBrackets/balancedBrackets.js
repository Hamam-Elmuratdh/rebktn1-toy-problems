/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] 
\\would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {
	var count = 0; 
	 for (var i = 0; i < str.length; i++) {
	 	//var bracket = str.char(i)
  	if (count < 0) {
      return false;
    } else if (str[i] === '(') {
      count++;
    } else if (str[i] === ')') {
      count--;
    }
    else if (str[i] === '{') {
      count++;
    } else if (str[i] === '}') {
      count--;
    }else if (str[i] === '[' ) {
      count++;
    } else if (str[i] === ']') {
      count--;
    }
  }
 
  	if (count === 0) {
   return true;
}
  return false;
};
