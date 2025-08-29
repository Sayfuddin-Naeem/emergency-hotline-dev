const historyContainer = document.querySelector('#historyContainer');

export const clearAllHistory = () => {
    if(historyContainer){
        historyContainer.innerHTML = "";

        localStorage.removeItem('emergencyCallHistory');

        return true;
    }

    return false;
};