//Build a Book Organizer
const books = [
  {
    title: "The Chronicles of Narnia",
    authorName: "C.S. Lewis",
    releaseYear: 1950,
  },
  {
    title: "Sherlock Holmes (A Study in Scarlet)",
    authorName: "Arthur Conan Doyle",
    releaseYear: 1887, 
  },
  {
    title: "The Vampire Diaries",
    authorName: "L. J. Smith",
    releaseYear: 1991,
  },
  {
    title: "Pretty Little Liars",
    authorName: "Sara Shepard",
    releaseYear: 2006,
  },
  {
    title: "Game of Thrones (A Game of Thrones)",
    authorName: "George R. R. Martin",
    releaseYear: 1996,
  }
]


function sortByYear(book1, book2){
  if(book1.releaseYear < book2.releaseYear){
    return -1;
  }else if(book1.releaseYear > book2.releaseYear){
    return 1;
  }else{
    return 0;
  }
}

let filteredBooks = books.filter((book) => book.releaseYear <= 1950);
filteredBooks.sort(sortByYear);


//Implement a Sorted Index Finder
function getIndexToIns(arr, num){
  arr.sort((a, b) => a - b);
  const index = arr.findIndex((elemento) => elemento >= num);
  return index === -1 ? arr.length : index;
}

//Build a Symmetric Difference Function
const arrayA = ["diamond", "stick", "apple"];
const arrayB = ["stick", "emerald", "bread"];

function diffArray(arr1, arr2) {
  const apenasNoArr1 = arr1.filter(item => !arr2.includes(item));
  const apenasNoArr2 = arr2.filter(item => !arr1.includes(item));
  return [...apenasNoArr1, ...apenasNoArr2];
}

//Implement a Value Remover Function
function destroyer(arr, ...valuesToDelete){
  const arrNew = arr.filter((item) => !valuesToDelete.includes(item));
  return arrNew;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


//Implement a Matching Object Filter
function whatIsInAName (arrObj, objSource){
  const keysObj = Object.keys(objSource);
  return arrObj.filter((obj) => 
  keysObj.every((key) => obj[key] === objSource[key])
  );
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });

//Build a Prime Number Sum Calculator
function sumPrimes (num){
  if (num < 2) return 0;
  let allNumbers = [];

  for(let i = 2; i <= num; i++){
    allNumbers.push(i)
  }

  function isPrime(n){
    for(let i = 2; i <= Math.sqrt(n); i++){
      if(n % i === 0){
        return false
      }
    }
    return true
  }

  const primes = allNumbers.filter((n) => isPrime(n));
  return primes.reduce((acc,curr) => acc + curr);

}

console.log(sumPrimes(10));

//Implement a Range-Based LCM Calculator
function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  let newArr = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    newArr.push(i);
  }

  let candidateLCM = arr[1];

  while (true) {
    const isDivisibleByAll = newArr.every(num => candidateLCM % num === 0);

    if (isDivisibleByAll) {
      return candidateLCM; 
    }
    candidateLCM += arr[1]; 
  }
}

console.log(smallestCommons([5, 1])); 

//Create a Deep Flattening Tool
function steamrollArray(arr){
  let newArr = [...arr]

  while(newArr.some((element) => Array.isArray(element))){
    newArr = newArr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(curr); 
    } else {
      return acc.concat(curr);
    }
    }, []);
  }
  return newArr
}

console.log(steamrollArray([1, {}, [3, [[4]]]]))



