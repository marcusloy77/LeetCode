/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    //console.log(nums)
    let outputList = []
    let wasEven = false
    let lastSum = 0
    
    lastSum = nums.reduce((total, num) => {
        if (num % 2 === 0) {
            total += num
        }
        return total
    }, 0)

    for (let i=0; i < queries.length; i++) {
        let oldNum = nums[queries[i][1]]

        nums[queries[i][1]] += queries[i][0]
        
        let newNum = nums[queries[i][1]]
        
        if (oldNum % 2 === 0) {
            if (newNum % 2 === 0) {
                lastSum = lastSum + (newNum - oldNum)
            }
            else {
                lastSum = lastSum - oldNum
            }
        } else {
            if (newNum % 2 === 0) {
                lastSum += newNum
            }
        }
        
        
        outputList.push(lastSum)
    }
    return outputList
};
