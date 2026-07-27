class BankAccount{
  constructor(){
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount){
    if(amount > 0){
      this.transactions.push({type: "deposit", amount: amount});
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`
    }else{
      return "Deposit amount must be greater than zero."
    }
  }

  withdraw(amount){
    if(amount > 0 && amount <= this.balance){
      this.transactions.push({type: "withdraw", amount: amount});
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }else if(amount <= 0 || amount > this.balance){
      return "Insufficient balance or invalid amount.";
    }
  }

  checkBalance(){
    return `Current balance: $${this.balance}`
  }

  listAllDeposits(){
   const deposits = this.transactions.filter(transaction => transaction.type === "deposit");
    let allAmounts = [];
    for(let deposit of deposits){
      allAmounts.push(deposit.amount);
    }
    return `Deposits: ${allAmounts.join(",")}`;
  }
  
  listAllWithdrawals(){
    const withdrawals = this.transactions.filter(transaction => transaction.type === "withdraw");
    let allAmounts = [];
    for(let withdraw of withdrawals){
      allAmounts.push(withdraw.amount);
    }
    return `Withdrawals: ${allAmounts.join(",")}`;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(10000);
myAccount.deposit(5000);
myAccount.deposit(7500);
myAccount.withdraw(3700);
myAccount.withdraw(1800);
console.log(myAccount.checkBalance())
console.log(myAccount.listAllDeposits())