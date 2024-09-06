
// 1. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // 2. Remove a specific character from a string
  function removeCharacter(str, charToRemove) {
    return str.split(charToRemove).join('');
  }
  
  // 3. Check if the string contains alphabets
  function containsAlphabets(str) {
    return /[a-zA-Z]/.test(str); // Uses regex to check for alphabets
  }
  
  // 4. Find the occurrence of any character in a string
  function findOccurrences(str, char) {
    return str.split(char).length - 1; // Counts occurrences of the character
  }
  
  // 5. Make the first character of every word uppercase
  function capitalizeFirstLetterOfEachWord(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
  }
  
  // Example usage:
  const exampleString = "hello world!";
  const charToRemove = 'l';
  const charToFind = 'o';
  
  console.log("Reversed String:", reverseString(exampleString)); // Output: "!dlrow olleh"
  console.log("String after removing character:", removeCharacter(exampleString, charToRemove)); // Output: "heo word!"
  console.log("Contains Alphabets:", containsAlphabets(exampleString)); // Output: true
  console.log(`Occurrences of '${charToFind}':`, findOccurrences(exampleString, charToFind)); // Output: 2
  console.log("Capitalized First Letters:", capitalizeFirstLetterOfEachWord(exampleString)); // Output: "Hello World!"
  