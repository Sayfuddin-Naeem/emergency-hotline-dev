import { addHistory } from "./addHistory";

const coinWallet = document.querySelector('#coinWallet');

export const makeACall = (curCard) => {
    if(curCard){
        let coinValue = parseInt(coinWallet.textContent);
        let alertMessage = "";
        
        if(coinValue < 20){
            alertMessage = `
                <div class="flex gap-4">
                    <i class="fa-solid fa-xmark text-red-400"></i>
                    <p>You don't have enough coins !! It takes at least 20 coins to make a call.</p>
                </div>
            `;
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