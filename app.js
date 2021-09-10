var initialPrice = document.querySelector("#initial-price");
var stockQty = document.querySelector("#stock-qty");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector("#check-btn");
var outputEl = document.querySelector("#output");

function calculateProfitAndLoss(initial,qty,current){
    if(current > initial){
        var profit = (current - initial)*qty;
        var profitPercentage = (profit/initial)*100;
        outputMsg(`Yay! You are in profit😍.The Profit is ${profit.toFixed(2)} & the profit percentage is ${profitPercentage.toFixed(2)}%`)
        outputEl.style.background="green";
    }else if(initial > current){
        var loss = (initial - current)*qty;
        var lossPercentage = (loss/initial)*100;
        outputMsg(`Oops! You are in loss 😌. The loss is ${loss.toFixed(2)} and the loss percentage is ${lossPercentage.toFixed(2)}%`);
        outputEl.style.background="red";
    }else{
        outputMsg("No Pain, No gain and No gain, No pain!🙂");
        outputEl.style.color="black";
    }
};
function clickHandler(){
    var ip = Number(initialPrice.value);
    var sq = Number(stockQty.value);
    var curr = Number(currentPrice.value);

    if(ip && sq && curr){
        calculateProfitAndLoss(ip,sq,curr);
    }else{
        outputMsg("Please enter all valid input")
    }
 
};

function outputMsg(msg){
    outputEl.innerText =msg;
};

checkBtn.addEventListener("click",clickHandler);