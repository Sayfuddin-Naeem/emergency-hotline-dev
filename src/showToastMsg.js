import { getHistoryFromLS } from "./getHistoryFromLS";

const bodySection = document.querySelector('#bodySection');

export const showToastMsg = () => {
    const allHistoryLS = getHistoryFromLS();
    const toastMsgDiv = document.createElement('div');

    toastMsgDiv.className = 'translate-x-full opacity-0 flex justify-end mt-8';

    if(allHistoryLS.length > 0){
        toastMsgDiv.innerHTML = `
        <div role="alert" class="alert alert-success w-[100%] mx-6 sm:mx-0 sm:w-[50%] sm:mr-12">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Successfully Deleted All History!</span>
        </div>
    `;
    }
    else{
        toastMsgDiv.innerHTML = `
            <div role="alert" class="alert alert-warning w-[100%] mx-6 sm:mx-0 sm:w-[50%] sm:mr-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>No history available to delete!</span>
            </div>
        `
    }

    bodySection.prepend(toastMsgDiv);

    requestAnimationFrame(() => {
        toastMsgDiv.classList.remove("translate-x-full", "opacity-0");
        toastMsgDiv.classList.add("translate-x-0", "opacity-100");
    });

    setTimeout(() => {
        toastMsgDiv.classList.remove("translate-x-0", "opacity-100");
        toastMsgDiv.classList.add("opacity-0", "-translate-x-full");

        setTimeout(() => {
            toastMsgDiv.remove();
        }, 500);
    }, 2500);
};