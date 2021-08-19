// On this file we'll learn about how early return works.
//  We use early returns for validation. For example, if we are trying to deposit some money on certain account we can't accept negative values, right?
//  To avoid this We can use early returns. Let's check this out!

class Account{
    balance;

    deposit(x){
        if(x<=0){
            return; //exits the function
        }

        this.balance +=x;
    }
}

const personAccount = new Account();
personAccount.balance=100;
personAccount.deposit(-100);

console.log(personAccount);

personAccount.deposit(50);
console.log(personAccount);