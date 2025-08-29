const historyContainer = document.querySelector('#historyContainer');
const historyTemplate = document.querySelector('#historyTemplate');

export const showCallHistory = (history) => {
    if(Array.isArray(history) === false){
        throw new TypeError('This is not an array. Give a valid array !!');
    }

    if(history.length > 0){
        history.forEach(currentHistory => {
            const cloneHistory = document.importNode(historyTemplate.content, true);
            
            const {id, serviceName, phone, time} = currentHistory;

            cloneHistory.querySelector('#historyValue').setAttribute('id', `history${id}`);

            cloneHistory.querySelector('#history--heading').textContent = serviceName;
            cloneHistory.querySelector('#history--service-number').textContent = phone;
            cloneHistory.querySelector('#history--time').textContent = time;

            historyContainer.append(cloneHistory);
        });

        return true;
    }
    return false;
};