//Build a Boolean Check Function
function booWho(x){
  if(typeof x === 'boolean'){
    return true
  }else{
    return false
  }
}

//Build an Email Masker
function maskEmail(email){
  const indexEmail = email.indexOf('@');
  email = email.replace(email.slice(1, indexEmail - 1), "*".repeat(indexEmail - 2));
  return email;
}

const email = 'apple.pie@example.com';
console.log(maskEmail(email));

//Build a Celsius to Fahrenheit Converter
function convertCtoF(tempCelsius){
  return tempCelsius * (9/5) + 32;
}

//Build a Card Counting Assistant
let count = 0;

function cardCounter(card){
  const lowCard = [2,3,4,5,6];
  const highCard = [10,"J","Q","K","A"];

  if(lowCard.includes(card)){
    count++
  }else if (highCard.includes(card)){
    count--;
  }
  let decision = count > 0 ? "Bet": "Hold";
  return `${count} ${decision}`;
}

count = 0;
cardCounter(10); cardCounter("J"); cardCounter("Q"); cardCounter("K");
console.log(cardCounter("A")); 

count = 0;
cardCounter(3); cardCounter(7); cardCounter("Q"); cardCounter(8);
console.log(cardCounter("A")); 

count = 0;
cardCounter(2); cardCounter("J"); cardCounter(9); cardCounter(2);
console.log(cardCounter(7)); 

//Build a Leap Year Calculator
//Build a Leap Year Calculator
const year = 2026;

function isLeapYear(year){
  if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  }else{
    return `${year} is not a leap year.`;
  }
}

let result = isLeapYear(year);
console.log(result);

//Implement the Truncate String Algorithm
function truncateString(str,num){
  if (str.length > num){
    return str.slice(0, num) + "..."
  }else if(str.length <= num){
    return str
  }
}

console.log(truncateString("Hello Word", 10))

//Build a Confirm the Ending Tool
const confirmEnding = (str, str2) => {
  const stringLength = str2.length;
  const endString = str.slice(-stringLength);
  
  if(endString === str2){
    return true;
  }else{
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));          
console.log(confirmEnding("Congratulation", "on")); 
console.log(confirmEnding("Open sesame", "sage"));
