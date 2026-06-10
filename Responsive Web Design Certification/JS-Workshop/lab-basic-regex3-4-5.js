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

  //Build a Smart Word Replacement Function
  function myReplace(str, wordToReplace, newWord){
  const upper = (/^[A-Z]/);
  const lower = (/^[a-z]/);

  if (wordToReplace.match(upper) && newWord.match(lower)) {
    newWord = newWord.replace(newWord.match(lower), newWord.match(lower)[0].toUpperCase());
  }
  if (wordToReplace.match(lower) && newWord.match(upper)){
    newWord = newWord.replace(newWord.match(upper), newWord.match(upper)[0].toLowerCase())
  }
  return str.replace(wordToReplace, newWord);
}

console.log(myReplace("This has a spellngi error", "Spellngi", "spelling"))