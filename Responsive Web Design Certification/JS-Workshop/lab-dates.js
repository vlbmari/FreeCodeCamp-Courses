//Build a Date Conversion Program
const currentDate = new Date()
const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);
console.log(currentDate);

function formatDateMMDDYYYY(obj){
  const month = obj.getMonth() + 1;
  const day = obj.getDate() ;
  const year = obj.getFullYear() 
  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`
}

function formatDateLong(obj){
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  }

  return `Formatted Date (Month Day, Year): ${obj.toLocaleDateString("en-US", options)}`
}

console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));