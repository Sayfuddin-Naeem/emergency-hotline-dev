import { showToastMsg } from "./showToastMsg";

const historyContainer = document.querySelector('#historyContainer');

export const clearAllHistory = () => {
    if(historyContainer){
        historyContainer.innerHTML = "";
        showToastMsg();

        localStorage.removeItem('emergencyCallHistory');
        
        return true;
    }

    return false;
};