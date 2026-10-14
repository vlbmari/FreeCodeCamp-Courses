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

//Build a String Repeating Function
function repeatStringNumTimes(str, num){
  let newStr = [];
  for(let i = 0; i < num; i++){
    newStr.push(str);
  }
  if(num <= 0)
    return "";
    
  return newStr.join("");
}

//Build a Missing Letter Detector
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const fearNotLetter = (str) => {
  const startStr = alphabet.indexOf(str[0]);
  const endStr = str.length;
  const alphabetSliced = alphabet.slice(startStr,endStr + startStr)
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== alphabetSliced[i]) {

      return alphabetSliced[i];
    }
  }
  return undefined;
}
console.log(fearNotLetter("mnoq"))


//Build a Device Loan Ledger
function checkoutDevice(ledger, assetTag, borrower) {
  if (!ledger[assetTag]) {
    return {
      ledger,
      message: `Asset tag ${assetTag} was not found.`
    };
  }

  if (ledger[assetTag].status === "CheckedOut") {
    return {
      ledger,
      message: `Asset tag ${assetTag} is already checked out.`
    };
  }

  const updatedLedger = JSON.parse(JSON.stringify(ledger));
  updatedLedger[assetTag].status = "CheckedOut";
  updatedLedger[assetTag].borrower = {
    name: borrower.name,
    email: borrower.email
  };

  return {
    ledger: updatedLedger,
    message: `Asset tag ${assetTag} successfully checked out to ${borrower.name}.`
  };
}

function checkinDevice(ledger, assetTag) {
  if (!ledger[assetTag]) {
    return {
      ledger,
      message: `Asset tag ${assetTag} was not found.`
    };
  }

  const updatedLedger = JSON.parse(JSON.stringify(ledger));
  updatedLedger[assetTag].status = "CheckedIn";
  updatedLedger[assetTag].borrower = { name: "", email: "" };
  updatedLedger[assetTag].dueDate = "";

  return {
    ledger: updatedLedger,
    message: `Asset tag ${assetTag} successfully checked in.`
  };
}

function parseDateComponents(dateStr) {
  const [month, day, year] = dateStr.split("/").map(Number);
  return { year, month, day };
}

function isDateBefore(dateA, dateB) {
  const a = parseDateComponents(dateA);
  const b = parseDateComponents(dateB);

  if (a.year !== b.year) return a.year < b.year;
  if (a.month !== b.month) return a.month < b.month;
  return a.day < b.day;
}

function listOverdueDevices(ledger, today) {
  return Object.values(ledger)
    .filter(device => device.status === "CheckedOut" && device.dueDate && isDateBefore(device.dueDate, today))
    .sort((a, b) => {
      if (isDateBefore(a.dueDate, b.dueDate)) return -1;
      if (isDateBefore(b.dueDate, a.dueDate)) return 1;
      return 0;
    });
}

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}

//Build a Smart Pantry Restocker
const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData) {
  const seenSkus = new Set();
  const parsedItems = [];

  for (const entry of rawData) {
    const [sku, name, qtyStr, expires, zone] = entry.split("|");

    if (seenSkus.has(sku)) {
      continue;
    }
    seenSkus.add(sku);

    parsedItems.push({
      sku,
      name,
      qty: Number(qtyStr),
      expires,
      zone: zone && zone.trim() !== "" ? zone : "general"
    });
  }

  return parsedItems;
}

function planRestock(pantry, shipment) {
  const pantrySkuSet = new Set(pantry.map(item => item.sku));
  const actions = [];

  for (const item of shipment) {
    let type;

    if (item.qty <= 0) {
      type = "discard";
    } else if (pantrySkuSet.has(item.sku)) {
      type = "restock";
    } else {
      type = "donate";
    }

    actions.push({ type, item });
  }

  return actions;
}


function groupByZone(actions) {
  const grouped = {};

  for (const action of actions) {
    const zone = action.item.zone;
    if (!grouped[zone]) {
      grouped[zone] = [];
    }
    grouped[zone].push(action);
  }

  return grouped;
}


function clonePantry(pantry) {
  return pantry.map(item => ({ ...item }));
}

const initialPantry = [
  { sku: "SKU001", name: "Olive Oil", qty: 2, expires: "2027-01-01", zone: "pantry" },
  { sku: "SKU002", name: "Cheddar Cheese", qty: 1, expires: "2026-12-15", zone: "fridge" }
];

const sampleRawShipment = [
  "SKU001|Olive Oil|3|2027-06-01|pantry",
  "SKU002|Cheddar Cheese|0|2026-11-20|fridge",
  "SKU003|Almond Milk|2|2026-12-30|fridge",
  "SKU004|Granola Bar|5|2027-03-15",
  "SKU001|Olive Oil Extra|1|2027-07-01|pantry" // Duplicate SKU, will be ignored
];

const pantrySnapshot = clonePantry(initialPantry);
const parsedShipment = parseShipment(sampleRawShipment);
const restockPlan = planRestock(pantrySnapshot, parsedShipment);
const groupedActions = groupByZone(restockPlan);

console.log(groupedActions);