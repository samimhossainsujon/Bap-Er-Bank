// 1.step-1: add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
   
   // step-2: get the current deposit total
    // for not-input (element other than input textarea) use innerText to get the text 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    depositTotalElement.innerText =currentDepositTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    

    depositField.value ='';
})