//Higher order function for async await error handling


export const catchErrors = fn => {
    return function(...args) {
        return fn(...args).catch((err) => {
            console.log(err);
       }) 
    }
}