//Build an Optional Arguments Sum Function
function addTogether(num1) {
  if (typeof num1 !== "number") return undefined;

  if (arguments.length > 1) {
    const num2 = arguments[1];
    return typeof num2 === "number" ? num1 + num2 : undefined;
  }

  return function (num2) {
    if (typeof num2 !== "number") return undefined;
    return num1 + num2;
  };

}

console.log(addTogether(5)); // [Function (anonymous)]
console.log(addTogether(5)(7)); // 12

