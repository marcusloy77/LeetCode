//problem was to write a function that singled out the unique integer, when all other integers were in pairs
//used a bitwise strategy, as any int ^ with itself ends up as 0, even without sorting
//original plan was to sort with sort(), then just run through the array checking if ints at i+1 position were equal to current int, then moving through array until that wasnt true

function lonelyinteger(a) {
    // Write your code here
    
    let num = a.reduce((num, final) => final ^ num, 0)
    return num
}
