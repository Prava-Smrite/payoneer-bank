//login button event create
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})
//deposit button event create
const dipositBtn = document.getElementById("diposit-btn");
dipositBtn.addEventListener("click", function () {
    const currentInputAmount = getInputNumber("input-amount");
    updateSpanText("deposit-amount", currentInputAmount)
    updateSpanText("balance-amount", currentInputAmount)
    document.getElementById("input-amount").value = "";
})
//withdraw button event create
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
    const currentWithdrawAmount = getInputNumber("withdraw-amount");
    updateSpanText("withdraw-input", currentWithdrawAmount);
    updateSpanText("balance-amount", -1 * currentWithdrawAmount);
    document.getElementById("withdraw-amount").value = "";
})
function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    const currentAmount = parseFloat(Amount);
    return currentAmount;
}
function updateSpanText(id, currentInputAmount) {
    const balanceAmount = document.getElementById(id).innerText;
    const currentbalanceAmount = parseFloat(balanceAmount);
    const totalBalance = currentInputAmount + currentbalanceAmount;
    document.getElementById(id).innerText = totalBalance;
}