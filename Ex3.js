/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

function ex3(n)
{
  var remainer = n;
  for(var i=0; i< n; i++)
  {
    if(i >= remainer)
      return remainer;
    
    if(isPrime(i) && remainer % i === 0)
      remainer = remainer / i
  }  
}

function isPrime(n){
  var dividers = [2, 3, 5, 7]
  
  for(var i= 0; i< dividers.length; i++ )
  {
    let divider = dividers[i]; 
    if(n > divider && n % divider === 0)
      return false;
  }
  return true;
}

console.log(ex3(600851475143))
