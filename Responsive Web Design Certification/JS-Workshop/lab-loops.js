//Build a Longest Word Finder App
const findLongestWordLength = (sentence) => {
  const arrSentence = sentence.trim().split(" ")
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