export const getHistoryFromLS = () => {
    const historyDataLS = JSON.parse(localStorage.getItem('emergencyCallHistory'));
    
    return historyDataLS ? historyDataLS : [];
};