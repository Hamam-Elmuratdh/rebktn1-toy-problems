/* Complete the function that determines the score of a hand in the card game Blackjack (aka 21).

The function receives an array of strings that represent each card in the hand ("2", "3", ..., "10", "J", "Q", "K" or "A") and should return the score of the hand (integer).
Scoring rules:

Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

Return the highest score of the cards that is less than or equal to 21.
 If there is no score less than or euqal to 21 return the smallest score more than 21.
Examples

["A"]                           ==>  11
["A", "J"]                      ==>  21
["A", "10", "A"]                ==>  12
["5", "3", "7"]                 ==>  15
["5", "4", "3", "2", "A", "K"]  ==>  25 */
function blackJack(array){
	var count = 0;
	var result = []
	for (var i = 0; i < array.length; i ++){
		if (array [i] = 'Q' || array[i] = 'K'|| arra[i] = 'J')
			count += 10;
}
//if A equals the same element in the iput push A to result
// itterate again over the array if the count equal or less than 21 we will add 11 to it 
// else we will add 1 
//return count
}