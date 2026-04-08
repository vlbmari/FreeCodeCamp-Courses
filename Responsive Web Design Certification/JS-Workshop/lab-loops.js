//Build a Longest Word Finder App
const findLongestWordLength = (sentence) => {
  const arrSentence = sentence.trim().split(" ");
  let maxLength = 0;
  for(const word of arrSentence){
    if(word.length > maxLength){
      maxLength = word.length;
    }
  }
  return maxLength;
}

//Build a Factorial Calculator
const num = 5;
function factorialCalculator(num){
  let result = 1;
  for(let i = 1; i <= num; i++){
    result = result * i;
  }

  return result;
}

const factorial = factorialCalculator(num)
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

//Implement the Mutations Algorith
const names = ["Mariana", "Mari"]
const names2 = ["Patricia", "Paty"]
function mutation(arr){
  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase();
  for(let i = 0; i < second.length; i++){
    if(!first.includes(second[i])){
      return false;
    }
  }
  return true;
}
  
console.log(mutation(names));

//Implement the Chunky Monkey Algorithm
const array = [0, 1, 2, 3, 4, 5];
function chunkArrayInGroups(arr, size){
  if (size < 1) {
    console.log("Chunk size must be >= 1");
    return;
  }
  let chunck = [];
  for(let i = 0; i < arr.length; i += size){
    chunck.push(arr.slice(i, i + size));
  }
  return chunck;
  
  
}
console.log(chunkArrayInGroups(array,2))

//Build a Profile Lookup
function lookUpProfile(name, property) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(property)) {
        return contacts[i][property];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

