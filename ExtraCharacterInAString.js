/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */

// Drawback with this approach is it considers the index of only the first occurence of substring.
let minExtraChar = function (s, dictionary) {
  let substring_length = 0;
  let extract_string;
  let item;
  for (item = 0; item < dictionary.length; item++) {
    if (s.includes(dictionary[item])) {
      extract_string = s.substring(
        s.indexOf(dictionary[item]),
        s.indexOf(dictionary[item]) + dictionary[item].length
      );
      substring_length += extract_string.length;
    }
  }
  return console.log(s.length - substring_length);
};

//Bottom-up dynamic programming

function minExtraChar(s, dictionary) {
  // Create a set to store the words from the dictionary for efficient lookups.
  const dict = new Set(dictionary);

  // Get the length of the input string.
  const n = s.length;

  // Initialize an array to store the minimum extra characters needed for substrings of s.
  const dp = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    // Start by assuming that adding one character is needed.
    dp[i] = dp[i - 1] + 1;

    for (let j = i - 1; j >= 0; j--) {
      // Extract the substring from j to i.
      const substring = s.substring(j, i);

      // Check if the substring exists in the dictionary.
      if (dict.has(substring)) {
        // If it exists, update dp[i] with the minimum value between the current dp[i]
        // and dp[j], which means the minimum extra characters needed.
        dp[i] = Math.min(dp[i], dp[j]);
      }
    }
  }

  // Return the minimum extra characters needed for the entire string s.
  return dp[n];
}
