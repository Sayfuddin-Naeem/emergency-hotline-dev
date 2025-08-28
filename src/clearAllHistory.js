const historyContainer = document.querySelector('#historyContainer');

export const clearAllHistory = () => {
    if(historyContainer){
        historyContainer.innerHTML = "";
        return true;
    }

    return false;
};