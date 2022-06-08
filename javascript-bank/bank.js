/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) && balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    var currentAccount = this.accounts[i];
    if (currentAccount.number === number) {
      return currentAccount;
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var grandTotal = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    var accountBalance = this.accounts[i].getBalance();
    grandTotal += accountBalance;
  }
  return grandTotal;
};
