const multiply = (a,b) => a * b;
const multiplyX = x => a => multiply(a, x)

const multiplyTwo = a => multiply(a,2)

const multiplyThree = multiplyX(3)

const multiplyFour = multiplyX(4)

const result1 = multiplyThree(3) // === const result1 = multiplyX(3)(3)
const result2 = multiplyFour(3) // === const result2 = multiplyX(4)(3)

//----------------------------------------------------------------------------------

// 커링의 원리를 응용한 함수이며 여타 오픈소스 라이브러리에 내장되어 있는 경우가 많으며 복붙해서 사용해도 된다.
function compose(...args){
    return args.reduce( (prevFunc, nextFunc) => {
        return (x) => {
            return nextFunc(prevFunc(x));
        }
    }, k => k);
}
const total_func = compose(
    // 고차함수가 순서대로 계산된다.
    //func1
    //func2
    //func3
    //func...
)