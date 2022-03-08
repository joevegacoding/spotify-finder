//Higher order function for async await error handling


export const catchErrors = fn => {
    return function(...args) {
        return fn(...args).catch((err) => {
            console.log(err);
       }) 
    }
}

// Function that formats milliseconnds to time duration in minutes and seconds. Could also be optimized for hours.

export const formatDuration = milliSeconds => {
    const minutes = Math.floor(milliSeconds / 60000);
    const seconds = Math.floor((milliSeconds / 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0': ''}${seconds}`;

}