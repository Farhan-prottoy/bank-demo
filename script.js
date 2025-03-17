let currentBalance = 0;
let currentDeposit = 0;
let currentWithdraw = 0;

const depositAmountInput = document.getElementById('deposit-amount');
const withdrawAmountInput = document.getElementById('withdraw-amount');
const depositButton = document.getElementById('deposit-btn');
const withdrawButton = document.getElementById('withdraw-btn');

const depositBlock = document.getElementById('current-deposit');
const withdrawBlock = document.getElementById('current-withdraw');
const balanceBlock = document.getElementById('current-balance');

depositButton.addEventListener('click', function () {
    const depositValue = parseFloat(depositAmountInput.value);

    if (isNaN(depositValue) || depositValue <= 0) {
        alert('Please enter a valid deposit amount.');
    } else {
        currentDeposit = depositValue;
        currentBalance += depositValue;
        depositBlock.textContent = currentDeposit.toFixed(2);
        balanceBlock.textContent = currentBalance.toFixed(2);
    }

    depositAmountInput.value = '';
});

withdrawButton.addEventListener('click', function () {
    const withdrawValue = parseFloat(withdrawAmountInput.value);

    if (isNaN(withdrawValue) || withdrawValue <= 0) {
        alert('Please enter a valid withdrawal amount.');
    } else if (withdrawValue > currentBalance) {
        alert('Insufficient balance for this withdrawal.');
    } else {
        currentWithdraw = withdrawValue;
        currentBalance -= withdrawValue;
        withdrawBlock.textContent = currentWithdraw.toFixed(2);
        balanceBlock.textContent = currentBalance.toFixed(2);
    }

    withdrawAmountInput.value = '';
});

document.getElementById('verify-login').addEventListener('click', function () {
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('transaction-area').style.display = 'block';
});
