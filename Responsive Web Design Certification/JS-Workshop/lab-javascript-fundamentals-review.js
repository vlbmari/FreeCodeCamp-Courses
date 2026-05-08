//Build a String Inverter, Completed
function reverseString(str){
  return str.split('').reverse().join('');
}
console.log(reverseString("hello"))


//Build the Largest Number Finder
let array = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];

function largestOfAll(arr){
  let maxNumber = [];
  for(let i = 0; i < arr.length; i++){
      maxNumber.push(Math.max(...arr[i]));
    }
    return maxNumber;
  } 
console.log(largestOfAll(array));


//Build a First Element Finder
const array = [1, 3, 5, 8];
function findElement(arr, func){
  for (let i of arr){
    if(func(i) === true){
      return i;
    }
  }
  return undefined;
}
console.log(findElement([1, 3, 5, 7, 9, 10], function(num) { return num % 2 === 0; }));


//Implement the Slice and Splice Algorithm
function frankenSplice(arr1, arr2, index){
  let arr3 = [...arr2];
  return arr3.toSpliced(index, 0 , ...arr1);
}
console.log(frankenSplice([1, 2], ["a", "b"], 1));


//Build a Pyramid Generator
function pyramid(char, rows, inverted) {
  let result = "\n";
  const lines = [];

  for (let i = 1; i <= rows; i++) {
    const spaces = " ".repeat(rows - i);
    const pattern = char.repeat(2 * i - 1);
    lines.push(spaces + pattern);
  }

  if (inverted) {
    lines.reverse();
  }

  return result + lines.join("\n") + "\n";
}
