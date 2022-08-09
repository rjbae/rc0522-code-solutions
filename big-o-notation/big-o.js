/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= 0(n)
    i++                             // 2 * n = O(2n) ~= 0(n)
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= 0(n)
    if (!seen[word]) {              // 3 * n = O(3n) ~= 0(n)
      seen[word] = true;
      unique[unique.length] = word; // 3 * n = O(3n) ~= 0(n)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(n)
  for (
    let i = 0;                      // 1 * 1 = O(n)
    i < words.length;               // 2 * n = O(2n) ~= 0(n)
    i++                             // 2 * n = O(2n) ~= 0(n)
  ) {
    const word = words[i];          // 2 * n = O(2n) ~= 0(n)
    let isUnique = true;            // 1 * 1 = O(n)
    for (
      let c = 0;                    // 1 * 1 = 0(n)
      c < i;                        // 2 * n = 0(2n^2) ~= 0(n^2)
      c++                           // 2 * n = 0(2n^2) ~= 0(n^2)
    ) {
      const comparing = words[c];   // 2 * n^2 = 0(2n^2) ~= 0(n^2)
      if (comparing === word) {     // 2 * n^2 = 0(2n^2) ~= 0(n^2)
        isUnique = false;           // 1 * n^2 = O(n^2)
      }
    }
    if (isUnique) {                 // 2 * n = O(2n) ~= 0(n)
      unique[unique.length] = word; // 2 * n = O(2n) ~= 0(n)
    }
  }
  return unique;                    // 1 * 1 = O(n)
} // Big O Notation for uniqueQuadratic: O(n^2)
