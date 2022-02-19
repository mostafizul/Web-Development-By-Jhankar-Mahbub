document.getElementById('deposit-button').addEventListener('click',function(){
    //console.log('deposit');

    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    //console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');

    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount+newDepositAmount;
    

   //update account balance

   const balanceTotal = document.getElementById('balance-total');

   const balanceTotalText = balanceTotal.innerText;
   const previousbalanceTotal = parseFloat(balanceTotalText);

   const newBalanceTotal = previousbalanceTotal + newDepositAmount;
   balanceTotal.innerText = newBalanceTotal;
    depositTotal.innerText = newDepositTotal;
    depositInput.value = " "
})