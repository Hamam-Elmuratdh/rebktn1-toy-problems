/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/
function characterFrequency(str){
	var result = [];
	frequant = {};
	for (var i =0; i < str.length; i++)
		if (frequant[str[i]]){
			 frequant [str[i]]++;
			 }else{
			 frequant [str[i]] = 1; 	
			 }
	for ( var key in frequant){
		result.push([key, frequant[key]])
	}
	return result.sort(function(x,y){
		var z = y[1] - x[1]
		
		return  z;
}
// i should sort and return the out put so the numbers be in order but i did not know how to do it.