/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
  var key1= Object.keys(apple)
  var key2 = Object.keys(orange)
  var equal = true; 
 var applen = Object.keys(apple).length
 var orlen = Object.keys(orange).length
 if (applen !== orlen){
  return false; 
 }else{
for (var i = 0; i < applen; i ++){
if(key1[i] !== key2[i]){
  return false;
 }
 if (key1[i] !== key2[i])
  return false;
  else if (typeof apple[key1[i]] !== 'object'){
    if (apple [key1[i]]!== orange[key1[i]]){
      return false; 
    }
  }else{
    equal = deepEquals (apple[key1[i]], orange[key2[i]])
  }
 
}
} 
return equal;}


