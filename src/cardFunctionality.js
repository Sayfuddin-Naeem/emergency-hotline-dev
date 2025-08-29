import { copyServiceNumber } from "./copyServiceNumber";
import { countCardHeartIconClick } from "./countCardHeartIconClick";
import { makeACall } from "./makeACall";

export const cardFunctionality = (ev, id, curCard) => {
    if(ev.target.id === 'cardHeartIcon'){
        countCardHeartIconClick();
        return true;
    }
    else if(ev.target.id === 'cardCallBtn'){
        makeACall(curCard);
    }
    else if(ev.target.id === 'cardCopyBtn'){
        copyServiceNumber(curCard);
    }
};