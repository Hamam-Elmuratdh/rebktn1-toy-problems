/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing
 the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

function longestRun(string) {
    var result = [];
    var counter = 0;
    string = string.split( '')
    for (var i= 0 ; i<string.length; i++){
      if (string[i].valueOf === string[i].valueOf()){
       counter++
          result.push(string[i])
      }
    }
    return result
}



