import { countCardHeartIconClick } from "./countCardHeartIconClick";

export const cardFunctionality = (ev, id, curCard) => {
    if(ev.target.id === 'cardHeartIcon'){
        countCardHeartIconClick();
        // console.log(curCard, ev);
    }
};