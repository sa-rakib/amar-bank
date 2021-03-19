// login button login handler//
const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})


//deposit button event handler //
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener('click', function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);


    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;


    document.getElementById("currentDeposit").innerText = totalDeposit;

//----------- currentBalance Number section ------------//
    
updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})

function updateSpanText(id, depositNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}

