function isPalindrome(string) {
  string = string.toLowerCase().split('');
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - 1 - i] && i !== (string.length - 1 - i)) {
      console.log("This is not a palindrome.");
      return false;
    }
  }
  console.log("This is a palindrome!");
  return true;
}

isPalindrome("Mom");
isPalindrome("racecar");
isPalindrome("Steam");
