function isPalindrome(word) {
    // Convert the word to lowercase and remove non-alphabetic characters
    word = word.toLowerCase().replace(/[^a-z]/g, '');
    
    // Reverse the word
    const reversedWord = word.split('').reverse().join('');
    
    // Compare the original and reversed words
    return word === reversedWord;
  }


  console.log(isPalindrome('gag')); // true
  console.log(isPalindrome('kayak')); // true 
  console.log(ispalindrome('world'));// false