//login button development
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})
//deposit button development
const dipositBtn = document.getElementById("diposit-btn");
dipositBtn.addEventListener("click", function () {
    const inputAmount = document.getElementById("input-amount").value;
    const currentInputAmount = parseFloat(inputAmount);
    const depositAmount = document.getElementById("deposit-amount").innerText;
    const currentdepositAmount = parseFloat(depositAmount);
    const totalAmount = currentInputAmount + currentdepositAmount;
    document.getElementById("deposit-amount").innerText = totalAmount;
    document.getElementById("input-amount").value = "";
    const balanceAmount = document.getElementById("balance-amount").innerText;
    const currentbalanceAmount = parseFloat(balanceAmount);
    const totalBalance = currentbalanceAmount + currentInputAmount;
    document.getElementById("balance-amount").innerText = totalBalance;
})