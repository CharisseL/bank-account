var prompt = require('sync-prompt').prompt;
var chalk = require('chalk');

var balance = 1000.00;
var amount;
var deposits = [];
var withdrawals =[];


var atm = prompt('Would you like to (w)ithdraw or (d)eposit money? Or (q)uit? ');
while(atm != 'q'){
  amount = parseInt(prompt('How much? '));
  if(atm === 'd'){
  deposits.push(amount);
  }else{withdrawals.push(amount)
  }
  atm = prompt('Would you like to (w)ithdraw, (d)eposit money, (q)uit? ');
}

var totalDeposits = 0;
for(var d = 0; d < deposits.length; d++){
  balance += deposits [d];
  totalDeposits += deposits[d];
}

var totalWithdrawals = 0;
for(var w = 0; w < withdrawals.length; w++){
  balance -= withdrawals [w];
  totalWithdrawals -= withdrawals[w];
}

if(balance < 0){
  balance -= 50;
}

console.log('Deposits ', chalk.green(totalDeposits));
console.log('Withdrawals', chalk.red(totalWithdrawals));
console.log('Balance:   $' + balance.toFixed(2));
