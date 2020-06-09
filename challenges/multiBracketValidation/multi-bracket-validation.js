'use strict';


function multiBracketValidation(input) {

  if (input.length <= 1)
    return false;
  
  let matchOB, char;
  let stack = [];
  
  let openB = ['[', '{', '('];
  let closeB = [']', '}', ')'];
  
  for (let i = 0; i < input.length; i++) {
    char = input[i];
  
    if (closeB.indexOf(char) > -1) {
      matchOB = openB[closeB.indexOf(char)];
      if (stack.length == 0 || (stack.pop() != matchOB)) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  
  return (stack.length == 0);
}
  
console.log(multiBracketValidation('([)]')); // false
console.log(multiBracketValidation('()')); // true