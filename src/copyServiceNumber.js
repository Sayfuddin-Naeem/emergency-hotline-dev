const copyCountValue = document.querySelector('#copyCountValue');

export const copyServiceNumber = (curCard) => {
    if(curCard){
        const phnNumber = curCard.querySelector('#serviceNumber').textContent;
        alert(`Number has been copied: ${phnNumber}`);

        navigator.clipboard.writeText(phnNumber);
        let countVal = parseInt(copyCountValue.textContent);
        copyCountValue.textContent = ++countVal;
        
        return true;
    }
    return false;
};