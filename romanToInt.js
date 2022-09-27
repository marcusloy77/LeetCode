var romanToInt = function(s) {
    
    
    // I -> III, then IV is 4, V 5, VI 6, VIII 8, IX 9
    
    
    //idea is to sum up like values, then pattern match so that smaller values before larger ones minus, after plus
    
    let numeralArray = s.split('')
    
    let numArr = []
    
    for (let i = 0; i < numeralArray.length; i++) {

        if (numeralArray[i] === 'I') {
            numArr.push(1)

        }
        if (numeralArray[i] === 'V') {
            numArr.push(5)
        }
        if (numeralArray[i] === 'X') {
            numArr.push(10)
        }
        if (numeralArray[i] === 'L') {
            numArr.push(50)
        }
        if (numeralArray[i] === 'C') {
            numArr.push(100)
        }
        if (numeralArray[i] === 'D') {
            numArr.push(500)
        }
        if (numeralArray[i] === 'M') {
            numArr.push(1000)
        }
    }
    
    let counter = 0
    let num = numArr[0]
    let numArr2 = []
    for (let i = 0; i< numArr.length; i++) {
        if (num === numArr[i]) {
            counter += 1
        }
        else {
            numArr2.push(counter * num)
            counter = 1
            num = numArr[i]
        }
    }
    numArr2.push(counter * num)

    console.log(numArr2)
    let total = 0
    for (let i = 0; i < numArr2.length; i++) {
        if (numArr2[i] < numArr2[i+1]) {
            console.log(numArr2[i])
            numArr2[i] = numArr2[i] * -1
        }
        total += numArr2[i]
    }
    
    return total
};
