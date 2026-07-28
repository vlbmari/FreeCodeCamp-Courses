//Build a Countdown
function countdown(num){
  let countArray = [];
  if (num < 1){
    return [];
  }else{
    countArray = countdown(num - 1)
    countArray.unshift(num)
    return countArray
  }
}

console.log(countdown(10))

//Build a Range of Numbers Generator
function rangeOfNumbers(startNum, endNum) {
  let arr = [];

if (startNum === endNum) {
    return [startNum];
  } else {
    arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
}

console.log(rangeOfNumbers(6, 9))