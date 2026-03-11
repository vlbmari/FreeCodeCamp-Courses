console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

// ADD items to the end of the array list
shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");
// ADD items to the start of the array list
shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

// ADD many items to the end of the array list
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");
// REMOVE items from the end of the array list
shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.")
shoppingList.unshift("Chocolate Cake" )
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.")
// REMOVE items from the start of the array list
shoppingList.shift()

// UPDATE OR ADD items at a specific position of the array list
shoppingList[0] = "Canola Oil"
console.log(getShoppingListMsg(shoppingList));