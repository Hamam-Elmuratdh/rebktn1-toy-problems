// Arrayception

// Given an array of arbitrarily nested arrays, return n, where n is the deepest level that contains a non-array value.
// 

// Examples
//  Input 	Output
//  array:
//  [ [ 5 ], [ [ ] ] ] ==>	2
//  array:
//  [ 10, 20, 30, 40 ] ==>	1
//  array:
//  [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] ==>	4
//  array:
//  [ ] ==>	0
//  array:
//  [ [ [ ] ] ] ==>	0
function arrayception(matrix){
  var result = 0; 
  for(var i = 0; i <matrix.lenght; i ++){
    for( var j =0 ; j <matrix.length; j++){
    if (!Array.isArray(matrix[i][j])){
return matrix
    }
    }
  }
  return matrix.push(result);
}