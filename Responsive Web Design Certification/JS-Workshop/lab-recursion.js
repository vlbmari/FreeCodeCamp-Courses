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