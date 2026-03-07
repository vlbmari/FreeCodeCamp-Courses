//Build a Boolean Check Function
function booWho(x){
  if(typeof x === 'boolean'){
    return true
  }else{
    return false
  }
}

//Build an Email Masker
function maskEmail(email){
  const indexEmail = email.indexOf('@');
  email = email.replace(email.slice(1, indexEmail - 1), "*".repeat(indexEmail - 2));
  return email;
}

const email = 'apple.pie@example.com';
console.log(maskEmail(email));
