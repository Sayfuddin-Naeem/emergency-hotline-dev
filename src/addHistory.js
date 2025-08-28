import { getCurrentTime } from "./getCurrentTime";

const historyContainer = document.querySelector('#historyContainer');
const historyTemplate = document.querySelector('#historyTemplate');
let count = 1;

export const addHistory = (curCard, cardHeadingVal, phnNumber) => {
    if(curCard){
        const cloneHistory = document.importNode(historyTemplate.content, true);
        cloneHistory.querySelector('#historyValue').setAttribute('id', `history${count++}`);

        if(cardHeadingVal){
            cloneHistory.querySelector('#history--heading').textContent = cardHeadingVal;
        }
        if(phnNumber){
            cloneHistory.querySelector('#history--service-number').textContent = phnNumber;
        }
        cloneHistory.querySelector('#history--time').textContent = getCurrentTime();

        historyContainer.append(cloneHistory);

        return true;
    }

    return false;
};