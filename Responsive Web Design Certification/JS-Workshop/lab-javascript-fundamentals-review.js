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

//Implement a Falsy Remover
bouncer([null, NaN, 1, 2, undefined]) 
bouncer(["a", "b", "c"])
bouncer([7, "ate", "", false, 9])

function bouncer(arr){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if (arr[i]){
      newArr.push(arr[i]);  
    }else{
      arr.toSpliced(i, 1);
    }
    
  }
  return newArr;
}

//Build an Inventory Management Program
const inventory = [];

function findProductIndex(name){
  name = name.toLowerCase();
	for(let i = 0; i < inventory.length; i++){
		if(inventory[i].name == name){
		  return i;
		}
  }
	return -1
}
console.log(findProductIndex("Flour"));

function addProduct(obj){
  let indexFound = 0;
  obj.name = obj.name.toLowerCase()
  if(findProductIndex(obj.name) !== -1){
    indexFound = findProductIndex(obj.name);
    inventory[indexFound].quantity += obj.quantity;
    return console.log(`${obj.name} quantity updated`);
  }else{
    inventory.push(obj)
    return console.log(`${obj.name} added to inventory`);
  }
}

function removeProduct(name, qtd){
  name = name.toLowerCase();
  let indexProduct = findProductIndex(name);
  if(indexProduct === -1){
    return console.log(`${name} not found`);
  }

  if(inventory[indexProduct].quantity - qtd < 0){
    return console.log(`Not enough ${inventory[indexProduct].name} available, remaining pieces: ${inventory[indexProduct].quantity}`)
  }

  inventory[indexProduct].quantity -= qtd;
  console.log(`Remaining ${inventory[indexProduct].name} pieces: ${inventory[indexProduct].quantity}`);

  if(inventory[indexProduct].quantity === 0){
    inventory.splice(indexProduct, 1);
  }
}

addProduct({name: "FLOur", quantity: 5});
removeProduct("FLOUR", 5);

//Implement a Unique Sorted Union
function uniteUnique(arr1, arr2){
  let allArr = [];
  for(let arg of arguments){
    for(let i of arg){
      if(!allArr.includes(i)){
        allArr.push(i);
      }
    }
  }
  return allArr;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//Build a Password Generator App
function generatePassword(passwordLength){
  let strRandom = [];
  const allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()".split("");
  for(let i = 0; i < passwordLength; i++){
    let indexRandom = Math.floor(Math.random() * allChar.length);
    strRandom.push(allChar[indexRandom]);
  }
  return strRandom.join("");
}

const password = generatePassword(7);
console.log(`Generated password: ${password}`); 

//Design a Sum All Numbers Algorithm
function sumAll(arr){
  const numMin = Math.min(...arr)
  const numMax = Math.max(...arr);
  let allNumers = 0;
  for(let i = numMin; i <= numMax; i++){
    allNumers += i;
  }
  return allNumers;
}

sumAll([4,1]);


//Implement a DNA Pair Generator
function pairElement(str){
  let arr = [];
  for(let letter of str){
    if(letter === "A"){
      arr.push([letter, "T"]);
    }
    if(letter === "T"){
      arr.push([letter, "A"]);
    }
    if(letter === "C"){
      arr.push([letter, "G"]);
    }
    if(letter === "G"){
      arr.push([letter, "C"]);
    }
  }
  return arr;
}

pairElement("ATCGA");

//Implement an HTML Entity Converter
function convertHTML(str){
  let newStr = [];
   for(let char of str){
    switch (char) {
      case "&": char = "&amp;"; break;
      case "<": char = "&lt;"; break;
      case ">": char = "&gt;"; break;
      case '"': char = "&quot;"; break;
      case "'": char = "&apos;"; break;
    }

    newStr.push(char);
   }
  return newStr.join("");
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));