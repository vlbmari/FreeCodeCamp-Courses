//Implement a Spinal Case Converter
function spinalCase(str){
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[\s_-]+/g, "-") 
    .toLowerCase();
}

console.log(spinalCase("TheAndyGriffith_Show"));

//Implement a Pig Latin Translator
function translatePigLatin(str){
  const vowelRegex = /^[aeiou]/;

  if(vowelRegex.test(str)) return str + "way";
  
  const consonantGroup = str.match(/^[^aeiou]+/);

  if(consonantGroup){ 
    console.log(consonantGroup)
    let match = consonantGroup[0]; 
    return str.replace(consonantGroup, "") + match + "ay";
  }
}
  console.log(translatePigLatin("rhythm"));