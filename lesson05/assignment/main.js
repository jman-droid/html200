let balance = 100;


const bankApp = function(){
  let bankAction = prompt("What would you like to do today?", 'Enter Q to quit, W to Withdraw, D to Deposit, and B to check Balance');

  switch(bankAction) {
    case bankAction = 'Q':
        alert('Goodbye');
        break;

    case bankAction = 'W':
        let userInput = prompt("How much would you like to withdraw?", 'Enter an amount');
        balance = balance - parseInt(userInput);
        alert(userInput + ' was successfully withdrawn from your account.' + 'Your remaining balance is now $ ' + balance);
        break;

    case bankAction = 'D':
      let userDeposit = prompt("How much would you like to deposit?", 'Enter an amount');
      balance = balance + parseInt(userDeposit);
      alert(userDeposit + ' was successfully deposited from your account.' + ' Your remaining balance is now $' + balance);
      break;

    case bankAction = 'B':
      alert(' Balance: $'+ balance);
      break;

    default:
    prompt('No valid input.');
      bankApp();
  }

  return bankApp();


}
bankApp()
