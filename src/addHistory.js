import { getCurrentTime } from "./getCurrentTime";
import { getHistoryFromLS } from "./getHistoryFromLS";
import { showCallHistory } from "./showCallHistory";

export const addHistory = (curCard, cardHeadingVal, phnNumber) => {
    if(curCard){
        const historyDataLS = getHistoryFromLS();
        let curId = historyDataLS.length + 1;
        const curTime = getCurrentTime();
        
        const curHistory = {
            id: curId,
            serviceName: cardHeadingVal,
            phone: phnNumber,
            time: curTime,
        }

        historyDataLS.push(curHistory);

        localStorage.setItem('emergencyCallHistory', JSON.stringify(historyDataLS));

        showCallHistory([curHistory]);

        return true;
    }

    return false;
};