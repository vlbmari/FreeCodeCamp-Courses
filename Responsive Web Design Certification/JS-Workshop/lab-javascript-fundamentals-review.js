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

//Build a Gradebook App
const array = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89];

function getAverage(arr){
  let totalItens = 0;
  let sumArr = 0;
  for (let i = 0; i < arr.length; i++){
    totalItens += 1 ;
    sumArr += arr[i];
  }
  return sumArr / totalItens;
}

function getGrade(score){
  if(score == 100){
    return "A+";
  }else if(score >= 90 && score <= 99){
    return "A";
  }else if(score >= 80 && score <= 89){
    return "B";
  }else if(score >= 70 && score <= 79){
    return "C";
  }else if(score >= 60 && score <= 69){
    return "D";
  }else if(score >= 0 && score <= 59){
    return "F";
  }
}

function hasPassingGrade(resultScore){
  let grade = getGrade(resultScore);
  if (grade === "F"){
    return false;
  }
  return true;
}

function studentMsg(arr, score){
  let msgMain = `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. `;
  if(hasPassingGrade(score) === true){ 
  return msgMain + "You passed the course.";
  }else{
    return msgMain + "You failed the course.";
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));


//Build a Title Case Converter
function titleCase(phrase) {
  const words = phrase.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word[0].toUpperCase() + word.slice(1);
    
    console.log(`Palavra processada: ${words[i]}`);
  }
  return words.join(" ");
}

console.log(titleCase("javaScript is fun"));