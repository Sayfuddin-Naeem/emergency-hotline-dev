export const getCurrentTime = () => {
    const currentTime = new Date();

    return currentTime.toLocaleTimeString("en-BD", 
        {
            hour12: true,
        }
    );
};