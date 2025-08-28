const heartIconClickValue = document.querySelector('#heartIconClickValue');

export const countCardHeartIconClick = () => {
    let clickValue = parseInt(heartIconClickValue.textContent);
    heartIconClickValue.textContent = ++clickValue;

    return clickValue;
};