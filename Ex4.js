/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function largestPalindrome(start)
{
  var palindrome = 0;
  for(var i = start; i >= 0; i--) 
  {
	  for(var j = start; j >= 0; j--)
    {
  	  var nr = i * j;
      var reverse = nr.toString().split('').reverse().join('');
      if(nr.toString() === reverse && nr > palindrome)
    	  palindrome =  nr;
    }
  }

	return palindrome;
}  


var element= document.getElementById("display");
element.innerHTML = largestPalindrome(999);
