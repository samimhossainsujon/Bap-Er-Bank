document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const NewWithdrawString =withdrawField.value;
    const NewWithdrawAmount = parseFloat(NewWithdrawString);

    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

   


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    
    withdrawField.value= '';

    if(NewWithdrawAmount > previousBalanceTotal){
        alert('bap er e ato tk nai');
        return stop;
    }

    const currentWithdrawTotal = previousWithdrawTotal + NewWithdrawAmount;
    withdrawTotalElement.innerText= currentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - NewWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
   
})