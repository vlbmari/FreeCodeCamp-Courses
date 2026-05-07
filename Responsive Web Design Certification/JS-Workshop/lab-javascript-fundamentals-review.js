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

