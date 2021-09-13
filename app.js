var initialPrice = document.querySelector("#initial-price");
var stockQty = document.querySelector("#stock-qty");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector("#check-btn");
var outputEl = document.querySelector("#output");

function calculateProfitAndLoss(initial,qty,current){
    
    if (initial <= 0 || qty <= 0 || current <= 0) {
        return outputEl.innerText = "Please enter valid inputs";
    }
    if(current > initial){
        var profit = (current - initial)*qty;
        var profitPercentage = (profit/(initial*qty))*100;
        outputMsg(`Yay! You are in profit😍.The Profit is ${profit.toFixed(2)} & the profit percentage is ${profitPercentage.toFixed(2)}%`)
        outputEl.style.background="green";
    }else if(initial > current){
        var loss = (initial - current)*qty;
        var lossPercentage = (loss/initial)*100;
        outputMsg(`Oops! You are in loss 😌. The loss is ${loss.toFixed(2)} and the loss percentage is ${lossPercentage.toFixed(2)}%`);
        outputEl.style.background="red";
    }else{
        outputMsg("No gain, No pain! means No profit or no loss yet! 🙂");
        outputEl.style.color="black";
    }
};
function clickHandler(){
    var ip = Number(initialPrice.value);
    var sq = Number(stockQty.value);
    var curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip,sq,curr);
};

function outputMsg(msg){
    outputEl.innerText =msg;
};

checkBtn.addEventListener("click",clickHandler);