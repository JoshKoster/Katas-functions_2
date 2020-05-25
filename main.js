// add
function add (x, y){
    return x + y
}
add(2, 4)
console.log(add(2, 4))

// multiply
function multiply(a, b){

    let total = 0
    for (let i=0; i < b; i++) {
        total = add(a, total)
    }
    return total
}
multiply(5,3)
console.log(multiply(5,3))

// power exponent
function power(x, n) {
    let result = 1
    for (let i= 0; i < n; i++) {
    result = multiply(x, result)
    }
    console.log(result)
    return result
}
power(2, 8)

// faction
function factoral (z) {
    let final = 5
    for (let i= 1; i < z; i++){
    final = multiply(final, i)
    }
    console.log(final)
    return final
}
factoral (5)

// fibonacci 
function fibonacci(f){
    let fib1= 0
    let fib2= 1
    let nextNum
    for(let i =2; i < f; i++){
        nextNum = add(fib1, fib2)
        fib1 = fib2
        fib2 = nextNum
    }
    console.log(nextNum)
    return nextNum
}
fibonacci (8)
