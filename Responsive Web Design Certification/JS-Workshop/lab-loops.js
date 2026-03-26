//Build a Longest Word Finder App
const findLongestWordLength = (sentence) => {
  const arrSentence = sentence.trim().split(" ")
  let maxLength = 0;
  for(const word of arrSentence){
    if(word.length > maxLength){
      maxLength = word.length;
    }
  }
  return maxLength;
}

