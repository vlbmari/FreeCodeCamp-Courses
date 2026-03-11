//Build a Lunch Picker Program, Not started
let lunches = [];

function addLunchToEnd(arr, str) { 
   arr.push(str)
   console.log(`${str} added to the end of the lunch menu.`);
   return arr;
}

function addLunchToStart(arr,str){
   arr.unshift(str)
   console.log(`${str} added to the start of the lunch menu.`);
   return arr;
}

function removeLastLunch(arr){
   if(arr.length === 0){
     console.log("No lunches to remove.");
   }else{
     const removedItem = arr.pop();
     console.log(`${removedItem} removed from the end of the lunch menu.`);
   }
   return arr;
}

function removeFirstLunch(arr){
   if(arr.length === 0){
     console.log("No lunches to remove.");
   }else{
     const removedItem = arr.shift();
     console.log(`${removedItem} removed from the start of the lunch menu.`);
   }
   return arr;
}

function getRandomLunch(arr){
   if(arr.length === 0){
     console.log("No lunches available.");
   }else{
     const randomLunch = Math.floor(Math.random() * arr.length) ;
     const selectedLunch   = arr[randomLunch];
     console.log(`Randomly selected lunch: ${selectedLunch}`);
   }
}

function showLunchMenu(arr){
   if(arr.length > 0){
     console.log("Menu items: " + arr.join(", "));
   }else{
     console.log("The menu is empty.");
   }
  
}

lunches = ["Milk", "Bread"]
console.log(addLunchToEnd(lunches, "Meat"))
console.log(addLunchToStart(lunches, "Vegetables"))

console.log(removeFirstLunch(lunches))
console.log(removeLastLunch(lunches))

console.log(getRandomLunch(lunches))
console.log(showLunchMenu(lunches))

