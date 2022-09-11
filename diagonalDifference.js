//question is how to take an input of a 'square' and calculate the difference between the sum of the two diagonals
//input looks like [[1,2,3],[4,5,6],[7,8,9]], where you need to calc abs((1 + 5 + 9) - (3 + 5 + 7))
//solution was fairly simply, just loop through with some simply tricks, works with any sized square array

function diagonalDifference(arr) {

    let shape = arr[0].length
    let diag1 = 0
    let diag2 = 0

    for (let i = 0; i < shape; i++) {
        diag1 = diag1 + arr[i][i]
        diag2 = diag2 + arr[i][shape - i - 1]
    }
    
    return Math.abs(diag1 - diag2)
    
    
}
