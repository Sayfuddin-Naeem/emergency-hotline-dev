import { addHistory } from "./addHistory";

const coinWallet = document.querySelector('#coinWallet');

export const makeACall = (curCard) => {
    if(curCard){
        let coinValue = parseInt(coinWallet.textContent);
        
        if(coinValue < 20){
            alert("❌ You don't have enough coins !! It takes at least 20 coins to make a call.");
        }

        else{
            const cardHeadingVal = curCard.querySelector('#cardHeading').textContent;
            const phnNumber = curCard.querySelector('#serviceNumber').textContent;

            alert(`📞 ${cardHeadingVal} ${phnNumber}...`);
            coinWallet.textContent = coinValue - 20;

            addHistory(curCard, cardHeadingVal, phnNumber);
        }
    }
};