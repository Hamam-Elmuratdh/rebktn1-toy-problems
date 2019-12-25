/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (
) {
  // TODO: your solution here
  var result = [];
  var round = ["R","S","P"]
  for (var i = 0; i<round.length; i++){
  	for ( var j = 0; j<round.length; j++){
  		for(var x =0 ; x<round.length; x++){
  			var array = [];
  			array.push(round[i],round[j],round[x])
  			result.push(array)
  		}
  	}
  }
  return result

  
};
