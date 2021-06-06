export function debounce(func, delay) {
    let inDebounce;
    return function (...args) {
        if(inDebounce){
            clearTimeout(inDebounce)
        }
        inDebounce = setTimeout(
            () => func(...args), delay
        )
    }
}

// const run = debounce(val => console.log(val), 4000)
//
// run(1)
// run(2)
// run(3)