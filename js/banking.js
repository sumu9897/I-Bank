document.getElementById('deposit-button').addEventListener('click', function () {
    // Handle deposit button click
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    // Update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // Update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;

    // Clear the deposit input field
    depositInput.value = '';
});

document.getElementById('withdraw-button').addEventListener('click', function () {
    // Handle withdraw button click
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // Update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // Update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // Clear withdraw input field
    withdrawInput.value = '';
});
