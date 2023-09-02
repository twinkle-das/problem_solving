/** Dynamic Programming and bit manupulation
 * Idea is to right shift by 1 which removes last bit === divide by 2
 * Plus checking if the number is odd or even.
 *
 *  **/

let countBits = function (n) {
  let i;
  const ans = [0];
  if (n === 0) return [0];
  for (i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }
  return console.log(ans);
};

countBits(2);
countBits(3);
countBits(5);
countBits(25);
