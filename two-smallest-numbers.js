function sumTwoSmallestNumbers(numbers) {  
  var numbersArray = numbers;
  var firstMin = Infinity, secondMin = Infinity; 
  for (var i= 0; i< numbersArray.length; i++) {
      if (numbersArray[i]< firstMin) {
          secondMin = firstMin;
          firstMin = numbersArray[i]; 
      } else if (numbersArray[i]< secondMin) {
          secondMin = numbersArray[i]; 
      }
    } return firstMin + secondMin;
  }